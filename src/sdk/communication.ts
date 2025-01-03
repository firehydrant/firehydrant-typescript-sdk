/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { communicationDeleteStatusUpdateTemplate } from "../funcs/communicationDeleteStatusUpdateTemplate.js";
import { communicationGetTemplate } from "../funcs/communicationGetTemplate.js";
import { communicationListTemplates } from "../funcs/communicationListTemplates.js";
import { communicationUpdateTemplate } from "../funcs/communicationUpdateTemplate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Communication extends ClientSDK {
  /**
   * List status update templates
   *
   * @remarks
   * List all status update templates for your organization
   */
  async listTemplates(
    request: operations.ListStatusUpdateTemplatesRequest,
    options?: RequestOptions,
  ): Promise<components.StatusUpdateTemplateEntity> {
    return unwrapAsync(communicationListTemplates(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a status update template
   *
   * @remarks
   * Get a single status update template by ID
   */
  async getTemplate(
    request: operations.GetStatusUpdateTemplateRequest,
    options?: RequestOptions,
  ): Promise<components.StatusUpdateTemplateEntity> {
    return unwrapAsync(communicationGetTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a status update template
   *
   * @remarks
   * Delete a single status update template
   */
  async deleteStatusUpdateTemplate(
    request: operations.DeleteStatusUpdateTemplateRequest,
    options?: RequestOptions,
  ): Promise<components.StatusUpdateTemplateEntity> {
    return unwrapAsync(communicationDeleteStatusUpdateTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a status update template
   *
   * @remarks
   * Update a single status update template
   */
  async updateTemplate(
    request: operations.UpdateStatusUpdateTemplateRequest,
    options?: RequestOptions,
  ): Promise<components.StatusUpdateTemplateEntity> {
    return unwrapAsync(communicationUpdateTemplate(
      this,
      request,
      options,
    ));
  }
}
