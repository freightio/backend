import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getTel(): string;
  setTel(value: string): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  getSign(): string;
  setSign(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    password: string,
    tel: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sign: string,
    labelsMap: Array<[string, string]>,
  }
}

export class IDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IDRequest): IDRequest.AsObject;
  static serializeBinaryToWriter(message: IDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDRequest;
  static deserializeBinaryFromReader(message: IDRequest, reader: jspb.BinaryReader): IDRequest;
}

export namespace IDRequest {
  export type AsObject = {
    id: string,
  }
}

export class Certification extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getImagedata(): string;
  setImagedata(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Certification.AsObject;
  static toObject(includeInstance: boolean, msg: Certification): Certification.AsObject;
  static serializeBinaryToWriter(message: Certification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Certification;
  static deserializeBinaryFromReader(message: Certification, reader: jspb.BinaryReader): Certification;
}

export namespace Certification {
  export type AsObject = {
    id: string,
    userid: string,
    name: string,
    imagedata: string,
    status: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

