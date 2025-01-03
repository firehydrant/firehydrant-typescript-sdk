/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { integrationsCreateConnection } from "../funcs/integrationsCreateConnection.js";
import { integrationsCreateFieldMap } from "../funcs/integrationsCreateFieldMap.js";
import { integrationsDeleteFieldMap } from "../funcs/integrationsDeleteFieldMap.js";
import { integrationsDeletePriority } from "../funcs/integrationsDeletePriority.js";
import { integrationsDeleteProjectConfig } from "../funcs/integrationsDeleteProjectConfig.js";
import { integrationsDeleteStatuspageConnection } from "../funcs/integrationsDeleteStatuspageConnection.js";
import { integrationsGet } from "../funcs/integrationsGet.js";
import { integrationsGetAvailableFields } from "../funcs/integrationsGetAvailableFields.js";
import { integrationsGetFieldMapAvailableFields } from "../funcs/integrationsGetFieldMapAvailableFields.js";
import { integrationsGetProjectConfigurationOptions } from "../funcs/integrationsGetProjectConfigurationOptions.js";
import { integrationsGetProjectFieldOptions } from "../funcs/integrationsGetProjectFieldOptions.js";
import { integrationsGetStatus } from "../funcs/integrationsGetStatus.js";
import { integrationsGetStatuspageConnection } from "../funcs/integrationsGetStatuspageConnection.js";
import { integrationsGetTicket } from "../funcs/integrationsGetTicket.js";
import { integrationsList } from "../funcs/integrationsList.js";
import { integrationsListCloudtrailBatches } from "../funcs/integrationsListCloudtrailBatches.js";
import { integrationsListConnections } from "../funcs/integrationsListConnections.js";
import { integrationsListEmojiActions } from "../funcs/integrationsListEmojiActions.js";
import { integrationsListProjects } from "../funcs/integrationsListProjects.js";
import { integrationsRefreshConnection } from "../funcs/integrationsRefreshConnection.js";
import { integrationsUpdateCloudTrailBatch } from "../funcs/integrationsUpdateCloudTrailBatch.js";
import { integrationsUpdateConnection } from "../funcs/integrationsUpdateConnection.js";
import { integrationsUpdateFieldMap } from "../funcs/integrationsUpdateFieldMap.js";
import { integrationsUpdatePriority } from "../funcs/integrationsUpdatePriority.js";
import { integrationsUpdateTicketingFieldMap } from "../funcs/integrationsUpdateTicketingFieldMap.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Aws } from "./aws.js";
import { FirehydrantTypescriptSDKSlack } from "./firehydranttypescriptsdkslack.js";
import { FirehydrantTypescriptSDKStatuspage } from "./firehydranttypescriptsdkstatuspage.js";
import { FirehydrantTypescriptSDKTicketing } from "./firehydranttypescriptsdkticketing.js";

export class Integrations extends ClientSDK {
  private _aws?: Aws;
  get aws(): Aws {
    return (this._aws ??= new Aws(this._options));
  }

  private _slack?: FirehydrantTypescriptSDKSlack;
  get slack(): FirehydrantTypescriptSDKSlack {
    return (this._slack ??= new FirehydrantTypescriptSDKSlack(this._options));
  }

  private _statuspage?: FirehydrantTypescriptSDKStatuspage;
  get statuspage(): FirehydrantTypescriptSDKStatuspage {
    return (this._statuspage ??= new FirehydrantTypescriptSDKStatuspage(
      this._options,
    ));
  }

  private _ticketing?: FirehydrantTypescriptSDKTicketing;
  get ticketing(): FirehydrantTypescriptSDKTicketing {
    return (this._ticketing ??= new FirehydrantTypescriptSDKTicketing(
      this._options,
    ));
  }

  /**
   * List all available integrations
   */
  async list(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsList(
      this,
      options,
    ));
  }

  /**
   * List AWS CloudTrail batches
   *
   * @remarks
   * Lists CloudTrail batches for the authenticated organization.
   */
  async listCloudtrailBatches(
    request: operations.ListAwsCloudtrailBatchesRequest,
    options?: RequestOptions,
  ): Promise<components.IntegrationsAwsCloudtrailBatchEntityPaginated> {
    return unwrapAsync(integrationsListCloudtrailBatches(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an AWS CloudTrail batch
   *
   * @remarks
   * Update a CloudTrail batch with new information.
   */
  async updateCloudTrailBatch(
    request: operations.UpdateAwsCloudTrailBatchRequest,
    options?: RequestOptions,
  ): Promise<components.IntegrationsAwsCloudtrailBatchEntity> {
    return unwrapAsync(integrationsUpdateCloudTrailBatch(
      this,
      request,
      options,
    ));
  }

  /**
   * List integration connections
   */
  async listConnections(
    request: operations.ListIntegrationConnectionsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsListConnections(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new integration connection
   */
  async createConnection(
    request: operations.CreateIntegrationConnectionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsCreateConnection(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an integration connection
   */
  async updateConnection(
    request: operations.UpdateIntegrationConnectionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsUpdateConnection(
      this,
      request,
      options,
    ));
  }

  /**
   * Refresh an integration connection
   */
  async refreshConnection(
    request: operations.RefreshIntegrationConnectionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsRefreshConnection(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a field mapping configuration
   *
   * @remarks
   * Update field map
   */
  async updateFieldMap(
    request: operations.UpdateIntegrationFieldMapRequest,
    options?: RequestOptions,
  ): Promise<components.FieldMappingFieldMapEntity> {
    return unwrapAsync(integrationsUpdateFieldMap(
      this,
      request,
      options,
    ));
  }

  /**
   * List available fields for field mapping
   *
   * @remarks
   * Get a description of the fields to which data can be mapped
   */
  async getFieldMapAvailableFields(
    request: operations.GetIntegrationFieldMapAvailableFieldsRequest,
    options?: RequestOptions,
  ): Promise<components.FieldMappingMappableFieldEntity> {
    return unwrapAsync(integrationsGetFieldMapAvailableFields(
      this,
      request,
      options,
    ));
  }

  /**
   * List Slack emoji actions
   *
   * @remarks
   * Lists all slack emoji actions
   */
  async listEmojiActions(
    request: operations.ListSlackEmojiActionsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsListEmojiActions(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an integration status
   */
  async getStatus(
    request: operations.GetIntegrationStatusRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsGetStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a Statuspage connection
   *
   * @remarks
   * Retrieve the information about the Statuspage connection.
   */
  async getStatuspageConnection(
    request: operations.GetStatuspageConnectionRequest,
    options?: RequestOptions,
  ): Promise<components.IntegrationsStatuspageConnectionEntity> {
    return unwrapAsync(integrationsGetStatuspageConnection(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Statuspage connection
   *
   * @remarks
   * Deletes the given Statuspage integration connection.
   */
  async deleteStatuspageConnection(
    request: operations.DeleteStatuspageConnectionRequest,
    options?: RequestOptions,
  ): Promise<components.IntegrationsStatuspageConnectionEntity> {
    return unwrapAsync(integrationsDeleteStatuspageConnection(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an integration
   *
   * @remarks
   * Retrieve a single integration
   */
  async get(
    request: operations.GetIntegrationRequest,
    options?: RequestOptions,
  ): Promise<components.IntegrationsIntegrationEntity> {
    return unwrapAsync(integrationsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a ticketing priority
   *
   * @remarks
   * Delete a single ticketing priority by ID
   */
  async deletePriority(
    request: operations.DeleteTicketingPriorityRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingPriorityEntity> {
    return unwrapAsync(integrationsDeletePriority(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a ticketing priority
   *
   * @remarks
   * Update a single ticketing priority's attributes
   */
  async updatePriority(
    request: operations.UpdateTicketingPriorityRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingPriorityEntity> {
    return unwrapAsync(integrationsUpdatePriority(
      this,
      request,
      options,
    ));
  }

  /**
   * List ticketing projects
   *
   * @remarks
   * List all ticketing projects available to the organization
   */
  async listProjects(
    request: operations.ListTicketingProjectsRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingProjectsProjectListItemEntity> {
    return unwrapAsync(integrationsListProjects(
      this,
      request,
      options,
    ));
  }

  /**
   * List configuration options for a ticketing project
   */
  async getProjectConfigurationOptions(
    request: operations.GetTicketingProjectConfigurationOptionsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsGetProjectConfigurationOptions(
      this,
      request,
      options,
    ));
  }

  /**
   * List configuration options for a ticketing project field
   */
  async getProjectFieldOptions(
    request: operations.GetTicketingProjectFieldOptionsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsGetProjectFieldOptions(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a field mapping for a ticketing project
   *
   * @remarks
   * Creates field map for a ticketing project
   */
  async createFieldMap(
    request: operations.CreateTicketingProjectFieldMapRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingProjectFieldMapEntity> {
    return unwrapAsync(integrationsCreateFieldMap(
      this,
      request,
      options,
    ));
  }

  /**
   * List available fields for ticket field mapping
   *
   * @remarks
   * Returns metadata for the fields that are available for field mapping.
   */
  async getAvailableFields(
    request: operations.GetTicketingProjectAvailableFieldsRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingFieldMapsMappableFieldEntity> {
    return unwrapAsync(integrationsGetAvailableFields(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a field map for a ticketing project
   *
   * @remarks
   * Archive field map for a ticketing project
   */
  async deleteFieldMap(
    request: operations.DeleteTicketingProjectFieldMapRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(integrationsDeleteFieldMap(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a field map for a ticketing project
   *
   * @remarks
   * Update field map for a ticketing project
   */
  async updateTicketingFieldMap(
    request: operations.UpdateTicketingProjectFieldMapRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingProjectFieldMapEntity> {
    return unwrapAsync(integrationsUpdateTicketingFieldMap(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a ticketing project configuration
   *
   * @remarks
   * Archive configuration for a ticketing project
   */
  async deleteProjectConfig(
    request: operations.DeleteTicketingProjectConfigRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingProjectConfigEntity> {
    return unwrapAsync(integrationsDeleteProjectConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a ticket
   *
   * @remarks
   * Retrieves a single ticket by ID
   */
  async getTicket(
    request: operations.GetTicketRequest,
    options?: RequestOptions,
  ): Promise<components.TicketingTicketEntity> {
    return unwrapAsync(integrationsGetTicket(
      this,
      request,
      options,
    ));
  }
}
