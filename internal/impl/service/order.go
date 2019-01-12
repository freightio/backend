package service

import (
	"context"
	"strings"
	"time"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service"
)

const (
	orderTable = "orders"
)

type OrderServerImpl struct{}

func (s *OrderServerImpl) Add(ctx context.Context, in *pb.Order) (*pb.Order, error) {
	in.Id = time.Now().String()
	if err := biz.Insert(orderTable, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *OrderServerImpl) Get(ctx context.Context, in *pb.OrderRequest) (*pb.Order, error) {
	order := pb.Order{}
	if err := biz.GetById(orderTable, in.Id, &order); err != nil {
		return nil, err
	}
	return &order, nil
}

func (s *OrderServerImpl) Update(ctx context.Context, in *pb.Order) (*pb.Order, error) {
	order, err := s.Get(ctx, &pb.OrderRequest{Id: in.Id})
	if err != nil {
		return nil, err
	}
	order.Status = in.Status
	if in.DriverId != "" {
		order.DriverId = in.DriverId
	}
	if err := biz.Update(orderTable, in.Id, order); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *OrderServerImpl) ListByPositon(in *pb.Position, stream pb.Orders_ListByPositonServer) error {
	orders := []*pb.Order{}
	lat := strings.Split(in.Location, ",")[0]
	lon := strings.Split(in.Location, ",")[1]
	if err := biz.List("", &orders, biz.DistanceSQL(lon, lat)); err != nil {
		return err
	}

	for _, v := range orders {
		if err := stream.Send(v); err != nil {
			return err
		}
	}

	return nil
}

func (s *OrderServerImpl) ListByUser(ctx context.Context, in *pb.User) (*pb.OrderList, error) {
	orders := []*pb.Order{}
	if err := biz.List(orderTable, &orders, "where data->'$.sender.id'='"+in.Id+"' or data->'$.driverId'='"+in.Id+"' order by data->'$.created' desc"); err != nil {
		return nil, err
	}
	return &pb.OrderList{Items: orders}, nil
}

func (s *OrderServerImpl) Delete(ctx context.Context, in *pb.OrderRequest) (*pb.Order, error) {
	if err := biz.Delete(orderTable, in.Id); err != nil {
		return nil, err
	}
	return &pb.Order{}, nil
}

func (s *OrderServerImpl) SignAlipay(ctx context.Context, in *pb.Order) (*pb.SignReply, error) {
	v, err := biz.SignAlipay(in.Fee)
	if err != nil {
		return nil, err
	}
	return &pb.SignReply{Signed: v}, nil
}
