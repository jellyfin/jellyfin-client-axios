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



/**
 * Class MovePlaylistItemRequestDto.
 * @export
 * @interface MovePlaylistItemRequestDto
 */
export interface MovePlaylistItemRequestDto {
    /**
     * Gets or sets the playlist identifier of the item.
     * @type {string}
     * @memberof MovePlaylistItemRequestDto
     */
    PlaylistItemId?: string;
    /**
     * Gets or sets the new position.
     * @type {number}
     * @memberof MovePlaylistItemRequestDto
     */
    NewIndex?: number;
}


