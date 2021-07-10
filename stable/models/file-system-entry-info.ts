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


import { FileSystemEntryType } from './file-system-entry-type';

/**
 * Class FileSystemEntryInfo.
 * @export
 * @interface FileSystemEntryInfo
 */
export interface FileSystemEntryInfo {
    /**
     * Gets the name.
     * @type {string}
     * @memberof FileSystemEntryInfo
     */
    Name?: string | null;
    /**
     * Gets the path.
     * @type {string}
     * @memberof FileSystemEntryInfo
     */
    Path?: string | null;
    /**
     * Gets the type.
     * @type {FileSystemEntryType}
     * @memberof FileSystemEntryInfo
     */
    Type?: FileSystemEntryType;
}


