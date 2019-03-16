import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {Vehicle} from './vehicle_pb';

export class VehiclesClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Vehicle>;

}

export class VehiclesPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Vehicle>;

}

