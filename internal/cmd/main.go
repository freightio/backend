package main

import (
	"log"
	"net"

	pb "github.com/freightio/backend/api/sdk/go"
	impl "github.com/freightio/backend/internal/impl/service"
	"google.golang.org/grpc"
)

const (
	port = ":50051"
)

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterVehiclesServer(s, &impl.VehicleImpl{})
	pb.RegisterOrdersServer(s, &impl.OrderServerImpl{})
	pb.RegisterUsersServer(s, &impl.UserServerImpl{})
	pb.RegisterWalletsServer(s, &impl.WalletServerImpl{})
	pb.RegisterCertificationsServer(s, &impl.CertificationImpl{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
