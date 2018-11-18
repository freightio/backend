package main

import (
	"log"
	"net"

	_ "github.com/freightio/api-gateway/types"
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
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
