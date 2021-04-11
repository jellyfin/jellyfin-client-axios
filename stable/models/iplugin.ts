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


import { Version } from './version';

/**
 * Defines the MediaBrowser.Common.Plugins.IPlugin.
 * @export
 * @interface IPlugin
 */
export interface IPlugin {
    /**
     * Gets the name of the plugin.
     * @type {string}
     * @memberof IPlugin
     */
    Name?: string | null;
    /**
     * Gets the Description.
     * @type {string}
     * @memberof IPlugin
     */
    Description?: string | null;
    /**
     * Gets the unique id.
     * @type {string}
     * @memberof IPlugin
     */
    Id?: string;
    /**
     * Gets the plugin version.
     * @type {Version}
     * @memberof IPlugin
     */
    Version?: Version | null;
    /**
     * Gets the path to the assembly file.
     * @type {string}
     * @memberof IPlugin
     */
    AssemblyFilePath?: string | null;
    /**
     * Gets a value indicating whether the plugin can be uninstalled.
     * @type {boolean}
     * @memberof IPlugin
     */
    CanUninstall?: boolean;
    /**
     * Gets the full path to the data folder, where the plugin can store any miscellaneous files needed.
     * @type {string}
     * @memberof IPlugin
     */
    DataFolderPath?: string | null;
}


