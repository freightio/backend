import * as jspb from "google-protobuf"

import * as user_pb from './user_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Order extends jspb.Message {
  constructor ();
  getId(): string;
  setId(value: string): void;
  getType(): string;
  setType(value: string): void;
  getFrom(): Position | undefined;
  setFrom(value?: Position): void;
  clearFrom(): void;
  getTosList(): Position[] | undefined;
  setTosList(value?: Position[]): void;
  clearTosList(): void;
  getFee(): number;
  setFee(value: number): void;
  getSender(): Sender | undefined;
  setSender(value?: Sender): void;
  clearSender(): void;
  getAnnotationsMap(): jspb.Map<string, string> | undefined;
  clearAnnotationsMap(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  clearCreated(): void;
  getDriverid(): string;
  setDriverid(value: string): void;
  getStatus(): string;
  setStatus(value: string): void;
  getComment(): string;
  setComment(value: string): void;
  getPayinfo(): PayInfo | undefined;
  setPayinfo(value?: PayInfo): void;
  clearPayinfo(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: string;
    type: string;
    from?: Position.AsObject;
    tosList?: Position.AsObject[];
    fee: number;
    sender?: Sender.AsObject;
    annotationsMap?: Order.AnnotationsEntry.AsObject[];
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    driverid: string;
    status: string;
    comment: string;
    payinfo?: PayInfo.AsObject;
  }

  export class AnnotationsEntry extends jspb.Message {
    constructor ();
    getKey(): string;
    setKey(value: string): void;
    getValue(): string;
    setValue(value: string): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnotationsEntry.AsObject;
    static toObject(includeInstance: boolean, msg: AnnotationsEntry): AnnotationsEntry.AsObject;
    static serializeBinaryToWriter(message: AnnotationsEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnotationsEntry;
    static deserializeBinaryFromReader(message: AnnotationsEntry, reader: jspb.BinaryReader): AnnotationsEntry;
  }

  export namespace AnnotationsEntry {
    export type AsObject = {
      key: string;
      value: string;
    }
  }

}

export class Position extends jspb.Message {
  constructor ();
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
    name: string;
    location: string;
    address: string;
  }
}

export class Sender extends jspb.Message {
  constructor ();
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
    id: string;
    name: string;
    tel: string;
  }
}

export class OrderRequest extends jspb.Message {
  constructor ();
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
    id: string;
  }
}

export class OrderList extends jspb.Message {
  constructor ();
  getItemsList(): Order[] | undefined;
  setItemsList(value?: Order[]): void;
  clearItemsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderList.AsObject;
  static toObject(includeInstance: boolean, msg: OrderList): OrderList.AsObject;
  static serializeBinaryToWriter(message: OrderList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderList;
  static deserializeBinaryFromReader(message: OrderList, reader: jspb.BinaryReader): OrderList;
}

export namespace OrderList {
  export type AsObject = {
    itemsList?: Order.AsObject[];
  }
}

export class SignReply extends jspb.Message {
  constructor ();
  getSigned(): string;
  setSigned(value: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignReply.AsObject;
  static toObject(includeInstance: boolean, msg: SignReply): SignReply.AsObject;
  static serializeBinaryToWriter(message: SignReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignReply;
  static deserializeBinaryFromReader(message: SignReply, reader: jspb.BinaryReader): SignReply;
}

export namespace SignReply {
  export type AsObject = {
    signed: string;
  }
}

export class PayInfo extends jspb.Message {
  constructor ();
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
    type: string;
    payresult: string;
  }
}

