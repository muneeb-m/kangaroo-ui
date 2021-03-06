/*
 * Copyright (c) 2017 Michael Krotscheck
 *
 * Licensed under the Apache License, Version 2.0 (the "License"), you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An enumeration of client types.
 *
 * @author Michael Krotscheck
 */
export enum ClientType {

  /**
   * A Confidential client, such as a server-based web application - which
   * uses the authorization token flow described in section 4.1 in the OAuth2
   * Specification. The use case met is a server-based web application
   * which is permitted to make API calls to the authorization server on
   * behalf of the user.
   *
   * @see <a href="https://tools.ietf.org/html/rfc6749#section-4.1">https://tools.ietf.org/html/rfc6749#section-4.1</a>
   */
  AuthorizationGrant = 'AuthorizationGrant',

  /**
   * A Public client, such as a browser javascript application, which uses
   * the Implicit token flow described in section 4.2 of the OAuth2
   * Specification.
   *
   * @see <a href="https://tools.ietf.org/html/rfc6749#section-4.2">https://tools.ietf.org/html/rfc6749#section-4.2</a>
   */
  Implicit = 'Implicit',

  /**
   * A confidential client, which attempts to authenticate using the
   * username and password of an existing account. Described in section 4.3
   * of the OAuth2 Specification. This is intended to be a migratory
   * method, and should be used to exchange actual user credentials for an
   * auth token.
   *
   * @see <a href="https://tools.ietf.org/html/rfc6749#section-4.3">https://tools.ietf.org/html/rfc6749#section-4.3</a>
   */
  OwnerCredentials = 'OwnerCredentials',

  /**
   * A confidential client, which attempts to authenticate itself using a
   * client-specific userid and password. This is often used in cases where
   * your server application needs to access resources on the Authorization
   * server, and is described in section 4.4 of the OAuth2 specification.
   *
   * @see <a href="https://tools.ietf.org/html/rfc6749#section-4.4">https://tools.ietf.org/html/rfc6749#section-4.4</a>
   */
  ClientCredentials = 'ClientCredentials'

}
