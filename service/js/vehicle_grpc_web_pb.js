/**
 * @fileoverview gRPC-Web generated client stub for backend
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.backend = require('./vehicle_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.VehiclesClient =
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
proto.backend.VehiclesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.backend.VehiclesClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.backend.VehiclesClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.backend.VehicleList>}
 */
const methodInfo_Vehicles_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.VehicleList,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.VehicleList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.VehicleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.VehicleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.VehiclesClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Vehicles/List',
      request,
      metadata,
      methodInfo_Vehicles_List,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.VehicleList>}
 *     The XHR Node Readable Stream
 */
proto.backend.VehiclesPromiseClient.prototype.list =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.list(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.backend;

