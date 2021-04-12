/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ClientCapabilities } from './client-capabilities';

/**
 * 
 * @export
 * @interface DeviceInfo
 */
export interface DeviceInfo {
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the identifier.
     * @type {string}
     * @memberof DeviceInfo
     */
    Id?: string | null;
    /**
     * Gets or sets the last name of the user.
     * @type {string}
     * @memberof DeviceInfo
     */
    LastUserName?: string | null;
    /**
     * Gets or sets the name of the application.
     * @type {string}
     * @memberof DeviceInfo
     */
    AppName?: string | null;
    /**
     * Gets or sets the application version.
     * @type {string}
     * @memberof DeviceInfo
     */
    AppVersion?: string | null;
    /**
     * Gets or sets the last user identifier.
     * @type {string}
     * @memberof DeviceInfo
     */
    LastUserId?: string;
    /**
     * Gets or sets the date last modified.
     * @type {string}
     * @memberof DeviceInfo
     */
    DateLastActivity?: string;
    /**
     * Gets or sets the capabilities.
     * @type {ClientCapabilities}
     * @memberof DeviceInfo
     */
    Capabilities?: ClientCapabilities | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceInfo
     */
    IconUrl?: string | null;
}

