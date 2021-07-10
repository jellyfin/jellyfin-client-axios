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



/**
 * 
 * @export
 * @interface BoxSetInfo
 */
export interface BoxSetInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof BoxSetInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the original title
     * @type {string}
     * @memberof BoxSetInfo
     */
    OriginalTitle?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof BoxSetInfo
     */
    Path?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof BoxSetInfo
     */
    MetadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof BoxSetInfo
     */
    MetadataCountryCode?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof BoxSetInfo
     */
    ProviderIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof BoxSetInfo
     */
    Year?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BoxSetInfo
     */
    IndexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BoxSetInfo
     */
    ParentIndexNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof BoxSetInfo
     */
    PremiereDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BoxSetInfo
     */
    IsAutomated?: boolean;
}


