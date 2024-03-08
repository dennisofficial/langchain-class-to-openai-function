import { GenericSchema } from './generic';

export enum EStringFormat {
  /**
   * Date and time together
   * @example "2018-11-13T20:20:39+00:00"
   * @link https://tools.ietf.org/html/rfc3339#section-5.6
   */
  DATE_TIME = 'date-time',

  /**
   * Time
   * @example "20:20:39+00:00"
   * @link https://tools.ietf.org/html/rfc3339#section-5.6
   */
  TIME = 'time',

  /**
   * Date
   * @example "2018-11-13"
   * @link https://tools.ietf.org/html/rfc3339#section-5.6
   */
  DATE = 'date',

  /**
   * A duration as defined by the ISO 8601 ABNF for "duration".
   * @example "P3D" // expresses a duration of 3 days.
   * @link https://datatracker.ietf.org/doc/html/rfc3339#appendix-A
   */
  DURATION = 'duration',

  /**
   * Internet email address
   * @link http://tools.ietf.org/html/rfc5321#section-4.1.2
   */
  EMAIL = 'email',

  /**
   * The internationalized form of an Internet email address
   * @link https://tools.ietf.org/html/rfc6531
   */
  IDN_EMAIL = 'idn-email',

  /**
   * Internet host name
   * @link https://datatracker.ietf.org/doc/html/rfc1123#section-2.1
   */
  HOSTNAME = 'hostname',

  /**
   * An internationalized Internet host name
   * @link https://tools.ietf.org/html/rfc5890#section-2.3.2.3
   */
  IDN_HOSTNAME = 'idn-hostname',

  /**
   * IPv4 address, according to dotted-quad ABNF syntax
   * @link http://tools.ietf.org/html/rfc2673#section-3.2
   */
  IPV4 = 'ipv4',

  /**
   * IPv6 address
   * @link http://tools.ietf.org/html/rfc2373#section-2.2
   */
  IPV6 = 'ipv6',

  /**
   * A Universally Unique Identifier
   * @example "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a"
   * @link https://datatracker.ietf.org/doc/html/rfc4122
   */
  UUID = 'uuid',

  /**
   * A URI Reference (either a URI or a relative-reference)
   * @link http://tools.ietf.org/html/rfc3986#section-4.1
   */
  URI_REFERENCE = 'uri-reference',

  /**
   * The internationalized equivalent of a "uri"
   * @link https://tools.ietf.org/html/rfc3987
   */
  IRI = 'iri',

  /**
   * The internationalized equivalent of a "uri-reference"
   * @link https://tools.ietf.org/html/rfc3987
   */
  IRI_REFERENCE = 'iri-reference',

  /**
   * A URI Template (of any level) according to RFC6570. If you don't already know what a URI Template is, you probably don't need this value.
   * @link https://tools.ietf.org/html/rfc6570
   */
  URI_TEMPLATE = 'uri-template',

  /**
   * A JSON Pointer, according to RFC6901. There is more discussion on the use of JSON Pointer within JSON Schema in Structuring a complex schema. Note that this should be used only when the entire string contains only JSON Pointer content, e.g. `/foo/bar`. JSON Pointer URI fragments, e.g. `#/foo/bar/` should use `"uri-reference"`.
   * @link https://tools.ietf.org/html/rfc6901
   */
  JSON_POINTER = 'json-pointer',

  /**
   * A relative `JSON pointer`
   */
  RELATIVE_JSON_POINTER = 'relative-json-pointer',

  /**
   * A regular expression, which should be valid according to the ECMA 262 dialect.
   * @link https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
   */
  REGEX = 'regex',
}

export interface StringSchema extends GenericSchema<string> {
  type: 'string';
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  format?: EStringFormat;
}
