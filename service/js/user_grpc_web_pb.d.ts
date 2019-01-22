import * as grpcWeb from 'grpc-web';
import {
  Certification,
  IDRequest,
  User,
  LabelsEntry,
  UserList,
  BoolValue} from './user_pb';

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
    request: IDRequest,
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
    request: IDRequest,
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

export class CertificationsClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Certification,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Certification) => void
  ): grpcWeb.ClientReadableStream<Certification>;

  update(
    request: Certification,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Certification) => void
  ): grpcWeb.ClientReadableStream<Certification>;

  list(
    request: Certification,
    metadata: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Certification>;

  verify(
    request: IDRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: BoolValue) => void
  ): grpcWeb.ClientReadableStream<BoolValue>;

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
    request: IDRequest,
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
    request: IDRequest,
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

export class CertificationsPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Certification,
    metadata: grpcWeb.Metadata
  ): Promise<Certification>;

  update(
    request: Certification,
    metadata: grpcWeb.Metadata
  ): Promise<Certification>;

  list(
    request: Certification,
    metadata: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Certification>;

  verify(
    request: IDRequest,
    metadata: grpcWeb.Metadata
  ): Promise<BoolValue>;

}

