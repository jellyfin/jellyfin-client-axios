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
 * The startup configuration DTO.
 * @export
 * @interface StartupConfigurationDto
 */
export interface StartupConfigurationDto {
    /**
     * Gets or sets UI language culture.
     * @type {string}
     * @memberof StartupConfigurationDto
     */
    UICulture?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof StartupConfigurationDto
     */
    MetadataCountryCode?: string | null;
    /**
     * Gets or sets the preferred language for the metadata.
     * @type {string}
     * @memberof StartupConfigurationDto
     */
    PreferredMetadataLanguage?: string | null;
}


