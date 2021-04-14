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


import { TaskResult } from './task-result';
import { TaskState } from './task-state';
import { TaskTriggerInfo } from './task-trigger-info';

/**
 * Class TaskInfo.
 * @export
 * @interface TaskInfo
 */
export interface TaskInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof TaskInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the state of the task.
     * @type {TaskState}
     * @memberof TaskInfo
     */
    State?: TaskState;
    /**
     * Gets or sets the progress.
     * @type {number}
     * @memberof TaskInfo
     */
    CurrentProgressPercentage?: number | null;
    /**
     * Gets or sets the id.
     * @type {string}
     * @memberof TaskInfo
     */
    Id?: string | null;
    /**
     * Gets or sets the last execution result.
     * @type {TaskResult}
     * @memberof TaskInfo
     */
    LastExecutionResult?: TaskResult | null;
    /**
     * Gets or sets the triggers.
     * @type {Array<TaskTriggerInfo>}
     * @memberof TaskInfo
     */
    Triggers?: Array<TaskTriggerInfo> | null;
    /**
     * Gets or sets the description.
     * @type {string}
     * @memberof TaskInfo
     */
    Description?: string | null;
    /**
     * Gets or sets the category.
     * @type {string}
     * @memberof TaskInfo
     */
    Category?: string | null;
    /**
     * Gets or sets a value indicating whether this instance is hidden.
     * @type {boolean}
     * @memberof TaskInfo
     */
    IsHidden?: boolean;
    /**
     * Gets or sets the key.
     * @type {string}
     * @memberof TaskInfo
     */
    Key?: string | null;
}


