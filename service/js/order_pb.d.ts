export class Contact {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getTel(): string;
  setTel(a: string): void;
  toObject(): Contact.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Contact;
}

export namespace Contact {
  export type AsObject = {
    Name: string;
    Tel: string;
  }
}

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
  getContact(): Contact;
  setContact(a: Contact): void;
  getAnnotationsList(): Order.AnnotationsEntry[];
  setAnnotationsList(a: Order.AnnotationsEntry[]): void;
  getCreated(): number;
  setCreated(a: number): void;
  getDriverid(): string;
  setDriverid(a: string): void;
  getStatus(): string;
  setStatus(a: string): void;
  toObject(): Order.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Order;
}

export namespace Order {
  export type AsObject = {
    Id: string;
    Type: string;
    From: Position;
    TosList: Position[];
    Fee: number;
    Contact: Contact;
    AnnotationsList: Order.AnnotationsEntry[];
    Created: number;
    Driverid: string;
    Status: string;
  }
  export type AnnotationsEntry = OrderAnnotationsEntry;
}

export class OrderAnnotationsEntry {
  constructor ();
  getKey(): string;
  setKey(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  toObject(): OrderAnnotationsEntry.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OrderAnnotationsEntry;
}

export namespace OrderAnnotationsEntry {
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
    ItemsList: Order[];
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
    Id: string;
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
    Name: string;
    Location: string;
    Address: string;
  }
}

