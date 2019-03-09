/**
 * @fileoverview gRPC-Web generated client stub for backend
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.backend = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.UsersClient =
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
proto.backend.UsersPromiseClient =
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
 *   !proto.backend.User,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Add',
      request,
      metadata || {},
      methodInfo_Users_Add,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     A native promise that resolves to the response
 */
proto.backend.UsersPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Users/Add',
      request,
      metadata || {},
      methodInfo_Users_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.IDRequest,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.IDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.IDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Get',
      request,
      metadata || {},
      methodInfo_Users_Get,
      callback);
};


/**
 * @param {!proto.backend.IDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     A native promise that resolves to the response
 */
proto.backend.UsersPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Users/Get',
      request,
      metadata || {},
      methodInfo_Users_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Update',
      request,
      metadata || {},
      methodInfo_Users_Update,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     A native promise that resolves to the response
 */
proto.backend.UsersPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Users/Update',
      request,
      metadata || {},
      methodInfo_Users_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.UserList>}
 */
const methodInfo_Users_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.UserList,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.UserList.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/List',
      request,
      metadata || {},
      methodInfo_Users_List,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.UserList>}
 *     A native promise that resolves to the response
 */
proto.backend.UsersPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Users/List',
      request,
      metadata || {},
      methodInfo_Users_List);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.IDRequest,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.IDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.IDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Delete',
      request,
      metadata || {},
      methodInfo_Users_Delete,
      callback);
};


/**
 * @param {!proto.backend.IDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     A native promise that resolves to the response
 */
proto.backend.UsersPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Users/Delete',
      request,
      metadata || {},
      methodInfo_Users_Delete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Login',
      request,
      metadata || {},
      methodInfo_Users_Login,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     A native promise that resolves to the response
 */
proto.backend.UsersPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Users/Login',
      request,
      metadata || {},
      methodInfo_Users_Login);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Sign = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.sign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Sign',
      request,
      metadata || {},
      methodInfo_Users_Sign,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     A native promise that resolves to the response
 */
proto.backend.UsersPromiseClient.prototype.sign =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Users/Sign',
      request,
      metadata || {},
      methodInfo_Users_Sign);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.CertificationsClient =
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
proto.backend.CertificationsPromiseClient =
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
 *   !proto.backend.Certification,
 *   !proto.backend.Certification>}
 */
const methodInfo_Certifications_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Certification,
  /** @param {!proto.backend.Certification} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Certification.deserializeBinary
);


/**
 * @param {!proto.backend.Certification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.Certification)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Certification>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.CertificationsClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Certifications/Add',
      request,
      metadata || {},
      methodInfo_Certifications_Add,
      callback);
};


/**
 * @param {!proto.backend.Certification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Certification>}
 *     A native promise that resolves to the response
 */
proto.backend.CertificationsPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Certifications/Add',
      request,
      metadata || {},
      methodInfo_Certifications_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Certification,
 *   !proto.backend.Certification>}
 */
const methodInfo_Certifications_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Certification,
  /** @param {!proto.backend.Certification} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Certification.deserializeBinary
);


/**
 * @param {!proto.backend.Certification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.Certification)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Certification>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.CertificationsClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Certifications/Update',
      request,
      metadata || {},
      methodInfo_Certifications_Update,
      callback);
};


/**
 * @param {!proto.backend.Certification} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.Certification>}
 *     A native promise that resolves to the response
 */
proto.backend.CertificationsPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Certifications/Update',
      request,
      metadata || {},
      methodInfo_Certifications_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.Certification,
 *   !proto.backend.Certification>}
 */
const methodInfo_Certifications_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.Certification,
  /** @param {!proto.backend.Certification} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.Certification.deserializeBinary
);


/**
 * @param {!proto.backend.Certification} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Certification>}
 *     The XHR Node Readable Stream
 */
proto.backend.CertificationsClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/backend.Certifications/List',
      request,
      metadata || {},
      methodInfo_Certifications_List);
};


/**
 * @param {!proto.backend.Certification} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.backend.Certification>}
 *     The XHR Node Readable Stream
 */
proto.backend.CertificationsPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/backend.Certifications/List',
      request,
      metadata || {},
      methodInfo_Certifications_List);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.IDRequest,
 *   !proto.google.protobuf.BoolValue>}
 */
const methodInfo_Certifications_Verify = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BoolValue,
  /** @param {!proto.backend.IDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BoolValue.deserializeBinary
);


/**
 * @param {!proto.backend.IDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.BoolValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BoolValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.CertificationsClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Certifications/Verify',
      request,
      metadata || {},
      methodInfo_Certifications_Verify,
      callback);
};


/**
 * @param {!proto.backend.IDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.BoolValue>}
 *     A native promise that resolves to the response
 */
proto.backend.CertificationsPromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/backend.Certifications/Verify',
      request,
      metadata || {},
      methodInfo_Certifications_Verify);
};


module.exports = proto.backend;

