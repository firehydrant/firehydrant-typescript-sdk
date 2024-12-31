/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { statusUpdateTemplatesCreate } from "../funcs/statusUpdateTemplatesCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class StatusUpdateTemplates extends ClientSDK {
  /**
   * Create a status update template
   *
   * @remarks
   * Create a status update template for your organization
   */
  async create(
    request: components.PostV1StatusUpdateTemplates,
    options?: RequestOptions,
  ): Promise<components.StatusUpdateTemplateEntity> {
    return unwrapAsync(statusUpdateTemplatesCreate(
      this,
      request,
      options,
    ));
  }
}
