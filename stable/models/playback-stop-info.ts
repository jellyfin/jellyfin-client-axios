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


import { BaseItemDto } from './base-item-dto';
import { QueueItem } from './queue-item';

/**
 * Class PlaybackStopInfo.
 * @export
 * @interface PlaybackStopInfo
 */
export interface PlaybackStopInfo {
    /**
     * Gets or sets the item.
     * @type {BaseItemDto}
     * @memberof PlaybackStopInfo
     */
    Item?: BaseItemDto | null;
    /**
     * Gets or sets the item identifier.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    ItemId?: string;
    /**
     * Gets or sets the session id.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    SessionId?: string | null;
    /**
     * Gets or sets the media version identifier.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    MediaSourceId?: string | null;
    /**
     * Gets or sets the position ticks.
     * @type {number}
     * @memberof PlaybackStopInfo
     */
    PositionTicks?: number | null;
    /**
     * Gets or sets the live stream identifier.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    LiveStreamId?: string | null;
    /**
     * Gets or sets the play session identifier.
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    PlaySessionId?: string | null;
    /**
     * Gets or sets a value indicating whether this MediaBrowser.Model.Session.PlaybackStopInfo is failed.
     * @type {boolean}
     * @memberof PlaybackStopInfo
     */
    Failed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    NextMediaType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaybackStopInfo
     */
    PlaylistItemId?: string | null;
    /**
     * 
     * @type {Array<QueueItem>}
     * @memberof PlaybackStopInfo
     */
    NowPlayingQueue?: Array<QueueItem> | null;
}


