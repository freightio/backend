export class HelloReply {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): HelloReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HelloReply;
}

export namespace HelloReply {
  export type AsObject = {
    Message: string;
  }
}

export class HelloRequest {
  constructor ();
  getName(): string;
  setName(a: string): void;
  toObject(): HelloRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    Name: string;
  }
}

