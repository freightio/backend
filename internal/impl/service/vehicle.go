package service

import (
	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service/sdk/go"
	"github.com/gogo/protobuf/types"
)

const (
	vehicleTable = "vehicles"
)

func init() {
	vehicle1 := pb.Vehicle{Id: "1", Name: "小面包车", Image: "assets/imgs/1.png", Weight: "800公斤", Lwh: "1.8*1.2*1.1米", Cube: "2.4方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 30.00}, Then: 3}}
	biz.Upsert(vehicleTable, vehicle1.Id, vehicle1)
	vehicle2 := pb.Vehicle{Id: "2", Name: "中面包车", Image: "assets/imgs/2.png", Weight: "1.2吨", Lwh: "2.8*1.5*1.3米", Cube: "5.5方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 56.00}, Then: 4}}
	biz.Upsert(vehicleTable, vehicle2.Id, vehicle2)
	vehicle3 := pb.Vehicle{Id: "3", Name: "小货车", Image: "assets/imgs/3.png", Weight: "1.5吨", Lwh: "2.1*1.7*1.6米", Cube: "5.7方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 68.00}, Then: 4}}
	biz.Upsert(vehicleTable, vehicle3.Id, vehicle3)
	vehicle4 := pb.Vehicle{Id: "4", Name: "中货车", Image: "assets/imgs/4.png", Weight: "1.8吨", Lwh: "4.2*1.8*1.8米", Cube: "13.6方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 120.00}, Then: 5}}
	biz.Upsert(vehicleTable, vehicle4.Id, vehicle4)
	vehicle5 := pb.Vehicle{Id: "5", Name: "大货车", Image: "assets/imgs/5.png", Weight: "7吨", Lwh: "7.6*2.3*2.5米", Cube: "43.7方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 410.00}, Then: 10}}
	biz.Upsert(vehicleTable, vehicle5.Id, vehicle5)
}

type VehicleImpl struct{}

func (s *VehicleImpl) List(in *types.Empty, stream pb.Vehicles_ListServer) error {
	vehicles := []*pb.Vehicle{}
	if err := biz.List(vehicleTable, &vehicles); err != nil {
		return err
	}

	for _, v := range vehicles {
		if err := stream.Send(v); err != nil {
			return err
		}
	}

	return nil
}
