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
  getCreated(): number;
  setCreated(a: number): void;
  toObject(): Certification.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Certification;
}

export namespace Certification {
  export type AsObject = {
    Id: string;
    Userid: string;
    Name: string;
    Imagedata: string;
    Status: string;
    Created: number;
  }
}

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
  getCreated(): number;
  setCreated(a: number): void;
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
    Id: string;
    Name: string;
    Password: string;
    Tel: string;
    Created: number;
    Sign: string;
    LabelsList: User.LabelsEntry[];
  }
  export type LabelsEntry = UserLabelsEntry;
}

export class UserLabelsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): UserLabelsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UserLabelsEntry;
}

export namespace UserLabelsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
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
    Key: string;
    Value: string;
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
    ItemsList: User[];
  }
}

export class UserRequest {
  constructor ();
  getId(): string;
  setId(a: string): void;
  toObject(): UserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    Id: string;
  }
}

export class Verified {
  constructor ();
  getResult(): boolean;
  setResult(a: boolean): void;
  toObject(): Verified.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Verified;
}

export namespace Verified {
  export type AsObject = {
    Result: boolean;
  }
}

