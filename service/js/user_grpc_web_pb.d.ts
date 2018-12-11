import * as grpcWeb from 'grpc-web';
import {
  User,
  AnnotationsEntry,
  UserList,
  UserRequest} from './user_pb';

export class UsersClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: User,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  get(
    request: UserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  update(
    request: User,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  list(
    request: User,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: UserList) => void
  ): grpcWeb.ClientReadableStream<UserList>;

  delete(
    request: UserRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  login(
    request: User,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  sign(
    request: User,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

}

export class UsersPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: User,
    metadata: grpcWeb.Metadata
  ): Promise<User>;

  get(
    request: UserRequest,
    metadata: grpcWeb.Metadata
  ): Promise<User>;

  update(
    request: User,
    metadata: grpcWeb.Metadata
  ): Promise<User>;

  list(
    request: User,
    metadata: grpcWeb.Metadata
  ): Promise<UserList>;

  delete(
    request: UserRequest,
    metadata: grpcWeb.Metadata
  ): Promise<User>;

  login(
    request: User,
    metadata: grpcWeb.Metadata
  ): Promise<User>;

  sign(
    request: User,
    metadata: grpcWeb.Metadata
  ): Promise<User>;

}

