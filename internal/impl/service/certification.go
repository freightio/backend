package service

import (
	"context"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service"
)

const (
	certificationTable = "certifications"
)

type CertificationImpl struct{}

func (s *CertificationImpl) Add(ctx context.Context, in *pb.Certification) (*pb.Certification, error) {
	if err := biz.Insert(certificationTable, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *CertificationImpl) List(ctx context.Context, in *pb.UserRequest) (*pb.CertificationList, error) {
	certifications := []*pb.Certification{}
	if err := biz.List(certificationTable, &certifications, "WHERE data->'$.userId'='"+in.Id+"'"); err != nil {
		return nil, err
	}
	return &pb.CertificationList{Items: certifications}, nil
}
