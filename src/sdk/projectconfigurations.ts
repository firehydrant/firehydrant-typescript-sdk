/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectConfigurationsCreate } from "../funcs/projectConfigurationsCreate.js";
import { projectConfigurationsGet } from "../funcs/projectConfigurationsGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ProjectConfigurations extends ClientSDK {
  /**
   * Create a ticketing project configuration
   *
   * @remarks
   * Creates configuration for a ticketing project
   */
  async create(
    request: operations.CreateTicketingProjectConfigurationRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingProjectConfigEntity> {
    return unwrapAsync(projectConfigurationsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a ticketing project configuration
   *
   * @remarks
   * Retrieve configuration for a ticketing project
   */
  async get(
    request: operations.GetTicketingProjectConfigRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingProjectConfigEntity> {
    return unwrapAsync(projectConfigurationsGet(
      this,
      request,
      options,
    ));
  }
}
