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


import { TaskCompletionStatus } from './task-completion-status';

/**
 * Class TaskExecutionInfo.
 * @export
 * @interface TaskResult
 */
export interface TaskResult {
    /**
     * Gets or sets the start time UTC.
     * @type {string}
     * @memberof TaskResult
     */
    StartTimeUtc?: string;
    /**
     * Gets or sets the end time UTC.
     * @type {string}
     * @memberof TaskResult
     */
    EndTimeUtc?: string;
    /**
     * Gets or sets the status.
     * @type {TaskCompletionStatus}
     * @memberof TaskResult
     */
    Status?: TaskCompletionStatus;
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof TaskResult
     */
    Name?: string | null;
    /**
     * Gets or sets the key.
     * @type {string}
     * @memberof TaskResult
     */
    Key?: string | null;
    /**
     * Gets or sets the id.
     * @type {string}
     * @memberof TaskResult
     */
    Id?: string | null;
    /**
     * Gets or sets the error message.
     * @type {string}
     * @memberof TaskResult
     */
    ErrorMessage?: string | null;
    /**
     * Gets or sets the long error message.
     * @type {string}
     * @memberof TaskResult
     */
    LongErrorMessage?: string | null;
}


