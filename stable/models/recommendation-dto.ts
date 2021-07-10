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


import { BaseItemDto } from './base-item-dto';
import { RecommendationType } from './recommendation-type';

/**
 * 
 * @export
 * @interface RecommendationDto
 */
export interface RecommendationDto {
    /**
     * 
     * @type {Array<BaseItemDto>}
     * @memberof RecommendationDto
     */
    Items?: Array<BaseItemDto> | null;
    /**
     * 
     * @type {RecommendationType}
     * @memberof RecommendationDto
     */
    RecommendationType?: RecommendationType;
    /**
     * 
     * @type {string}
     * @memberof RecommendationDto
     */
    BaselineItemName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecommendationDto
     */
    CategoryId?: string;
}


