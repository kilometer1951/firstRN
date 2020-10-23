/**
 * Accepted indicates that the request has been accepted for further processing.
 */
export const HTTP_STATUS_ACCEPTED = 202;
/**
 * Ambiguous indicates that the requested information has multiple representations. The default action is to treat this status as a redirect and follow the contents of the Location header associated with this response.
 */
export const HTTP_STATUS_AMBIGUOUS = 300;
/**
 * BadGateway indicates that an intermediate proxy server received a bad response from another proxy or the origin server.
 */
export const HTTP_STATUS_BAD_GATEWAY = 502;
/**
 * BadRequest indicates that the request could not be understood by the server. BadRequest is sent when no other error is applicable, or if the exact error is unknown or does not have its own error code.
 */
export const HTTP_STATUS_BAD_REQUEST = 400;
/**
 * Conflict indicates that the request could not be carried out because of a conflict on the server.
 */
export const HTTP_STATUS_CONFLICT = 409;
/**
 * Continue indicates that the client can continue with its request.
 */
export const HTTP_STATUS_CONTINUE = 100;
/**
 * Created indicates that the request resulted in a new resource created before the response was sent.
 */
export const HTTP_STATUS_CREATED = 201;
/**
 * ExpectationFailed indicates that an expectation given in an Expect header could not be met by the server.
 */
export const HTTP_STATUS_EXPECTATION_FAILED = 417;
/**
 * Forbidden indicates that the server refuses to fulfill the request.
 */
export const HTTP_STATUS_FORBIDDEN = 403;
/**
 * Found indicates that the requested information is located at the URI specified in the Location header. The default action when this status is received is to follow the Location header associated with the response. When the original request method was POST, the redirected request will use the GET method.
 */
export const HTTP_STATUS_FOUND = 302;
/**
 * GatewayTimeout indicates that an intermediate proxy server timed out while waiting for a response from another proxy or the origin server.
 */
export const HTTP_STATUS_GATEWAY_TIMEOUT = 504;
/**
 * Gone indicates that the requested resource is no longer available.
 */
export const HTTP_STATUS_GONE = 410;
/**
 * HttpVersionNotSupported indicates that the requested HTTP version is not supported by the server.
 */
export const HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED = 505;
/**
 * InternalServerError indicates that a generic error has occurred on the server.
 */
export const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
/**
 * LengthRequired indicates that the required Content-length header is missing.
 */
export const HTTP_STATUS_LENGTH_REQUIRED = 411;
/**
 * MethodNotAllowed indicates that the request method (POST or GET) is not allowed on the requested resource.
 */
export const HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
/**
 * Moved indicates that the requested information has been moved to the URI specified in the Location header. The default action when this status is received is to follow the Location header associated with the response. When the original request method was POST, the redirected request will use the GET method.
 */
export const HTTP_STATUS_MOVED = 301;
/**
 * MovedPermanently indicates that the requested information has been moved to the URI specified in the Location header. The default action when this status is received is to follow the Location header associated with the response.
 */
export const HTTP_STATUS_MOVED_PERMANENTLY = 301;
/**
 * MultipleChoices indicates that the requested information has multiple representations. The default action is to treat this status as a redirect and follow the contents of the Location header associated with this response.
 */
export const HTTP_STATUS_MULTIPLE_CHOICES = 300;
/**
 * NoContent indicates that the request has been successfully processed and that the response is intentionally blank.
 */
export const HTTP_STATUS_NO_CONTENT = 204;
/**
 * NonAuthoritativeInformation indicates that the returned meta information is from a cached copy instead of the origin server and therefore may be incorrect.
 */
export const HTTP_STATUS_NONAUTHORITATIVE_INFORMATION = 203;
/**
 * NotAcceptable indicates that the client has indicated with Accept headers that it will not accept any of the available representations of the resource.
 */
export const HTTP_STATUS_NOT_ACCEPTABLE = 406;
/**
 * NotFound indicates that the requested resource does not exist on the server.
 */
export const HTTP_STATUS_NOTFOUND = 404;
/**
 * NotImplemented indicates that the server does not support the requested function.
 */
export const HTTP_STATUS_NOT_IMPLEMENTED = 501;
/**
 * NotModified indicates that the client's cached copy is up to date. The contents of the resource are not transferred.
 */
export const HTTP_STATUS_NOT_MODIFIED = 304;
/**
 * OK indicates that the request succeeded and that the requested information is in the response. This is the most common status code to receive.
 */
//eslint-disable-next-line id-length
export const HTTP_STATUS_OK = 200;
/**
 * PartialContent indicates that the response is a partial response as requested by a GET request that includes a byte range.
 */
export const HTTP_STATUS_PARTIAL_CONTENT = 206;
/**
 * PaymentRequired is reserved for future use.
 */
export const HTTP_STATUS_PAYMENT_REQUIRED = 402;
/**
 * PreconditionFailed indicates that a condition set for this request failed, and the request cannot be carried out. Conditions are set with conditional request headers like If-Match, If-None-Match, or If-Unmodified-Since.
 */
export const HTTP_STATUS_PRECONDITION_FAILED = 412;
/**
 * ProxyAuthenticationRequired indicates that the requested proxy requires authentication. The Proxy-authenticate header contains the details of how to perform the authentication.
 */
export const HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED = 407;
/**
 * Redirect indicates that the requested information is located at the URI specified in the Location header. The default action when this status is received is to follow the Location header associated with the response. When the original request method was POST, the redirected request will use the GET method.
 */
export const HTTP_STATUS_REDIRECT = 302;
/**
 * RedirectKeepVerb indicates that the request information is located at the URI specified in the Location header. The default action when this status is received is to follow the Location header associated with the response. When the original request method was POST, the redirected request will also use the POST method.
 */
export const HTTP_STATUS_REDIRECT_KEEP_VERB = 307;
/**
 * RedirectMethod automatically redirects the client to the URI specified in the Location header as the result of a POST. The request to the resource specified by the Location header will be made with a GET.
 */
export const HTTP_STATUS_REDIRECT_METHOD = 303;
/**
 * RequestedRangeNotSatisfiable indicates that the range of data requested from the resource cannot be returned, either because the beginning of the range is before the beginning of the resource, or the end of the range is after the end of the resource.
 */
export const HTTP_STATUS_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
/**
 * RequestEntityTooLarge indicates that the request is too large for the server to process.
 */
export const HTTP_STATUS_REQUEST_ENTITY_TOO_LARGE = 413;
/**
 * RequestTimeout indicates that the client did not send a request within the time the server was expecting the request.
 */
export const HTTP_STATUS_REQUEST_TIMEOUT = 408;
/**
 * RequestUriTooLong indicates that the URI is too long.
 */
export const HTTP_STATUS_REQUEST_URI_TOO_LONG = 414;
/**
 * ResetContent indicates that the client should reset (not reload) the current resource.
 */
export const HTTP_STATUS_RESET_CONTENT = 205;
/**
 * SeeOther automatically redirects the client to the URI specified in the Location header as the result of a POST. The request to the resource specified by the Location header will be made with a GET.
 */
export const HTTP_STATUS_SEE_OTHER = 303;
/**
 * ServiceUnavailable indicates that the server is temporarily unavailable, usually due to high load or maintenance.
 */
export const HTTP_STATUS_SERVICE_UNAVAILABLE = 503;
/**
 * SwitchingProtocols indicates that the protocol version or protocol is being changed.
 */
export const HTTP_STATUS_SWITCHING_PROTOCOLS = 101;
/**
 * TemporaryRedirect indicates that the request information is located at the URI specified in the Location header. The default action when this status is received is to follow the Location header associated with the response. When the original request method was POST, the redirected request will also use the POST method.
 */
export const HTTP_STATUS_TEMPORARY_REDIRECT = 307;
/**
 * Unauthorized indicates that the requested resource requires authentication. The WWW-Authenticate header contains the details of how to perform the authentication.
 */
export const HTTP_STATUS_UNAUTHORIZED = 401;
/**
 * UnsupportedMediaType indicates that the request is an unsupported type.
 */
export const HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE = 415;
/**
 * Unused is a proposed extension to the HTTP/1.1 specification that is not fully specified.
 */
export const HTTP_STATUS_UNUSED = 306;
/**
 * UpgradeRequired indicates that the client should switch to a different protocol such as TLS/1.0.
 */
export const HTTP_STATUS_UPGRADE_REQUIRED = 426;
/**
 * UseProxy indicates that the request should use the proxy server at the URI specified in the Location header.
 */
export const HTTP_STATUS_USE_PROXY = 305;
