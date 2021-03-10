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


import { PlaystateCommand } from './playstate-command';

/**
 * 
 * @export
 * @interface PlaystateRequest
 */
export interface PlaystateRequest {
    /**
     * Enum PlaystateCommand.
     * @type {PlaystateCommand}
     * @memberof PlaystateRequest
     */
    Command?: PlaystateCommand;
    /**
     * 
     * @type {number}
     * @memberof PlaystateRequest
     */
    SeekPositionTicks?: number | null;
    /**
     * Gets or sets the controlling user identifier.
     * @type {string}
     * @memberof PlaystateRequest
     */
    ControllingUserId?: string | null;
}


