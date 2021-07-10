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
import { ProblemDetails } from '../models';
// @ts-ignore
import { SpecialViewOptionDto } from '../models';
/**
 * UserViewsApi - axios parameter creator
 * @export
 */
export const UserViewsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get user view grouping options.
         * @param {string} userId User id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupingOptions: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getGroupingOptions', 'userId', userId)
            const localVarPath = `/Users/{userId}/GroupingOptions`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Get user views.
         * @param {string} userId User id.
         * @param {boolean} [includeExternalContent] Whether or not to include external views such as channels or live tv.
         * @param {Array<string>} [presetViews] Preset views.
         * @param {boolean} [includeHidden] Whether or not to include hidden content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserViews: async (userId: string, includeExternalContent?: boolean, presetViews?: Array<string>, includeHidden?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUserViews', 'userId', userId)
            const localVarPath = `/Users/{userId}/Views`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includeExternalContent !== undefined) {
                localVarQueryParameter['includeExternalContent'] = includeExternalContent;
            }

            if (presetViews) {
                localVarQueryParameter['presetViews'] = presetViews;
            }

            if (includeHidden !== undefined) {
                localVarQueryParameter['includeHidden'] = includeHidden;
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
 * UserViewsApi - functional programming interface
 * @export
 */
export const UserViewsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserViewsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get user view grouping options.
         * @param {string} userId User id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupingOptions(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SpecialViewOptionDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupingOptions(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get user views.
         * @param {string} userId User id.
         * @param {boolean} [includeExternalContent] Whether or not to include external views such as channels or live tv.
         * @param {Array<string>} [presetViews] Preset views.
         * @param {boolean} [includeHidden] Whether or not to include hidden content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserViews(userId: string, includeExternalContent?: boolean, presetViews?: Array<string>, includeHidden?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserViews(userId, includeExternalContent, presetViews, includeHidden, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserViewsApi - factory interface
 * @export
 */
export const UserViewsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserViewsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get user view grouping options.
         * @param {string} userId User id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupingOptions(userId: string, options?: any): AxiosPromise<Array<SpecialViewOptionDto>> {
            return localVarFp.getGroupingOptions(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get user views.
         * @param {string} userId User id.
         * @param {boolean} [includeExternalContent] Whether or not to include external views such as channels or live tv.
         * @param {Array<string>} [presetViews] Preset views.
         * @param {boolean} [includeHidden] Whether or not to include hidden content.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserViews(userId: string, includeExternalContent?: boolean, presetViews?: Array<string>, includeHidden?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return localVarFp.getUserViews(userId, includeExternalContent, presetViews, includeHidden, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getGroupingOptions operation in UserViewsApi.
 * @export
 * @interface UserViewsApiGetGroupingOptionsRequest
 */
export interface UserViewsApiGetGroupingOptionsRequest {
    /**
     * User id.
     * @type {string}
     * @memberof UserViewsApiGetGroupingOptions
     */
    readonly userId: string
}

/**
 * Request parameters for getUserViews operation in UserViewsApi.
 * @export
 * @interface UserViewsApiGetUserViewsRequest
 */
export interface UserViewsApiGetUserViewsRequest {
    /**
     * User id.
     * @type {string}
     * @memberof UserViewsApiGetUserViews
     */
    readonly userId: string

    /**
     * Whether or not to include external views such as channels or live tv.
     * @type {boolean}
     * @memberof UserViewsApiGetUserViews
     */
    readonly includeExternalContent?: boolean

    /**
     * Preset views.
     * @type {Array<string>}
     * @memberof UserViewsApiGetUserViews
     */
    readonly presetViews?: Array<string>

    /**
     * Whether or not to include hidden content.
     * @type {boolean}
     * @memberof UserViewsApiGetUserViews
     */
    readonly includeHidden?: boolean
}

/**
 * UserViewsApi - object-oriented interface
 * @export
 * @class UserViewsApi
 * @extends {BaseAPI}
 */
export class UserViewsApi extends BaseAPI {
    /**
     * 
     * @summary Get user view grouping options.
     * @param {UserViewsApiGetGroupingOptionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserViewsApi
     */
    public getGroupingOptions(requestParameters: UserViewsApiGetGroupingOptionsRequest, options?: any) {
        return UserViewsApiFp(this.configuration).getGroupingOptions(requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get user views.
     * @param {UserViewsApiGetUserViewsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserViewsApi
     */
    public getUserViews(requestParameters: UserViewsApiGetUserViewsRequest, options?: any) {
        return UserViewsApiFp(this.configuration).getUserViews(requestParameters.userId, requestParameters.includeExternalContent, requestParameters.presetViews, requestParameters.includeHidden, options).then((request) => request(this.axios, this.basePath));
    }
}
