package service

import (
	"context"
	"time"

	pb "github.com/freightio/backend/service"
)

// server is used to implement helloworld.GreeterServer.
type Server struct{}

func (s *Server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	// conn, err := grpc.Dial("echo:50051", grpc.WithInsecure())
	// if err != nil {
	// 	return nil, err
	// }
	// reply, er := echo.NewEchoClient(conn).Ping(ctx, &types.Empty{})
	// if er != nil {
	// 	return nil, err
	// }
	return &pb.HelloReply{Message: "Hello " + in.Name + "-" + time.Now().String()}, nil
}

func (s *Server) SayBye(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	return &pb.HelloReply{Message: "Hello " + in.Name}, nil
}
