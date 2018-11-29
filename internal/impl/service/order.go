package service

import (
	"context"
	"time"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service"
)

const (
	tableName = "orders"
)

type OrderServerImpl struct{}

func (s *OrderServerImpl) Add(ctx context.Context, in *pb.Order) (*pb.Order, error) {
	in.Id = time.Now().String()
	//in.Created = time.Now().Unix()
	if err := biz.Insert(tableName, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *OrderServerImpl) Get(ctx context.Context, in *pb.OrderRequest) (*pb.Order, error) {
	order := pb.Order{}
	if err := biz.GetById(tableName, in.Id, &order); err != nil {
		return nil, err
	}
	return &order, nil
}

func (s *OrderServerImpl) Update(ctx context.Context, in *pb.Order) (*pb.Order, error) {
	if err := biz.Update(tableName, in.Id, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *OrderServerImpl) List(ctx context.Context, in *pb.Order) (*pb.OrderList, error) {
	orders := []*pb.Order{}
	if err := biz.List(tableName, &orders); err != nil {
		return nil, err
	}
	return &pb.OrderList{Items: orders}, nil
}

func (s *OrderServerImpl) Delete(ctx context.Context, in *pb.OrderRequest) (*pb.Order, error) {
	if err := biz.Delete(tableName, in.Id); err != nil {
		return nil, err
	}
	return &pb.Order{}, nil
}
