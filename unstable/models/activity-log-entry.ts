/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LogLevel } from './log-level';

/**
 * 
 * @export
 * @interface ActivityLogEntry
 */
export interface ActivityLogEntry {
    /**
     * Gets or sets the identifier.
     * @type {number}
     * @memberof ActivityLogEntry
     */
    Id?: number;
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof ActivityLogEntry
     */
    Name?: string | null;
    /**
     * Gets or sets the overview.
     * @type {string}
     * @memberof ActivityLogEntry
     */
    Overview?: string | null;
    /**
     * Gets or sets the short overview.
     * @type {string}
     * @memberof ActivityLogEntry
     */
    ShortOverview?: string | null;
    /**
     * Gets or sets the type.
     * @type {string}
     * @memberof ActivityLogEntry
     */
    Type?: string | null;
    /**
     * Gets or sets the item identifier.
     * @type {string}
     * @memberof ActivityLogEntry
     */
    ItemId?: string | null;
    /**
     * Gets or sets the date.
     * @type {string}
     * @memberof ActivityLogEntry
     */
    Date?: string;
    /**
     * Gets or sets the user identifier.
     * @type {string}
     * @memberof ActivityLogEntry
     */
    UserId?: string;
    /**
     * Gets or sets the user primary image tag.
     * @type {string}
     * @memberof ActivityLogEntry
     * @deprecated
     */
    UserPrimaryImageTag?: string | null;
    /**
     * Gets or sets the log severity.
     * @type {LogLevel}
     * @memberof ActivityLogEntry
     */
    Severity?: LogLevel;
}


