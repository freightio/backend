package service

import (
	"context"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service"
)

const (
	userTable = "users"
)

type UserServerImpl struct{}

func (s *UserServerImpl) Add(ctx context.Context, in *pb.User) (*pb.User, error) {
	in.Id = in.Tel //time.Now().String()
	if err := biz.Insert(userTable, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *UserServerImpl) Get(ctx context.Context, in *pb.IDRequest) (*pb.User, error) {
	user := pb.User{}
	if err := biz.GetById(userTable, in.Id, &user); err != nil {
		return nil, err
	}
	return &user, nil
}

func (s *UserServerImpl) Update(ctx context.Context, in *pb.User) (*pb.User, error) {
	if err := biz.Update(userTable, in.Id, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *UserServerImpl) List(ctx context.Context, in *pb.User) (*pb.UserList, error) {
	users := []*pb.User{}
	if err := biz.List(userTable, &users, "order by data->'$.created' desc"); err != nil {
		return nil, err
	}
	return &pb.UserList{Items: users}, nil
}

func (s *UserServerImpl) Delete(ctx context.Context, in *pb.IDRequest) (*pb.User, error) {
	if err := biz.Delete(userTable, in.Id); err != nil {
		return nil, err
	}
	return &pb.User{}, nil
}

func (s *UserServerImpl) Login(ctx context.Context, in *pb.User) (*pb.User, error) {
	user := pb.User{}
	err := biz.Get(userTable, map[string]interface{}{"$.tel": in.Tel, "$.password": in.Password}, &user)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (s *UserServerImpl) Sign(ctx context.Context, in *pb.User) (*pb.User, error) {
	user := pb.User{}
	err := biz.Get(userTable, map[string]interface{}{"$.tel": in.Tel}, &user)
	if err != nil {
		return nil, err
	}
	user.Sign = in.Sign
	return s.Update(ctx, &user)
}
