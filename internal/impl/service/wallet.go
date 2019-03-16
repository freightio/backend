package service

import (
	"context"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service/sdk/go"
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

func (s *WalletServerImpl) List(in *pb.User, stream pb.Wallets_ListServer) error {
	accounts := []*pb.Account{}
	if err := biz.List(walletTable, &accounts, "order by data->'$.created' desc"); err != nil {
		return err
	}

	for _, v := range accounts {
		if err := stream.Send(v); err != nil {
			return err
		}
	}
	return nil
}
