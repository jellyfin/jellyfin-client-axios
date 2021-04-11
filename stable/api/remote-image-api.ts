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
import { ImageProviderInfo } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { RemoteImageResult } from '../models';
/**
 * RemoteImageApi - axios parameter creator
 * @export
 */
export const RemoteImageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Downloads a remote image for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} type The image type.
         * @param {string} [imageUrl] The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadRemoteImage: async (itemId: string, type: ImageType, imageUrl?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('downloadRemoteImage', 'itemId', itemId)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('downloadRemoteImage', 'type', type)
            const localVarPath = `/Items/{itemId}/RemoteImages/Download`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
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

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (imageUrl !== undefined) {
                localVarQueryParameter['imageUrl'] = imageUrl;
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
         * @summary Gets a remote image.
         * @param {string} imageUrl The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImage: async (imageUrl: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'imageUrl' is not null or undefined
            assertParamExists('getRemoteImage', 'imageUrl', imageUrl)
            const localVarPath = `/Images/Remote`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (imageUrl !== undefined) {
                localVarQueryParameter['imageUrl'] = imageUrl;
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
         * @summary Gets available remote image providers for an item.
         * @param {string} itemId Item Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImageProviders: async (itemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getRemoteImageProviders', 'itemId', itemId)
            const localVarPath = `/Items/{itemId}/RemoteImages/Providers`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
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
         * @summary Gets available remote images for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} [type] The image type.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [providerName] Optional. The image provider to use.
         * @param {boolean} [includeAllLanguages] Optional. Include all languages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImages: async (itemId: string, type?: ImageType, startIndex?: number, limit?: number, providerName?: string, includeAllLanguages?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getRemoteImages', 'itemId', itemId)
            const localVarPath = `/Items/{itemId}/RemoteImages`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)));
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

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (providerName !== undefined) {
                localVarQueryParameter['providerName'] = providerName;
            }

            if (includeAllLanguages !== undefined) {
                localVarQueryParameter['includeAllLanguages'] = includeAllLanguages;
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
 * RemoteImageApi - functional programming interface
 * @export
 */
export const RemoteImageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RemoteImageApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Downloads a remote image for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} type The image type.
         * @param {string} [imageUrl] The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadRemoteImage(itemId: string, type: ImageType, imageUrl?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadRemoteImage(itemId, type, imageUrl, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a remote image.
         * @param {string} imageUrl The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRemoteImage(imageUrl: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRemoteImage(imageUrl, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets available remote image providers for an item.
         * @param {string} itemId Item Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRemoteImageProviders(itemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ImageProviderInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRemoteImageProviders(itemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets available remote images for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} [type] The image type.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [providerName] Optional. The image provider to use.
         * @param {boolean} [includeAllLanguages] Optional. Include all languages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRemoteImages(itemId: string, type?: ImageType, startIndex?: number, limit?: number, providerName?: string, includeAllLanguages?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RemoteImageResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRemoteImages(itemId, type, startIndex, limit, providerName, includeAllLanguages, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RemoteImageApi - factory interface
 * @export
 */
export const RemoteImageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RemoteImageApiFp(configuration)
    return {
        /**
         * 
         * @summary Downloads a remote image for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} type The image type.
         * @param {string} [imageUrl] The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadRemoteImage(itemId: string, type: ImageType, imageUrl?: string, options?: any): AxiosPromise<void> {
            return localVarFp.downloadRemoteImage(itemId, type, imageUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a remote image.
         * @param {string} imageUrl The image url.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImage(imageUrl: string, options?: any): AxiosPromise<any> {
            return localVarFp.getRemoteImage(imageUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets available remote image providers for an item.
         * @param {string} itemId Item Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImageProviders(itemId: string, options?: any): AxiosPromise<Array<ImageProviderInfo>> {
            return localVarFp.getRemoteImageProviders(itemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets available remote images for an item.
         * @param {string} itemId Item Id.
         * @param {ImageType} [type] The image type.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [providerName] Optional. The image provider to use.
         * @param {boolean} [includeAllLanguages] Optional. Include all languages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRemoteImages(itemId: string, type?: ImageType, startIndex?: number, limit?: number, providerName?: string, includeAllLanguages?: boolean, options?: any): AxiosPromise<RemoteImageResult> {
            return localVarFp.getRemoteImages(itemId, type, startIndex, limit, providerName, includeAllLanguages, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RemoteImageApi - interface
 * @export
 * @interface RemoteImageApi
 */
export interface RemoteImageApiInterface {
    /**
     * 
     * @summary Downloads a remote image for an item.
     * @param {string} itemId Item Id.
     * @param {ImageType} type The image type.
     * @param {string} [imageUrl] The image url.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApiInterface
     */
    downloadRemoteImage(itemId: string, type: ImageType, imageUrl?: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Gets a remote image.
     * @param {string} imageUrl The image url.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApiInterface
     */
    getRemoteImage(imageUrl: string, options?: any): AxiosPromise<any>;

    /**
     * 
     * @summary Gets available remote image providers for an item.
     * @param {string} itemId Item Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApiInterface
     */
    getRemoteImageProviders(itemId: string, options?: any): AxiosPromise<Array<ImageProviderInfo>>;

    /**
     * 
     * @summary Gets available remote images for an item.
     * @param {string} itemId Item Id.
     * @param {ImageType} [type] The image type.
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {string} [providerName] Optional. The image provider to use.
     * @param {boolean} [includeAllLanguages] Optional. Include all languages.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApiInterface
     */
    getRemoteImages(itemId: string, type?: ImageType, startIndex?: number, limit?: number, providerName?: string, includeAllLanguages?: boolean, options?: any): AxiosPromise<RemoteImageResult>;

}

/**
 * RemoteImageApi - object-oriented interface
 * @export
 * @class RemoteImageApi
 * @extends {BaseAPI}
 */
export class RemoteImageApi extends BaseAPI implements RemoteImageApiInterface {
    /**
     * 
     * @summary Downloads a remote image for an item.
     * @param {string} itemId Item Id.
     * @param {ImageType} type The image type.
     * @param {string} [imageUrl] The image url.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApi
     */
    public downloadRemoteImage(itemId: string, type: ImageType, imageUrl?: string, options?: any) {
        return RemoteImageApiFp(this.configuration).downloadRemoteImage(itemId, type, imageUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a remote image.
     * @param {string} imageUrl The image url.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApi
     */
    public getRemoteImage(imageUrl: string, options?: any) {
        return RemoteImageApiFp(this.configuration).getRemoteImage(imageUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets available remote image providers for an item.
     * @param {string} itemId Item Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApi
     */
    public getRemoteImageProviders(itemId: string, options?: any) {
        return RemoteImageApiFp(this.configuration).getRemoteImageProviders(itemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets available remote images for an item.
     * @param {string} itemId Item Id.
     * @param {ImageType} [type] The image type.
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return.
     * @param {string} [providerName] Optional. The image provider to use.
     * @param {boolean} [includeAllLanguages] Optional. Include all languages.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RemoteImageApi
     */
    public getRemoteImages(itemId: string, type?: ImageType, startIndex?: number, limit?: number, providerName?: string, includeAllLanguages?: boolean, options?: any) {
        return RemoteImageApiFp(this.configuration).getRemoteImages(itemId, type, startIndex, limit, providerName, includeAllLanguages, options).then((request) => request(this.axios, this.basePath));
    }
}
