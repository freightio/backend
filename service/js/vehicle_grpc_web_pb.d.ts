import * as grpcWeb from 'grpc-web';
import {
  Price,
  Start,
  Vehicle,
  VehicleList,
  Empty} from './vehicle_pb';

export class VehiclesClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  list(
    request: Empty,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: VehicleList) => void
  ): grpcWeb.ClientReadableStream<VehicleList>;

}

export class VehiclesPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  list(
    request: Empty,
    metadata: grpcWeb.Metadata
  ): Promise<VehicleList>;

}

