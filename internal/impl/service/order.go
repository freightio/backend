package service

import (
	"context"
	"log"
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
	if err := biz.Update(orderTable, in.Id, order); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *OrderServerImpl) ListByPositon(ctx context.Context, in *pb.Position) (*pb.OrderList, error) {
	log.Println("here ", in)
	allOrders := []*pb.Order{}
	if err := biz.List(orderTable, &allOrders, "where data->'$.status'<>'accept' or data->'$.status' is null order by data->'$.created' desc"); err != nil {
		return nil, err
	}
	orders := []*pb.Order{}
	if in.Location != "" {
		loc1 := strings.Split(in.Location, ",")
		for _, v := range allOrders {
			loc2 := strings.Split(v.From.Location, ",")
			if biz.EarthDistance(biz.S2F(loc1[0]), biz.S2F(loc1[1]), biz.S2F(loc2[0]), biz.S2F(loc2[1])) < 10000 {
				orders = append(orders, v)
			}
		}
	} else {
		orders = allOrders
	}
	return &pb.OrderList{Items: orders}, nil
}

func (s *OrderServerImpl) ListByUser(ctx context.Context, in *pb.User) (*pb.OrderList, error) {
	orders := []*pb.Order{}
	if err := biz.List(orderTable, &orders, "where data->'$.sender.tel'='"+in.Tel+"' or data->'$.driverId'='"+in.Tel+"' order by data->'$.created' desc"); err != nil {
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
