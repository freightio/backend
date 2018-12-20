import * as grpcWeb from 'grpc-web';
import {
  Account,
  AnnotationsEntry,
  AccountList,
  User,
  LabelsEntry} from './wallet_pb';

export class WalletsClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Account,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Account) => void
  ): grpcWeb.ClientReadableStream<Account>;

  list(
    request: User,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AccountList) => void
  ): grpcWeb.ClientReadableStream<AccountList>;

  total(
    request: Account,
    metadata: grpcWeb.Metadata,
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
    metadata: grpcWeb.Metadata
  ): Promise<Account>;

  list(
    request: User,
    metadata: grpcWeb.Metadata
  ): Promise<AccountList>;

  total(
    request: Account,
    metadata: grpcWeb.Metadata
  ): Promise<Account>;

}

