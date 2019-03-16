import * as grpcWeb from 'grpc-web';

import * as user_pb from './user_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  Order,
  OrderRequest,
  Position} from './order_pb';

export class OrdersClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Order,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Order) => void
  ): grpcWeb.ClientReadableStream<Order>;

  get(
    request: OrderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Order) => void
  ): grpcWeb.ClientReadableStream<Order>;

  update(
    request: Order,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Order) => void
  ): grpcWeb.ClientReadableStream<Order>;

  delete(
    request: OrderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Order) => void
  ): grpcWeb.ClientReadableStream<Order>;

  listByPositon(
    request: Position,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Order>;

  listByUser(
    request: user_pb.User,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Order>;

  signAlipay(
    request: Order,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_wrappers_pb.StringValue) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.StringValue>;

}

export class OrdersPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Order,
    metadata?: grpcWeb.Metadata
  ): Promise<Order>;

  get(
    request: OrderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Order>;

  update(
    request: Order,
    metadata?: grpcWeb.Metadata
  ): Promise<Order>;

  delete(
    request: OrderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<Order>;

  listByPositon(
    request: Position,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Order>;

  listByUser(
    request: user_pb.User,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Order>;

  signAlipay(
    request: Order,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_wrappers_pb.StringValue>;

}

