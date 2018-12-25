package service

import (
	"context"

	"github.com/freightio/backend/internal/impl/biz"
	pb "github.com/freightio/backend/service"
)

const (
	vehicleTable = "vehicles"
)

func init() {
	vehicle1 := pb.Vehicle{Id: "1", Name: "小面包车", Image: "assets/img/1.png", Weight: "800公斤", Lwh: "1.8*1.2*1.1米", Cube: "2.4方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 30}, Then: 3}}
	biz.Upsert(vehicleTable, vehicle1.Id, vehicle1)
	vehicle2 := pb.Vehicle{Id: "2", Name: "中面包车", Image: "assets/img/2.png", Weight: "1.2吨", Lwh: "2.8*1.5*1.3米", Cube: "5.5方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 56}, Then: 4}}
	biz.Upsert(vehicleTable, vehicle2.Id, vehicle2)
	vehicle3 := pb.Vehicle{Id: "3", Name: "小货车", Image: "assets/img/3.png", Weight: "1.5吨", Lwh: "2.1*1.7*1.6米", Cube: "5.7方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 68}, Then: 4}}
	biz.Upsert(vehicleTable, vehicle3.Id, vehicle3)
	vehicle4 := pb.Vehicle{Id: "4", Name: "中货车", Image: "assets/img/4.png", Weight: "1.8吨", Lwh: "4.2*1.8*1.8米", Cube: "13.6方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 120}, Then: 5}}
	biz.Upsert(vehicleTable, vehicle4.Id, vehicle4)
	vehicle5 := pb.Vehicle{Id: "5", Name: "大货车", Image: "assets/img/5.png", Weight: "7吨", Lwh: "7.6*2.3*2.5米", Cube: "43.7方",
		Price: &pb.Price{Start: &pb.Start{Distance: 5, Fee: 410}, Then: 10}}
	biz.Upsert(vehicleTable, vehicle5.Id, vehicle5)
}

type VehicleImpl struct{}

func (s *VehicleImpl) List(ctx context.Context, in *pb.Empty) (*pb.VehicleList, error) {
	vehicles := []*pb.Vehicle{}
	if err := biz.List(vehicleTable, &vehicles); err != nil {
		return nil, err
	}
	return &pb.VehicleList{Items: vehicles}, nil
}
