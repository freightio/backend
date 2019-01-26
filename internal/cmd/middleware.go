package main

import (
	"context"
	"log"

	"github.com/freightio/backend/internal/impl/biz"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

func interceptors() []grpc.ServerOption {
	return []grpc.ServerOption{
		grpc.UnaryInterceptor(UnaryServerInterceptor()),
		grpc.StreamInterceptor(StreamServerInterceptor()),
	}
}

// UnaryServerInterceptor returns a new unary server interceptors that performs per-request auth.
func UnaryServerInterceptor() grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
		if err := auth(ctx); err != nil {
			return nil, err
		}
		return handler(ctx, req)
	}
}

// StreamServerInterceptor returns a new unary server interceptors that performs per-request auth.
func StreamServerInterceptor() grpc.StreamServerInterceptor {
	return func(srv interface{}, stream grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		if err := auth(stream.Context()); err != nil {
			return err
		}
		return handler(srv, stream)
	}
}

func auth(ctx context.Context) error {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return status.Errorf(codes.InvalidArgument, "Retrieving metadata is failed")
	}
	log.Println(md)
	authHeader, ok := md["authorization-token"]
	if !ok {
		return status.Errorf(codes.Unauthenticated, "Authorization token is required")
	}

	token := authHeader[0]
	if err := validateToken(token); err != nil {
		return err
	}

	return nil
}

func validateToken(token string) error {
	for _, v := range biz.TOKENS {
		if token == v {
			return nil
		}
	}
	return status.Errorf(codes.PermissionDenied, "Authorization is denied")
}
