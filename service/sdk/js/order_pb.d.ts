import * as jspb from "google-protobuf"

import * as user_pb from './user_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Order extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getFrom(): Position | undefined;
  setFrom(value?: Position): void;
  hasFrom(): boolean;
  clearFrom(): void;

  getTosList(): Array<Position>;
  setTosList(value: Array<Position>): void;
  clearTosList(): void;
  addTos(value?: Position, index?: number): Position;

  getFee(): number;
  setFee(value: number): void;

  getSender(): Sender | undefined;
  setSender(value?: Sender): void;
  hasSender(): boolean;
  clearSender(): void;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStart(): boolean;
  clearStart(): void;

  getDriverid(): string;
  setDriverid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getPayinfo(): PayInfo | undefined;
  setPayinfo(value?: PayInfo): void;
  hasPayinfo(): boolean;
  clearPayinfo(): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: string,
    type: string,
    from?: Position.AsObject,
    tosList: Array<Position.AsObject>,
    fee: number,
    sender?: Sender.AsObject,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    driverid: string,
    status: string,
    comment: string,
    payinfo?: PayInfo.AsObject,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    annotationsMap: Array<[string, string]>,
  }
}

export class Position extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    name: string,
    location: string,
    address: string,
  }
}

export class Sender extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTel(): string;
  setTel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sender.AsObject;
  static toObject(includeInstance: boolean, msg: Sender): Sender.AsObject;
  static serializeBinaryToWriter(message: Sender, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sender;
  static deserializeBinaryFromReader(message: Sender, reader: jspb.BinaryReader): Sender;
}

export namespace Sender {
  export type AsObject = {
    id: string,
    name: string,
    tel: string,
  }
}

export class OrderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderRequest): OrderRequest.AsObject;
  static serializeBinaryToWriter(message: OrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderRequest;
  static deserializeBinaryFromReader(message: OrderRequest, reader: jspb.BinaryReader): OrderRequest;
}

export namespace OrderRequest {
  export type AsObject = {
    id: string,
  }
}

export class PayInfo extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getPayresult(): string;
  setPayresult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PayInfo): PayInfo.AsObject;
  static serializeBinaryToWriter(message: PayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayInfo;
  static deserializeBinaryFromReader(message: PayInfo, reader: jspb.BinaryReader): PayInfo;
}

export namespace PayInfo {
  export type AsObject = {
    type: string,
    payresult: string,
  }
}

