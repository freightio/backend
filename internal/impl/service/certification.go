package service

import (
	"context"
	"time"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service"
)

const (
	certificationTable = "certifications"
)

type CertificationImpl struct{}

func (s *CertificationImpl) Add(ctx context.Context, in *pb.Certification) (*pb.Certification, error) {
	in.Id = time.Now().String()
	in.Created = time.Now().Unix()
	if err := biz.Insert(certificationTable, in); err != nil {
		return nil, err
	}
	return in, nil
}

//update status for now
func (s *CertificationImpl) Update(ctx context.Context, in *pb.Certification) (*pb.Certification, error) {
	certification := pb.Certification{}
	if err := biz.GetById(certificationTable, in.Id, &certification); err != nil {
		return nil, err
	}

	certification.Status = in.Status
	if err := biz.Update(certificationTable, in.Id, certification); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *CertificationImpl) List(cert *pb.Certification, stream pb.Certifications_ListServer) error {
	clause := ""
	if cert.UserId != "" {
		clause = "WHERE data->'$.userId'='" + cert.UserId + "'"
	}
	//admin only
	if cert.Status != "" {
		clause = "WHERE data->'$.status'='" + cert.Status + "'"
	}
	certifications := []*pb.Certification{}
	if err := biz.List(certificationTable, &certifications, clause); err != nil {
		return err
	}

	for _, v := range certifications {
		if err := stream.Send(v); err != nil {
			return err
		}
	}
	return nil
}

func (s *CertificationImpl) IsVerified(ctx context.Context, in *pb.UserRequest) (*pb.Verified, error) {
	certifications := []*pb.Certification{}
	if err := biz.List(certificationTable, &certifications, "WHERE data->'$.userId'='"+in.Id+"'"); err != nil {
		return nil, err
	}
	if len(certifications) == 0 {
		return &pb.Verified{Result: false}, nil
	}
	verified := true
	for _, v := range certifications {
		if v.Status != "pass" {
			verified = false
			break
		}
	}
	return &pb.Verified{Result: verified}, nil
}
