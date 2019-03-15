import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class Vehicle extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getWeight(): string;
  setWeight(value: string): void;

  getLwh(): string;
  setLwh(value: string): void;

  getCube(): string;
  setCube(value: string): void;

  getPrice(): Price | undefined;
  setPrice(value?: Price): void;
  hasPrice(): boolean;
  clearPrice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vehicle.AsObject;
  static toObject(includeInstance: boolean, msg: Vehicle): Vehicle.AsObject;
  static serializeBinaryToWriter(message: Vehicle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vehicle;
  static deserializeBinaryFromReader(message: Vehicle, reader: jspb.BinaryReader): Vehicle;
}

export namespace Vehicle {
  export type AsObject = {
    id: string,
    name: string,
    image: string,
    weight: string,
    lwh: string,
    cube: string,
    price?: Price.AsObject,
  }
}

export class Price extends jspb.Message {
  getStart(): Start | undefined;
  setStart(value?: Start): void;
  hasStart(): boolean;
  clearStart(): void;

  getThen(): number;
  setThen(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    start?: Start.AsObject,
    then: number,
  }
}

export class Start extends jspb.Message {
  getDistance(): number;
  setDistance(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Start.AsObject;
  static toObject(includeInstance: boolean, msg: Start): Start.AsObject;
  static serializeBinaryToWriter(message: Start, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Start;
  static deserializeBinaryFromReader(message: Start, reader: jspb.BinaryReader): Start;
}

export namespace Start {
  export type AsObject = {
    distance: number,
    fee: number,
  }
}

