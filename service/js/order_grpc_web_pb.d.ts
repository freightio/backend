import * as grpcWeb from 'grpc-web';
import {
  Order,
  AnnotationsEntry,
  OrderList,
  OrderRequest,
  PayInfo,
  Position,
  Sender,
  SignReply,
  User} from './order_pb';

export class OrdersClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Order,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Order) => void
  ): grpcWeb.ClientReadableStream<Order>;

  get(
    request: OrderRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Order) => void
  ): grpcWeb.ClientReadableStream<Order>;

  update(
    request: Order,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Order) => void
  ): grpcWeb.ClientReadableStream<Order>;

  listByPositon(
    request: Position,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OrderList) => void
  ): grpcWeb.ClientReadableStream<OrderList>;

  listByUser(
    request: User,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: OrderList) => void
  ): grpcWeb.ClientReadableStream<OrderList>;

  delete(
    request: OrderRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Order) => void
  ): grpcWeb.ClientReadableStream<Order>;

  signAlipay(
    request: Order,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: SignReply) => void
  ): grpcWeb.ClientReadableStream<SignReply>;

}

export class OrdersPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Order,
    metadata: grpcWeb.Metadata
  ): Promise<Order>;

  get(
    request: OrderRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Order>;

  update(
    request: Order,
    metadata: grpcWeb.Metadata
  ): Promise<Order>;

  listByPositon(
    request: Position,
    metadata: grpcWeb.Metadata
  ): Promise<OrderList>;

  listByUser(
    request: User,
    metadata: grpcWeb.Metadata
  ): Promise<OrderList>;

  delete(
    request: OrderRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Order>;

  signAlipay(
    request: Order,
    metadata: grpcWeb.Metadata
  ): Promise<SignReply>;

}

