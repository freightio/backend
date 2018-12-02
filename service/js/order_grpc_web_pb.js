/**
 * @fileoverview gRPC-Web generated client stub for backend
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

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
   * @private @const {!proto.backend.OrdersClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.backend.OrdersClient(
      hostname, credentials, options);

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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_Orders_Add,
      callback);
};


/**
 * @param {!proto.backend.Order} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Order>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersPromiseClient.prototype.add =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.add(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_Orders_Get,
      callback);
};


/**
 * @param {!proto.backend.OrderRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Order>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersPromiseClient.prototype.get =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.get(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_Orders_Update,
      callback);
};


/**
 * @param {!proto.backend.Order} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Order>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersPromiseClient.prototype.update =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.update(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Position,
 *   !proto.backend.OrderList>}
 */
const methodInfo_Orders_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.OrderList,
  /** @param {!proto.backend.Position} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.OrderList.deserializeBinary
);


/**
 * @param {!proto.backend.Position} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.OrderList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.OrderList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Orders/List',
      request,
      metadata,
      methodInfo_Orders_List,
      callback);
};


/**
 * @param {!proto.backend.Position} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.OrderList>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersPromiseClient.prototype.list =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.list(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
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
 * @param {!Object<string, string>} metadata User defined
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
      metadata,
      methodInfo_Orders_Delete,
      callback);
};


/**
 * @param {!proto.backend.OrderRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Order>}
 *     The XHR Node Readable Stream
 */
proto.backend.OrdersPromiseClient.prototype.delete =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.delete(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.backend;

