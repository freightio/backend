/**
 * @fileoverview gRPC-Web generated client stub for backend
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var user_pb = require('./user_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.backend = require('./order_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.OrdersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.OrdersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Order,
 *   !proto.backend.Order>}
 */
const methodInfo_Orders_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Order,
  /** @param {!proto.backend.Order} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Order.deserializeBinary
);


/**
 * @param {!proto.backend.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Orders/Add',
      request,
      metadata || {},
      methodInfo_Orders_Add,
      callback);
};


/**
 * @param {!proto.backend.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Order>}
 *     A native promise that resolves to the response
 */
proto.backend.OrdersPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Orders/Add',
      request,
      metadata || {},
      methodInfo_Orders_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.OrderRequest,
 *   !proto.backend.Order>}
 */
const methodInfo_Orders_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Order,
  /** @param {!proto.backend.OrderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Order.deserializeBinary
);


/**
 * @param {!proto.backend.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Orders/Get',
      request,
      metadata || {},
      methodInfo_Orders_Get,
      callback);
};


/**
 * @param {!proto.backend.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Order>}
 *     A native promise that resolves to the response
 */
proto.backend.OrdersPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Orders/Get',
      request,
      metadata || {},
      methodInfo_Orders_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Order,
 *   !proto.backend.Order>}
 */
const methodInfo_Orders_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Order,
  /** @param {!proto.backend.Order} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Order.deserializeBinary
);


/**
 * @param {!proto.backend.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Orders/Update',
      request,
      metadata || {},
      methodInfo_Orders_Update,
      callback);
};


/**
 * @param {!proto.backend.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Order>}
 *     A native promise that resolves to the response
 */
proto.backend.OrdersPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Orders/Update',
      request,
      metadata || {},
      methodInfo_Orders_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.OrderRequest,
 *   !proto.backend.Order>}
 */
const methodInfo_Orders_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Order,
  /** @param {!proto.backend.OrderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Order.deserializeBinary
);


/**
 * @param {!proto.backend.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Orders/Delete',
      request,
      metadata || {},
      methodInfo_Orders_Delete,
      callback);
};


/**
 * @param {!proto.backend.OrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Order>}
 *     A native promise that resolves to the response
 */
proto.backend.OrdersPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Orders/Delete',
      request,
      metadata || {},
      methodInfo_Orders_Delete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Position,
 *   !proto.backend.Order>}
 */
const methodInfo_Orders_ListByPositon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Order,
  /** @param {!proto.backend.Position} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Order.deserializeBinary
);


/**
 * @param {!proto.backend.Position} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Order>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersClient.prototype.listByPositon =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/backend.Orders/ListByPositon',
      request,
      metadata || {},
      methodInfo_Orders_ListByPositon);
};


/**
 * @param {!proto.backend.Position} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Order>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersPromiseClient.prototype.listByPositon =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/backend.Orders/ListByPositon',
      request,
      metadata || {},
      methodInfo_Orders_ListByPositon);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.Order>}
 */
const methodInfo_Orders_ListByUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Order,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Order.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Order>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersClient.prototype.listByUser =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/backend.Orders/ListByUser',
      request,
      metadata || {},
      methodInfo_Orders_ListByUser);
};


/**
 * @param {!proto.backend.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Order>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersPromiseClient.prototype.listByUser =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/backend.Orders/ListByUser',
      request,
      metadata || {},
      methodInfo_Orders_ListByUser);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Order,
 *   !proto.google.protobuf.StringValue>}
 */
const methodInfo_Orders_SignAlipay = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.StringValue,
  /** @param {!proto.backend.Order} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.StringValue.deserializeBinary
);


/**
 * @param {!proto.backend.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.StringValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.StringValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersClient.prototype.signAlipay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Orders/SignAlipay',
      request,
      metadata || {},
      methodInfo_Orders_SignAlipay,
      callback);
};


/**
 * @param {!proto.backend.Order} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.StringValue>}
 *     A native promise that resolves to the response
 */
proto.backend.OrdersPromiseClient.prototype.signAlipay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Orders/SignAlipay',
      request,
      metadata || {},
      methodInfo_Orders_SignAlipay);
};


module.exports = proto.backend;

