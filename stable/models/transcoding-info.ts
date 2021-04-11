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


import { TranscodeReason } from './transcode-reason';

/**
 * 
 * @export
 * @interface TranscodingInfo
 */
export interface TranscodingInfo {
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    AudioCodec?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    VideoCodec?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TranscodingInfo
     */
    Container?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    IsVideoDirect?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranscodingInfo
     */
    IsAudioDirect?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    Bitrate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    Framerate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    CompletionPercentage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    Width?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    Height?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TranscodingInfo
     */
    AudioChannels?: number | null;
    /**
     * 
     * @type {Array<TranscodeReason>}
     * @memberof TranscodingInfo
     */
    TranscodeReasons?: Array<TranscodeReason> | null;
}


