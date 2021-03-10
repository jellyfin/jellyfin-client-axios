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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseItemDto } from '../models';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { BaseItemKind } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFields } from '../models';
/**
 * GenresApi - axios parameter creator
 * @export
 */
export const GenresApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets a genre, by name.
         * @param {string} genreName The genre name.
         * @param {string} [userId] The user id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenre: async (genreName: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'genreName' is not null or undefined
            assertParamExists('getGenre', 'genreName', genreName)
            const localVarPath = `/Genres/{genreName}`
                .replace(`{${"genreName"}}`, encodeURIComponent(String(genreName)));
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
         * @summary Gets all genres from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenres: async (startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Genres`;
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

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (searchTerm !== undefined) {
                localVarQueryParameter['searchTerm'] = searchTerm;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (excludeItemTypes) {
                localVarQueryParameter['excludeItemTypes'] = excludeItemTypes;
            }

            if (includeItemTypes) {
                localVarQueryParameter['includeItemTypes'] = includeItemTypes;
            }

            if (isFavorite !== undefined) {
                localVarQueryParameter['isFavorite'] = isFavorite;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (nameStartsWithOrGreater !== undefined) {
                localVarQueryParameter['nameStartsWithOrGreater'] = nameStartsWithOrGreater;
            }

            if (nameStartsWith !== undefined) {
                localVarQueryParameter['nameStartsWith'] = nameStartsWith;
            }

            if (nameLessThan !== undefined) {
                localVarQueryParameter['nameLessThan'] = nameLessThan;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
            }

            if (enableTotalRecordCount !== undefined) {
                localVarQueryParameter['enableTotalRecordCount'] = enableTotalRecordCount;
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
 * GenresApi - functional programming interface
 * @export
 */
export const GenresApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GenresApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets a genre, by name.
         * @param {string} genreName The genre name.
         * @param {string} [userId] The user id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGenre(genreName: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGenre(genreName, userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets all genres from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGenres(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGenres(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GenresApi - factory interface
 * @export
 */
export const GenresApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GenresApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets a genre, by name.
         * @param {string} genreName The genre name.
         * @param {string} [userId] The user id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenre(genreName: string, userId?: string, options?: any): AxiosPromise<BaseItemDto> {
            return localVarFp.getGenre(genreName, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all genres from a given item, folder, or the entire library.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
         * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGenres(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getGenres(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GenresApi - interface
 * @export
 * @interface GenresApi
 */
export interface GenresApiInterface {
    /**
     * 
     * @summary Gets a genre, by name.
     * @param {string} genreName The genre name.
     * @param {string} [userId] The user id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenresApiInterface
     */
    getGenre(genreName: string, userId?: string, options?: any): AxiosPromise<BaseItemDto>;

    /**
     * 
     * @summary Gets all genres from a given item, folder, or the entire library.
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {string} [searchTerm] The search term.
     * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
     * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
     * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
     * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
     * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
     * @param {string} [userId] User id.
     * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
     * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
     * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
     * @param {boolean} [enableImages] Optional, include image information in output.
     * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenresApiInterface
     */
    getGenres(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult>;

}

/**
 * GenresApi - object-oriented interface
 * @export
 * @class GenresApi
 * @extends {BaseAPI}
 */
export class GenresApi extends BaseAPI implements GenresApiInterface {
    /**
     * 
     * @summary Gets a genre, by name.
     * @param {string} genreName The genre name.
     * @param {string} [userId] The user id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenresApi
     */
    public getGenre(genreName: string, userId?: string, options?: any) {
        return GenresApiFp(this.configuration).getGenre(genreName, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all genres from a given item, folder, or the entire library.
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {string} [searchTerm] The search term.
     * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @param {Array<ItemFields>} [fields] Optional. Specify additional fields of information to return in the output.
     * @param {Array<BaseItemKind>} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
     * @param {Array<BaseItemKind>} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
     * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
     * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
     * @param {string} [userId] User id.
     * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
     * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
     * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
     * @param {boolean} [enableImages] Optional, include image information in output.
     * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GenresApi
     */
    public getGenres(startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: Array<ItemFields>, excludeItemTypes?: Array<BaseItemKind>, includeItemTypes?: Array<BaseItemKind>, isFavorite?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any) {
        return GenresApiFp(this.configuration).getGenres(startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, isFavorite, imageTypeLimit, enableImageTypes, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options).then((request) => request(this.axios, this.basePath));
    }
}
