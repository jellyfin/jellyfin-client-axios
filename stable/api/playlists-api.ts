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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { CreatePlaylistDto } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFields } from '../models';
// @ts-ignore
import { PlaylistCreationResult } from '../models';
// @ts-ignore
import { UNKNOWN_BASE_TYPE } from '../models';
/**
 * PlaylistsApi - axios parameter creator
 * @export
 */
export const PlaylistsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToPlaylist: async (playlistId: string, ids?: Array<string>, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('addToPlaylist', 'playlistId', playlistId)
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Creates a new playlist.
         * @param {string} [name] The playlist name.
         * @param {Array<string>} [ids] The item ids.
         * @param {string} [userId] The user id.
         * @param {string} [mediaType] The media type.
         * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlaylist: async (name?: string, ids?: Array<string>, userId?: string, mediaType?: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Playlists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (mediaType !== undefined) {
                localVarQueryParameter['mediaType'] = mediaType;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(uNKNOWNBASETYPE, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaylistItems: async (playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: Array<ItemFields>, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('getPlaylistItems', 'playlistId', playlistId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getPlaylistItems', 'userId', userId)
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
            }

            if (enableUserData !== undefined) {
                localVarQueryParameter['enableUserData'] = enableUserData;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveItem: async (playlistId: string, itemId: string, newIndex: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('moveItem', 'playlistId', playlistId)
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('moveItem', 'itemId', itemId)
            // verify required parameter 'newIndex' is not null or undefined
            assertParamExists('moveItem', 'newIndex', newIndex)
            const localVarPath = `/Playlists/{playlistId}/Items/{itemId}/Move/{newIndex}`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)))
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"newIndex"}}`, encodeURIComponent(String(newIndex)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromPlaylist: async (playlistId: string, entryIds?: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('removeFromPlaylist', 'playlistId', playlistId)
            const localVarPath = `/Playlists/{playlistId}/Items`
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (entryIds) {
                localVarQueryParameter['entryIds'] = entryIds;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlaylistsApi - functional programming interface
 * @export
 */
export const PlaylistsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlaylistsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addToPlaylist(playlistId: string, ids?: Array<string>, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addToPlaylist(playlistId, ids, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Creates a new playlist.
         * @param {string} [name] The playlist name.
         * @param {Array<string>} [ids] The item ids.
         * @param {string} [userId] The user id.
         * @param {string} [mediaType] The media type.
         * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPlaylist(name?: string, ids?: Array<string>, userId?: string, mediaType?: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlaylistCreationResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPlaylist(name, ids, userId, mediaType, uNKNOWNBASETYPE, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlaylistItems(playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: Array<ItemFields>, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlaylistItems(playlistId, userId, startIndex, limit, fields, enableImages, enableUserData, imageTypeLimit, enableImageTypes, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async moveItem(playlistId: string, itemId: string, newIndex: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moveItem(playlistId, itemId, newIndex, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFromPlaylist(playlistId: string, entryIds?: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFromPlaylist(playlistId, entryIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlaylistsApi - factory interface
 * @export
 */
export const PlaylistsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlaylistsApiFp(configuration)
    return {
        /**
         * 
         * @summary Adds items to a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [ids] Item id, comma delimited.
         * @param {string} [userId] The userId.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToPlaylist(playlistId: string, ids?: Array<string>, userId?: string, options?: any): AxiosPromise<void> {
            return localVarFp.addToPlaylist(playlistId, ids, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
         * @summary Creates a new playlist.
         * @param {string} [name] The playlist name.
         * @param {Array<string>} [ids] The item ids.
         * @param {string} [userId] The user id.
         * @param {string} [mediaType] The media type.
         * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The create playlist payload.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlaylist(name?: string, ids?: Array<string>, userId?: string, mediaType?: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<PlaylistCreationResult> {
            return localVarFp.createPlaylist(name, ids, userId, mediaType, uNKNOWNBASETYPE, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the original items of a playlist.
         * @param {string} playlistId The playlist id.
         * @param {string} userId User id.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {boolean} [enableImages] Optional. Include image information in output.
         * @param {boolean} [enableUserData] Optional. Include user data.
         * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaylistItems(playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: Array<ItemFields>, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getPlaylistItems(playlistId, userId, startIndex, limit, fields, enableImages, enableUserData, imageTypeLimit, enableImageTypes, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Moves a playlist item.
         * @param {string} playlistId The playlist id.
         * @param {string} itemId The item id.
         * @param {number} newIndex The new index.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveItem(playlistId: string, itemId: string, newIndex: number, options?: any): AxiosPromise<void> {
            return localVarFp.moveItem(playlistId, itemId, newIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Removes items from a playlist.
         * @param {string} playlistId The playlist id.
         * @param {Array<string>} [entryIds] The item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromPlaylist(playlistId: string, entryIds?: Array<string>, options?: any): AxiosPromise<void> {
            return localVarFp.removeFromPlaylist(playlistId, entryIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlaylistsApi - interface
 * @export
 * @interface PlaylistsApi
 */
export interface PlaylistsApiInterface {
    /**
     * 
     * @summary Adds items to a playlist.
     * @param {string} playlistId The playlist id.
     * @param {Array<string>} [ids] Item id, comma delimited.
     * @param {string} [userId] The userId.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApiInterface
     */
    addToPlaylist(playlistId: string, ids?: Array<string>, userId?: string, options?: any): AxiosPromise<void>;

    /**
     * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
     * @summary Creates a new playlist.
     * @param {string} [name] The playlist name.
     * @param {Array<string>} [ids] The item ids.
     * @param {string} [userId] The user id.
     * @param {string} [mediaType] The media type.
     * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The create playlist payload.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApiInterface
     */
    createPlaylist(name?: string, ids?: Array<string>, userId?: string, mediaType?: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options?: any): AxiosPromise<PlaylistCreationResult>;

    /**
     * 
     * @summary Gets the original items of a playlist.
     * @param {string} playlistId The playlist id.
     * @param {string} userId User id.
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
     * @param {boolean} [enableImages] Optional. Include image information in output.
     * @param {boolean} [enableUserData] Optional. Include user data.
     * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
     * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApiInterface
     */
    getPlaylistItems(playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: Array<ItemFields>, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options?: any): AxiosPromise<BaseItemDtoQueryResult>;

    /**
     * 
     * @summary Moves a playlist item.
     * @param {string} playlistId The playlist id.
     * @param {string} itemId The item id.
     * @param {number} newIndex The new index.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApiInterface
     */
    moveItem(playlistId: string, itemId: string, newIndex: number, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Removes items from a playlist.
     * @param {string} playlistId The playlist id.
     * @param {Array<string>} [entryIds] The item ids, comma delimited.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApiInterface
     */
    removeFromPlaylist(playlistId: string, entryIds?: Array<string>, options?: any): AxiosPromise<void>;

}

/**
 * PlaylistsApi - object-oriented interface
 * @export
 * @class PlaylistsApi
 * @extends {BaseAPI}
 */
export class PlaylistsApi extends BaseAPI implements PlaylistsApiInterface {
    /**
     * 
     * @summary Adds items to a playlist.
     * @param {string} playlistId The playlist id.
     * @param {Array<string>} [ids] Item id, comma delimited.
     * @param {string} [userId] The userId.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public addToPlaylist(playlistId: string, ids?: Array<string>, userId?: string, options?: any) {
        return PlaylistsApiFp(this.configuration).addToPlaylist(playlistId, ids, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.  Query parameters are obsolete.
     * @summary Creates a new playlist.
     * @param {string} [name] The playlist name.
     * @param {Array<string>} [ids] The item ids.
     * @param {string} [userId] The user id.
     * @param {string} [mediaType] The media type.
     * @param {UNKNOWN_BASE_TYPE} [uNKNOWNBASETYPE] The create playlist payload.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public createPlaylist(name?: string, ids?: Array<string>, userId?: string, mediaType?: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, options?: any) {
        return PlaylistsApiFp(this.configuration).createPlaylist(name, ids, userId, mediaType, uNKNOWNBASETYPE, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the original items of a playlist.
     * @param {string} playlistId The playlist id.
     * @param {string} userId User id.
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
     * @param {boolean} [enableImages] Optional. Include image information in output.
     * @param {boolean} [enableUserData] Optional. Include user data.
     * @param {number} [imageTypeLimit] Optional. The max number of images to return, per image type.
     * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public getPlaylistItems(playlistId: string, userId: string, startIndex?: number, limit?: number, fields?: Array<ItemFields>, enableImages?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, options?: any) {
        return PlaylistsApiFp(this.configuration).getPlaylistItems(playlistId, userId, startIndex, limit, fields, enableImages, enableUserData, imageTypeLimit, enableImageTypes, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Moves a playlist item.
     * @param {string} playlistId The playlist id.
     * @param {string} itemId The item id.
     * @param {number} newIndex The new index.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public moveItem(playlistId: string, itemId: string, newIndex: number, options?: any) {
        return PlaylistsApiFp(this.configuration).moveItem(playlistId, itemId, newIndex, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Removes items from a playlist.
     * @param {string} playlistId The playlist id.
     * @param {Array<string>} [entryIds] The item ids, comma delimited.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlaylistsApi
     */
    public removeFromPlaylist(playlistId: string, entryIds?: Array<string>, options?: any) {
        return PlaylistsApiFp(this.configuration).removeFromPlaylist(playlistId, entryIds, options).then((request) => request(this.axios, this.basePath));
    }
}
