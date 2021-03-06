package service

import (
	"context"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service/sdk/go"
	"github.com/gogo/protobuf/types"
)

const (
	userTable = "users"
)

type UserServerImpl struct{}

func (s *UserServerImpl) Add(ctx context.Context, in *pb.User) (*pb.User, error) {
	in.Id = in.Tel //time.Now().String()
	in.Created = types.TimestampNow()
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

func (s *UserServerImpl) List(in *pb.User, stream pb.Users_ListServer) error {
	users := []*pb.User{}
	if err := biz.List(userTable, &users, "order by data->'$.created' desc"); err != nil {
		return err
	}

	for _, v := range users {
		if err := stream.Send(v); err != nil {
			return err
		}
	}

	return nil
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
