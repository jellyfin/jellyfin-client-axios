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



/**
 * 
 * @export
 * @interface MusicVideoInfo
 */
export interface MusicVideoInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof MusicVideoInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof MusicVideoInfo
     */
    Path?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof MusicVideoInfo
     */
    MetadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof MusicVideoInfo
     */
    MetadataCountryCode?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof MusicVideoInfo
     */
    ProviderIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof MusicVideoInfo
     */
    Year?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MusicVideoInfo
     */
    IndexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MusicVideoInfo
     */
    ParentIndexNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof MusicVideoInfo
     */
    PremiereDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof MusicVideoInfo
     */
    IsAutomated?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof MusicVideoInfo
     */
    Artists?: Array<string> | null;
}


