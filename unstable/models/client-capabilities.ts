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


import { DeviceProfile } from './device-profile';
import { GeneralCommandType } from './general-command-type';

/**
 * 
 * @export
 * @interface ClientCapabilities
 */
export interface ClientCapabilities {
    /**
     * 
     * @type {Array<string>}
     * @memberof ClientCapabilities
     */
    PlayableMediaTypes?: Array<string> | null;
    /**
     * 
     * @type {Array<GeneralCommandType>}
     * @memberof ClientCapabilities
     */
    SupportedCommands?: Array<GeneralCommandType> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    SupportsMediaControl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    SupportsContentUploading?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    MessageCallbackUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    SupportsPersistentIdentifier?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ClientCapabilities
     */
    SupportsSync?: boolean;
    /**
     * A MediaBrowser.Model.Dlna.DeviceProfile represents a set of metadata which determines which content a certain device is able to play.  <br />  Specifically, it defines the supported <see cref=\"P:MediaBrowser.Model.Dlna.DeviceProfile.ContainerProfiles\">containers</see> and  <see cref=\"P:MediaBrowser.Model.Dlna.DeviceProfile.CodecProfiles\">codecs</see> (video and/or audio, including codec profiles and levels)  the device is able to direct play (without transcoding or remuxing),  as well as which <see cref=\"P:MediaBrowser.Model.Dlna.DeviceProfile.TranscodingProfiles\">containers/codecs to transcode to</see> in case it isn\'t.
     * @type {DeviceProfile}
     * @memberof ClientCapabilities
     */
    DeviceProfile?: DeviceProfile | null;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    AppStoreUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ClientCapabilities
     */
    IconUrl?: string | null;
}


