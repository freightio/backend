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
  getCreated(): number;
  setCreated(a: number): void;
  getAnnotationsList(): Account.AnnotationsEntry[];
  setAnnotationsList(a: Account.AnnotationsEntry[]): void;
  toObject(): Account.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Account;
}

export namespace Account {
  export type AsObject = {
    Id: string;
    Userid: string;
    Fee: number;
    Orderid: string;
    Created: number;
    AnnotationsList: Account.AnnotationsEntry[];
  }
  export type AnnotationsEntry = AccountAnnotationsEntry;
}

export class AccountAnnotationsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): AccountAnnotationsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AccountAnnotationsEntry;
}

export namespace AccountAnnotationsEntry {
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
    ItemsList: Account[];
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

