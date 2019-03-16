import * as jspb from "google-protobuf"

import * as user_pb from './user_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Account extends jspb.Message {
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
  hasCreated(): boolean;
  clearCreated(): void;

  getAnnotationsMap(): jspb.Map<string, string>;
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
    id: string,
    userid: string,
    fee: number,
    orderid: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    annotationsMap: Array<[string, string]>,
  }
}

