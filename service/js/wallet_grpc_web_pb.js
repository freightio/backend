/**
 * @fileoverview gRPC-Web generated client stub for backend
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var user_pb = require('./user_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.backend = require('./wallet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.WalletsClient =
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
proto.backend.WalletsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.backend.WalletsClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.backend.WalletsClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Account,
 *   !proto.backend.Account>}
 */
const methodInfo_Wallets_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Account,
  /** @param {!proto.backend.Account} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Account.deserializeBinary
);


/**
 * @param {!proto.backend.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.WalletsClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Wallets/Add',
      request,
      metadata || {},
      methodInfo_Wallets_Add,
      callback);
};


/**
 * @param {!proto.backend.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Account>}
 *     The XHR Node Readable Stream
 */
proto.backend.WalletsPromiseClient.prototype.add =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.add(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.AccountList>}
 */
const methodInfo_Wallets_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.AccountList,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.AccountList.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.AccountList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.AccountList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.WalletsClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Wallets/List',
      request,
      metadata || {},
      methodInfo_Wallets_List,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.AccountList>}
 *     The XHR Node Readable Stream
 */
proto.backend.WalletsPromiseClient.prototype.list =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.list(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Account,
 *   !proto.backend.Account>}
 */
const methodInfo_Wallets_Total = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Account,
  /** @param {!proto.backend.Account} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Account.deserializeBinary
);


/**
 * @param {!proto.backend.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.WalletsClient.prototype.total =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Wallets/Total',
      request,
      metadata || {},
      methodInfo_Wallets_Total,
      callback);
};


/**
 * @param {!proto.backend.Account} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Account>}
 *     The XHR Node Readable Stream
 */
proto.backend.WalletsPromiseClient.prototype.total =
    function(request, metadata) {
  var _this = this;
  return new Promise(function (resolve, reject) {
    _this.delegateClient_.total(
      request, metadata, function (error, response) {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.backend;

