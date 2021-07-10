/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { SessionInfo } from './session-info';
import { UserDto } from './user-dto';

/**
 * 
 * @export
 * @interface AuthenticationResult
 */
export interface AuthenticationResult {
    /**
     * Class UserDto.
     * @type {UserDto}
     * @memberof AuthenticationResult
     */
    User?: UserDto | null;
    /**
     * Class SessionInfo.
     * @type {SessionInfo}
     * @memberof AuthenticationResult
     */
    SessionInfo?: SessionInfo | null;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResult
     */
    AccessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResult
     */
    ServerId?: string | null;
}


