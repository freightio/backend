export class Order {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getName(): string;
  setName(a: string): void;
  getTel(): string;
  setTel(a: string): void;
  getType(): string;
  setType(a: string): void;
  getFrom(): string;
  setFrom(a: string): void;
  getTosList(): string[];
  setTosList(a: string[]): void;
  getFee(): number;
  setFee(a: number): void;
  getAnnotationsList(): {}[];
  setAnnotationsList(a: {}[]): void;
  getCreated(): number;
  setCreated(a: number): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Order;
}

export class OrderList {
  constructor ();
  getOrdersList(): {}[];
  setOrdersList(a: {}[]): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OrderList;
}

export class OrderRequest {
  constructor ();
  getId(): string;
  setId(a: string): void;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => OrderRequest;
}

