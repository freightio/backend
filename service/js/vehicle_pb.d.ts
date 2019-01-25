import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class Vehicle {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getName(): string;
  setName(a: string): void;
  getImage(): string;
  setImage(a: string): void;
  getWeight(): string;
  setWeight(a: string): void;
  getLwh(): string;
  setLwh(a: string): void;
  getCube(): string;
  setCube(a: string): void;
  getPrice(): Price;
  setPrice(a: Price): void;
  toObject(): Vehicle.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Vehicle;
}

export namespace Vehicle {
  export type AsObject = {
    id: string;
    name: string;
    image: string;
    weight: string;
    lwh: string;
    cube: string;
    price: Price;
  }
}

export class Price {
  constructor ();
  getStart(): Start;
  setStart(a: Start): void;
  getThen(): number;
  setThen(a: number): void;
  toObject(): Price.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Price;
}

export namespace Price {
  export type AsObject = {
    start: Start;
    then: number;
  }
}

export class Start {
  constructor ();
  getDistance(): number;
  setDistance(a: number): void;
  getFee(): number;
  setFee(a: number): void;
  toObject(): Start.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Start;
}

export namespace Start {
  export type AsObject = {
    distance: number;
    fee: number;
  }
}

export class VehicleList {
  constructor ();
  getItemsList(): Vehicle[];
  setItemsList(a: Vehicle[]): void;
  toObject(): VehicleList.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => VehicleList;
}

export namespace VehicleList {
  export type AsObject = {
    itemsList: Vehicle[];
  }
}

