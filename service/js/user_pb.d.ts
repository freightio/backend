import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class User extends jspb.Message {
  constructor ();
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
  clearCreated(): void;
  getSign(): string;
  setSign(value: string): void;
  getLabelsMap(): jspb.Map<string, string> | undefined;
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
    id: string;
    name: string;
    password: string;
    tel: string;
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    sign: string;
    labelsMap?: User.LabelsEntry.AsObject[];
  }

  export class LabelsEntry extends jspb.Message {
    constructor ();
    getKey(): string;
    setKey(value: string): void;
    getValue(): string;
    setValue(value: string): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LabelsEntry.AsObject;
    static toObject(includeInstance: boolean, msg: LabelsEntry): LabelsEntry.AsObject;
    static serializeBinaryToWriter(message: LabelsEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LabelsEntry;
    static deserializeBinaryFromReader(message: LabelsEntry, reader: jspb.BinaryReader): LabelsEntry;
  }

  export namespace LabelsEntry {
    export type AsObject = {
      key: string;
      value: string;
    }
  }

}

export class IDRequest extends jspb.Message {
  constructor ();
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
    id: string;
  }
}

export class UserList extends jspb.Message {
  constructor ();
  getItemsList(): User[] | undefined;
  setItemsList(value?: User[]): void;
  clearItemsList(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserList.AsObject;
  static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
  static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserList;
  static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
  export type AsObject = {
    itemsList?: User.AsObject[];
  }
}

export class Certification extends jspb.Message {
  constructor ();
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
    id: string;
    userid: string;
    name: string;
    imagedata: string;
    status: string;
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  }
}

