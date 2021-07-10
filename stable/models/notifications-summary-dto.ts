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


import { NotificationLevel } from './notification-level';

/**
 * The notification summary DTO.
 * @export
 * @interface NotificationsSummaryDto
 */
export interface NotificationsSummaryDto {
    /**
     * Gets or sets the number of unread notifications.
     * @type {number}
     * @memberof NotificationsSummaryDto
     */
    UnreadCount?: number;
    /**
     * Gets or sets the maximum unread notification level.
     * @type {NotificationLevel}
     * @memberof NotificationsSummaryDto
     */
    MaxUnreadNotificationLevel?: NotificationLevel | null;
}


