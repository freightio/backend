package service

import (
	"context"

	pb "github.com/freightio/backend/api/go"
	"github.com/freightio/backend/internal/impl/biz"
	"github.com/gogo/protobuf/types"
)

const (
	walletTable = "wallets"
)

type WalletServerImpl struct{}

func (s *WalletServerImpl) Add(ctx context.Context, in *pb.Account) (*pb.Account, error) {
	in.Id = types.TimestampNow().String()
	in.Created = types.TimestampNow()
	if err := biz.Insert(walletTable, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *WalletServerImpl) Total(ctx context.Context, in *pb.Account) (*pb.Account, error) {
	//workaround
	accounts := []*pb.Account{}
	if err := biz.List(walletTable, &accounts, "WHERE data->'$.userId'='"+in.UserId+"'"); err != nil {
		return nil, err
	}
	var totalFee float32
	for _, v := range accounts {
		totalFee = totalFee + v.Fee
	}
	in.Fee = totalFee
	return in, nil
}

func (s *WalletServerImpl) List(ctx context.Context, in *pb.User) (*pb.AccountList, error) {
	accounts := []*pb.Account{}
	if err := biz.List(walletTable, &accounts, "order by data->'$.created' desc"); err != nil {
		return nil, err
	}
	return &pb.AccountList{Items: accounts}, nil
}
