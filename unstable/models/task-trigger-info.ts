/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DayOfWeek } from './day-of-week';

/**
 * Class TaskTriggerInfo.
 * @export
 * @interface TaskTriggerInfo
 */
export interface TaskTriggerInfo {
    /**
     * Gets or sets the type.
     * @type {string}
     * @memberof TaskTriggerInfo
     */
    Type?: string | null;
    /**
     * Gets or sets the time of day.
     * @type {number}
     * @memberof TaskTriggerInfo
     */
    TimeOfDayTicks?: number | null;
    /**
     * Gets or sets the interval.
     * @type {number}
     * @memberof TaskTriggerInfo
     */
    IntervalTicks?: number | null;
    /**
     * Gets or sets the day of week.
     * @type {DayOfWeek}
     * @memberof TaskTriggerInfo
     */
    DayOfWeek?: DayOfWeek | null;
    /**
     * Gets or sets the maximum runtime ticks.
     * @type {number}
     * @memberof TaskTriggerInfo
     */
    MaxRuntimeTicks?: number | null;
}


