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


import { GroupStateType } from './group-state-type';

/**
 * Class GroupInfoDto.
 * @export
 * @interface GroupInfoDto
 */
export interface GroupInfoDto {
    /**
     * Gets the group identifier.
     * @type {string}
     * @memberof GroupInfoDto
     */
    GroupId?: string;
    /**
     * Gets the group name.
     * @type {string}
     * @memberof GroupInfoDto
     */
    GroupName?: string | null;
    /**
     * Gets the group state.
     * @type {GroupStateType}
     * @memberof GroupInfoDto
     */
    State?: GroupStateType;
    /**
     * Gets the participants.
     * @type {Array<string>}
     * @memberof GroupInfoDto
     */
    Participants?: Array<string> | null;
    /**
     * Gets the date when this DTO has been created.
     * @type {string}
     * @memberof GroupInfoDto
     */
    LastUpdatedAt?: string;
}


