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
  getAnnotationsList(): User.AnnotationsEntry[];
  setAnnotationsList(a: User.AnnotationsEntry[]): void;
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
    AnnotationsList: User.AnnotationsEntry[];
  }
  export type AnnotationsEntry = UserAnnotationsEntry;
}

export class UserAnnotationsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): UserAnnotationsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UserAnnotationsEntry;
}

export namespace UserAnnotationsEntry {
  export type AsObject = {
    Key: string;
    Value: string;
  }
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

