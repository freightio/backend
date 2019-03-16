import * as grpcWeb from 'grpc-web';

import * as user_pb from './user_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {Account} from './wallet_pb';

export class WalletsClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Account,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Account) => void
  ): grpcWeb.ClientReadableStream<Account>;

  list(
    request: user_pb.User,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Account>;

  total(
    request: Account,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Account) => void
  ): grpcWeb.ClientReadableStream<Account>;

}

export class WalletsPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Account,
    metadata?: grpcWeb.Metadata
  ): Promise<Account>;

  list(
    request: user_pb.User,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Account>;

  total(
    request: Account,
    metadata?: grpcWeb.Metadata
  ): Promise<Account>;

}

