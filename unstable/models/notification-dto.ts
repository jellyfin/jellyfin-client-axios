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


import { NotificationLevel } from './notification-level';

/**
 * The notification DTO.
 * @export
 * @interface NotificationDto
 */
export interface NotificationDto {
    /**
     * Gets or sets the notification ID. Defaults to an empty string.
     * @type {string}
     * @memberof NotificationDto
     */
    Id?: string;
    /**
     * Gets or sets the notification\'s user ID. Defaults to an empty string.
     * @type {string}
     * @memberof NotificationDto
     */
    UserId?: string;
    /**
     * Gets or sets the notification date.
     * @type {string}
     * @memberof NotificationDto
     */
    Date?: string;
    /**
     * Gets or sets a value indicating whether the notification has been read. Defaults to false.
     * @type {boolean}
     * @memberof NotificationDto
     */
    IsRead?: boolean;
    /**
     * Gets or sets the notification\'s name. Defaults to an empty string.
     * @type {string}
     * @memberof NotificationDto
     */
    Name?: string;
    /**
     * Gets or sets the notification\'s description. Defaults to an empty string.
     * @type {string}
     * @memberof NotificationDto
     */
    Description?: string;
    /**
     * Gets or sets the notification\'s URL. Defaults to an empty string.
     * @type {string}
     * @memberof NotificationDto
     */
    Url?: string;
    /**
     * Gets or sets the notification level.
     * @type {NotificationLevel}
     * @memberof NotificationDto
     */
    Level?: NotificationLevel;
}


