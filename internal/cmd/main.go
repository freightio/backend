package main

import (
	"log"
	"net"

	impl "github.com/freightio/backend/internal/impl/service"
	pb "github.com/freightio/backend/service"
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
	pb.RegisterGreeterServer(s, &impl.Server{})
	pb.RegisterOrdersServer(s, &impl.OrderServerImpl{})
	pb.RegisterUsersServer(s, &impl.UserServerImpl{})
	pb.RegisterWalletsServer(s, &impl.WalletServerImpl{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
