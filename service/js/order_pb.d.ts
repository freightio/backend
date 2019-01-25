import * as user_pb from './user_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Order {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getType(): string;
  setType(a: string): void;
  getFrom(): Position;
  setFrom(a: Position): void;
  getTosList(): Position[];
  setTosList(a: Position[]): void;
  getFee(): number;
  setFee(a: number): void;
  getSender(): Sender;
  setSender(a: Sender): void;
  getAnnotationsList(): Order.AnnotationsEntry[];
  setAnnotationsList(a: Order.AnnotationsEntry[]): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp;
  setCreated(a: google_protobuf_timestamp_pb.Timestamp): void;
  getDriverid(): string;
  setDriverid(a: string): void;
  getStatus(): string;
  setStatus(a: string): void;
  getComment(): string;
  setComment(a: string): void;
  getPayinfo(): PayInfo;
  setPayinfo(a: PayInfo): void;
  toObject(): Order.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Order;
}

export namespace Order {
  export type AsObject = {
    id: string;
    type: string;
    from: Position;
    tosList: Position[];
    fee: number;
    sender: Sender;
    annotationsList: Order.AnnotationsEntry[];
    created: google_protobuf_timestamp_pb.Timestamp;
    driverid: string;
    status: string;
    comment: string;
    payinfo: PayInfo;
  }

  export class AnnotationsEntry {
    constructor ();
    getKey(): string;
    setKey(a: string): void;
    getValue(): string;
    setValue(a: string): void;
    toObject(): AnnotationsEntry.AsObject;
    serializeBinary(): Uint8Array;
    static deserializeBinary: (bytes: {}) => AnnotationsEntry;
  }

  export namespace AnnotationsEntry {
    export type AsObject = {
      key: string;
      value: string;
    }
  }

}

export class Position {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getLocation(): string;
  setLocation(a: string): void;
  getAddress(): string;
  setAddress(a: string): void;
  toObject(): Position.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Position;
}

export namespace Position {
  export type AsObject = {
    name: string;
    location: string;
    address: string;
  }
}

export class Sender {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getName(): string;
  setName(a: string): void;
  getTel(): string;
  setTel(a: string): void;
  toObject(): Sender.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Sender;
}

export namespace Sender {
  export type AsObject = {
    id: string;
    name: string;
    tel: string;
  }
}

export class OrderRequest {
  constructor ();
  getId(): string;
  setId(a: string): void;
  toObject(): OrderRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OrderRequest;
}

export namespace OrderRequest {
  export type AsObject = {
    id: string;
  }
}

export class OrderList {
  constructor ();
  getItemsList(): Order[];
  setItemsList(a: Order[]): void;
  toObject(): OrderList.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OrderList;
}

export namespace OrderList {
  export type AsObject = {
    itemsList: Order[];
  }
}

export class SignReply {
  constructor ();
  getSigned(): string;
  setSigned(a: string): void;
  toObject(): SignReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SignReply;
}

export namespace SignReply {
  export type AsObject = {
    signed: string;
  }
}

export class PayInfo {
  constructor ();
  getType(): string;
  setType(a: string): void;
  getPayresult(): string;
  setPayresult(a: string): void;
  toObject(): PayInfo.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PayInfo;
}

export namespace PayInfo {
  export type AsObject = {
    type: string;
    payresult: string;
  }
}

