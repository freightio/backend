package service

import (
	"context"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service/sdk/go"
	"github.com/gogo/protobuf/types"
)

const (
	certificationTable = "certifications"
)

type CertificationImpl struct{}

func (s *CertificationImpl) Add(ctx context.Context, in *pb.Certification) (*pb.Certification, error) {
	in.Id = types.TimestampNow().String()
	in.Created = types.TimestampNow()
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

	if in.Status != "" {
		certification.Status = in.Status
	}
	if in.ImageData != "" {
		certification.ImageData = in.ImageData
	}
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

func (s *CertificationImpl) Verify(ctx context.Context, in *pb.IDRequest) (*types.BoolValue, error) {
	certifications := []*pb.Certification{}
	if err := biz.List(certificationTable, &certifications, "WHERE data->'$.userId'='"+in.Id+"'"); err != nil {
		return nil, err
	}
	if len(certifications) == 0 {
		return &types.BoolValue{Value: false}, nil
	}
	verified := true
	for _, v := range certifications {
		if v.Status != "通过" {
			verified = false
			break
		}
	}
	return &types.BoolValue{Value: verified}, nil
}
