import * as user_pb from './user_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Account {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getUserid(): string;
  setUserid(a: string): void;
  getFee(): number;
  setFee(a: number): void;
  getOrderid(): string;
  setOrderid(a: string): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp;
  setCreated(a: google_protobuf_timestamp_pb.Timestamp): void;
  getAnnotationsList(): Account.AnnotationsEntry[];
  setAnnotationsList(a: Account.AnnotationsEntry[]): void;
  toObject(): Account.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Account;
}

export namespace Account {
  export type AsObject = {
    id: string;
    userid: string;
    fee: number;
    orderid: string;
    created: google_protobuf_timestamp_pb.Timestamp;
    annotationsList: Account.AnnotationsEntry[];
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

export class AccountList {
  constructor ();
  getItemsList(): Account[];
  setItemsList(a: Account[]): void;
  toObject(): AccountList.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AccountList;
}

export namespace AccountList {
  export type AsObject = {
    itemsList: Account[];
  }
}

