import * as grpcWeb from 'grpc-web';

import * as user_pb from './user_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  Account,
  AccountList} from './wallet_pb';

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
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: AccountList) => void
  ): grpcWeb.ClientReadableStream<AccountList>;

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
  ): Promise<AccountList>;

  total(
    request: Account,
    metadata?: grpcWeb.Metadata
  ): Promise<Account>;

}

