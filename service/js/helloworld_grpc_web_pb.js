/**
 * @fileoverview gRPC-Web generated client stub for backend
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.backend = require('./helloworld_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.GreeterClient =
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
proto.backend.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.backend.GreeterClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.backend.GreeterClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.HelloRequest,
 *   !proto.backend.HelloReply>}
 */
const methodInfo_Greeter_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.HelloReply,
  /** @param {!proto.backend.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.HelloReply.deserializeBinary
);


/**
 * @param {!proto.backend.HelloRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Greeter/SayHello',
      request,
      metadata,
      methodInfo_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.backend.HelloRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.backend.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sayHello(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.HelloRequest,
 *   !proto.backend.HelloReply>}
 */
const methodInfo_Greeter_SayBye = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.HelloReply,
  /** @param {!proto.backend.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.HelloReply.deserializeBinary
);


/**
 * @param {!proto.backend.HelloRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.GreeterClient.prototype.sayBye =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Greeter/SayBye',
      request,
      metadata,
      methodInfo_Greeter_SayBye,
      callback);
};


/**
 * @param {!proto.backend.HelloRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.backend.GreeterPromiseClient.prototype.sayBye =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sayBye(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.backend;

