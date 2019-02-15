import * as jspb from "google-protobuf"

import * as user_pb from './user_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Account extends jspb.Message {
  constructor ();
  getId(): string;
  setId(value: string): void;
  getUserid(): string;
  setUserid(value: string): void;
  getFee(): number;
  setFee(value: number): void;
  getOrderid(): string;
  setOrderid(value: string): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  clearCreated(): void;
  getAnnotationsMap(): jspb.Map<string, string> | undefined;
  clearAnnotationsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string;
    userid: string;
    fee: number;
    orderid: string;
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    annotationsMap?: Account.AnnotationsEntry.AsObject[];
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

export class AccountList extends jspb.Message {
  constructor ();
  getItemsList(): Account[] | undefined;
  setItemsList(value?: Account[]): void;
  clearItemsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountList.AsObject;
  static toObject(includeInstance: boolean, msg: AccountList): AccountList.AsObject;
  static serializeBinaryToWriter(message: AccountList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountList;
  static deserializeBinaryFromReader(message: AccountList, reader: jspb.BinaryReader): AccountList;
}

export namespace AccountList {
  export type AsObject = {
    itemsList?: Account.AsObject[];
  }
}

