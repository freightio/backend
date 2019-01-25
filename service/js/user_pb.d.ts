import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class User {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getName(): string;
  setName(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  getTel(): string;
  setTel(a: string): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp;
  setCreated(a: google_protobuf_timestamp_pb.Timestamp): void;
  getSign(): string;
  setSign(a: string): void;
  getLabelsList(): User.LabelsEntry[];
  setLabelsList(a: User.LabelsEntry[]): void;
  toObject(): User.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => User;
}

export namespace User {
  export type AsObject = {
    id: string;
    name: string;
    password: string;
    tel: string;
    created: google_protobuf_timestamp_pb.Timestamp;
    sign: string;
    labelsList: User.LabelsEntry[];
  }

  export class LabelsEntry {
    constructor ();
    getKey(): string;
    setKey(a: string): void;
    getValue(): string;
    setValue(a: string): void;
    toObject(): LabelsEntry.AsObject;
    serializeBinary(): Uint8Array;
    static deserializeBinary: (bytes: {}) => LabelsEntry;
  }

  export namespace LabelsEntry {
    export type AsObject = {
      key: string;
      value: string;
    }
  }

}

export class IDRequest {
  constructor ();
  getId(): string;
  setId(a: string): void;
  toObject(): IDRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => IDRequest;
}

export namespace IDRequest {
  export type AsObject = {
    id: string;
  }
}

export class UserList {
  constructor ();
  getItemsList(): User[];
  setItemsList(a: User[]): void;
  toObject(): UserList.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UserList;
}

export namespace UserList {
  export type AsObject = {
    itemsList: User[];
  }
}

export class Certification {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getUserid(): string;
  setUserid(a: string): void;
  getName(): string;
  setName(a: string): void;
  getImagedata(): string;
  setImagedata(a: string): void;
  getStatus(): string;
  setStatus(a: string): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp;
  setCreated(a: google_protobuf_timestamp_pb.Timestamp): void;
  toObject(): Certification.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Certification;
}

export namespace Certification {
  export type AsObject = {
    id: string;
    userid: string;
    name: string;
    imagedata: string;
    status: string;
    created: google_protobuf_timestamp_pb.Timestamp;
  }
}

