/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { incidentSettingsArchiveIncidentType } from "../funcs/incidentSettingsArchiveIncidentType.js";
import { incidentSettingsCreateCustomFieldDefinition } from "../funcs/incidentSettingsCreateCustomFieldDefinition.js";
import { incidentSettingsCreateImpact } from "../funcs/incidentSettingsCreateImpact.js";
import { incidentSettingsCreateIncidentRole } from "../funcs/incidentSettingsCreateIncidentRole.js";
import { incidentSettingsCreateIncidentType } from "../funcs/incidentSettingsCreateIncidentType.js";
import { incidentSettingsCreateMilestone } from "../funcs/incidentSettingsCreateMilestone.js";
import { incidentSettingsCreatePriority } from "../funcs/incidentSettingsCreatePriority.js";
import { incidentSettingsCreateSeverity } from "../funcs/incidentSettingsCreateSeverity.js";
import { incidentSettingsCreateSeverityMatrixCondition } from "../funcs/incidentSettingsCreateSeverityMatrixCondition.js";
import { incidentSettingsCreateTicketingPriority } from "../funcs/incidentSettingsCreateTicketingPriority.js";
import { incidentSettingsDeleteCustomFieldDefinition } from "../funcs/incidentSettingsDeleteCustomFieldDefinition.js";
import { incidentSettingsDeleteLifecycleMilestone } from "../funcs/incidentSettingsDeleteLifecycleMilestone.js";
import { incidentSettingsDeletePriority } from "../funcs/incidentSettingsDeletePriority.js";
import { incidentSettingsDeleteRole } from "../funcs/incidentSettingsDeleteRole.js";
import { incidentSettingsDeleteSeverity } from "../funcs/incidentSettingsDeleteSeverity.js";
import { incidentSettingsDeleteSeverityMatrixCondition } from "../funcs/incidentSettingsDeleteSeverityMatrixCondition.js";
import { incidentSettingsDeleteSeverityMatrixImpact } from "../funcs/incidentSettingsDeleteSeverityMatrixImpact.js";
import { incidentSettingsGetFormConfiguration } from "../funcs/incidentSettingsGetFormConfiguration.js";
import { incidentSettingsGetIncidentRole } from "../funcs/incidentSettingsGetIncidentRole.js";
import { incidentSettingsGetIncidentType } from "../funcs/incidentSettingsGetIncidentType.js";
import { incidentSettingsGetPriority } from "../funcs/incidentSettingsGetPriority.js";
import { incidentSettingsGetSeverity } from "../funcs/incidentSettingsGetSeverity.js";
import { incidentSettingsGetSeverityMatrix } from "../funcs/incidentSettingsGetSeverityMatrix.js";
import { incidentSettingsGetSeverityMatrixCondition } from "../funcs/incidentSettingsGetSeverityMatrixCondition.js";
import { incidentSettingsListCustomFieldDefinitions } from "../funcs/incidentSettingsListCustomFieldDefinitions.js";
import { incidentSettingsListIncidentTags } from "../funcs/incidentSettingsListIncidentTags.js";
import { incidentSettingsListIncidentTypes } from "../funcs/incidentSettingsListIncidentTypes.js";
import { incidentSettingsListLifecyclePhases } from "../funcs/incidentSettingsListLifecyclePhases.js";
import { incidentSettingsListPriorities } from "../funcs/incidentSettingsListPriorities.js";
import { incidentSettingsListRoles } from "../funcs/incidentSettingsListRoles.js";
import { incidentSettingsListSelectOptions } from "../funcs/incidentSettingsListSelectOptions.js";
import { incidentSettingsListSeverities } from "../funcs/incidentSettingsListSeverities.js";
import { incidentSettingsListSeverityMatrixConditions } from "../funcs/incidentSettingsListSeverityMatrixConditions.js";
import { incidentSettingsListSeverityMatrixImpacts } from "../funcs/incidentSettingsListSeverityMatrixImpacts.js";
import { incidentSettingsListTicketingPriorities } from "../funcs/incidentSettingsListTicketingPriorities.js";
import { incidentSettingsUpdateCondition } from "../funcs/incidentSettingsUpdateCondition.js";
import { incidentSettingsUpdateCustomFieldDefinition } from "../funcs/incidentSettingsUpdateCustomFieldDefinition.js";
import { incidentSettingsUpdateImpact } from "../funcs/incidentSettingsUpdateImpact.js";
import { incidentSettingsUpdateIncidentRole } from "../funcs/incidentSettingsUpdateIncidentRole.js";
import { incidentSettingsUpdateLifecycleMilestone } from "../funcs/incidentSettingsUpdateLifecycleMilestone.js";
import { incidentSettingsUpdatePriority } from "../funcs/incidentSettingsUpdatePriority.js";
import { incidentSettingsUpdateSeverity } from "../funcs/incidentSettingsUpdateSeverity.js";
import { incidentSettingsUpdateSeverityMatrix } from "../funcs/incidentSettingsUpdateSeverityMatrix.js";
import { incidentSettingsUpdateType } from "../funcs/incidentSettingsUpdateType.js";
import { incidentSettingsValidateIncidentTags } from "../funcs/incidentSettingsValidateIncidentTags.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class IncidentSettings extends ClientSDK {
  /**
   * List custom field definitions
   *
   * @remarks
   * List all custom field definitions
   */
  async listCustomFieldDefinitions(
    options?: RequestOptions,
  ): Promise<components.OrganizationsCustomFieldDefinitionEntity> {
    return unwrapAsync(incidentSettingsListCustomFieldDefinitions(
      this,
      options,
    ));
  }

  /**
   * Create a custom field definition
   *
   * @remarks
   * Create a new custom field definition
   */
  async createCustomFieldDefinition(
    request: components.PostV1CustomFieldsDefinitions,
    options?: RequestOptions,
  ): Promise<components.OrganizationsCustomFieldDefinitionEntity> {
    return unwrapAsync(incidentSettingsCreateCustomFieldDefinition(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a custom field definition
   *
   * @remarks
   * Delete a custom field definition
   */
  async deleteCustomFieldDefinition(
    request: operations.DeleteCustomFieldDefinitionRequest,
    options?: RequestOptions,
  ): Promise<components.OrganizationsCustomFieldDefinitionEntity> {
    return unwrapAsync(incidentSettingsDeleteCustomFieldDefinition(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a custom field definition
   *
   * @remarks
   * Update a single custom field definition
   */
  async updateCustomFieldDefinition(
    request: operations.UpdateCustomFieldDefinitionRequest,
    options?: RequestOptions,
  ): Promise<components.OrganizationsCustomFieldDefinitionEntity> {
    return unwrapAsync(incidentSettingsUpdateCustomFieldDefinition(
      this,
      request,
      options,
    ));
  }

  /**
   * List select options for a custom field
   *
   * @remarks
   * Get the permissible values for the a currently active custom select or multi-select field.
   */
  async listSelectOptions(
    request: operations.GetCustomFieldSelectOptionsRequest,
    options?: RequestOptions,
  ): Promise<components.OrganizationsCustomFieldDefinitionEntity> {
    return unwrapAsync(incidentSettingsListSelectOptions(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a form configuration
   */
  async getFormConfiguration(
    request: operations.GetFormConfigurationRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(incidentSettingsGetFormConfiguration(
      this,
      request,
      options,
    ));
  }

  /**
   * List incident roles
   *
   * @remarks
   * List all of the incident roles in the organization
   */
  async listRoles(
    request: operations.ListIncidentRolesRequest,
    options?: RequestOptions,
  ): Promise<components.IncidentRoleEntityPaginated> {
    return unwrapAsync(incidentSettingsListRoles(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an incident role
   *
   * @remarks
   * Create a new incident role
   */
  async createIncidentRole(
    request: components.PostV1IncidentRoles,
    options?: RequestOptions,
  ): Promise<components.IncidentRoleEntity> {
    return unwrapAsync(incidentSettingsCreateIncidentRole(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an incident role
   *
   * @remarks
   * Retrieve a single incident role from its ID
   */
  async getIncidentRole(
    request: operations.GetIncidentRoleRequest,
    options?: RequestOptions,
  ): Promise<components.IncidentRoleEntity> {
    return unwrapAsync(incidentSettingsGetIncidentRole(
      this,
      request,
      options,
    ));
  }

  /**
   * Archive an incident role
   *
   * @remarks
   * Archives an incident role which will hide it from lists and metrics
   */
  async deleteRole(
    request: operations.DeleteIncidentRoleRequest,
    options?: RequestOptions,
  ): Promise<components.IncidentRoleEntity> {
    return unwrapAsync(incidentSettingsDeleteRole(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an incident role
   *
   * @remarks
   * Update a single incident role from its ID
   */
  async updateIncidentRole(
    request: operations.UpdateIncidentRoleRequest,
    options?: RequestOptions,
  ): Promise<components.IncidentRoleEntity> {
    return unwrapAsync(incidentSettingsUpdateIncidentRole(
      this,
      request,
      options,
    ));
  }

  /**
   * List incident tags
   *
   * @remarks
   * List all of the incident tags in the organization
   */
  async listIncidentTags(
    request: operations.ListIncidentTagsRequest,
    options?: RequestOptions,
  ): Promise<components.TagEntityPaginated> {
    return unwrapAsync(incidentSettingsListIncidentTags(
      this,
      request,
      options,
    ));
  }

  /**
   * Validate incident tags
   *
   * @remarks
   * Validate the format of a list of tags
   */
  async validateIncidentTags(
    request: Array<string>,
    options?: RequestOptions,
  ): Promise<components.TagEntity> {
    return unwrapAsync(incidentSettingsValidateIncidentTags(
      this,
      request,
      options,
    ));
  }

  /**
   * List incident types
   *
   * @remarks
   * List all of the incident types in the organization
   */
  async listIncidentTypes(
    request: operations.ListIncidentTypesRequest,
    options?: RequestOptions,
  ): Promise<components.IncidentTypeEntityPaginated> {
    return unwrapAsync(incidentSettingsListIncidentTypes(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an incident type
   *
   * @remarks
   * Create a new incident type
   */
  async createIncidentType(
    request: components.PostV1IncidentTypes,
    options?: RequestOptions,
  ): Promise<components.IncidentTypeEntity> {
    return unwrapAsync(incidentSettingsCreateIncidentType(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an incident type
   *
   * @remarks
   * Retrieve a single incident type from its ID
   */
  async getIncidentType(
    request: operations.GetIncidentTypeRequest,
    options?: RequestOptions,
  ): Promise<components.IncidentTypeEntity> {
    return unwrapAsync(incidentSettingsGetIncidentType(
      this,
      request,
      options,
    ));
  }

  /**
   * Archive an incident type
   *
   * @remarks
   * Archives an incident type which will hide it from lists and metrics
   */
  async archiveIncidentType(
    request: operations.ArchiveIncidentTypeRequest,
    options?: RequestOptions,
  ): Promise<components.IncidentTypeEntity> {
    return unwrapAsync(incidentSettingsArchiveIncidentType(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an incident type
   *
   * @remarks
   * Update a single incident type from its ID
   */
  async updateType(
    request: operations.UpdateIncidentTypeRequest,
    options?: RequestOptions,
  ): Promise<components.IncidentTypeEntity> {
    return unwrapAsync(incidentSettingsUpdateType(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a milestone for an incident lifecycle
   *
   * @remarks
   * Create a new milestone
   */
  async createMilestone(
    request: operations.CreateLifecycleMilestoneRequestBody,
    options?: RequestOptions,
  ): Promise<components.LifecyclesPhaseEntityList> {
    return unwrapAsync(incidentSettingsCreateMilestone(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a lifecycle milestone
   *
   * @remarks
   * Delete a milestone
   */
  async deleteLifecycleMilestone(
    request: operations.DeleteLifecycleMilestoneRequest,
    options?: RequestOptions,
  ): Promise<components.LifecyclesPhaseEntity> {
    return unwrapAsync(incidentSettingsDeleteLifecycleMilestone(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a lifecycle milestone
   *
   * @remarks
   * Update a milestone
   */
  async updateLifecycleMilestone(
    request: operations.UpdateLifecycleMilestoneRequest,
    options?: RequestOptions,
  ): Promise<components.LifecyclesPhaseEntity> {
    return unwrapAsync(incidentSettingsUpdateLifecycleMilestone(
      this,
      request,
      options,
    ));
  }

  /**
   * List lifecycle phases and milestones
   *
   * @remarks
   * List all of the lifecycle phases and milestones in the organization
   */
  async listLifecyclePhases(
    options?: RequestOptions,
  ): Promise<components.LifecyclesPhaseEntityList> {
    return unwrapAsync(incidentSettingsListLifecyclePhases(
      this,
      options,
    ));
  }

  /**
   * List priorities
   *
   * @remarks
   * Lists priorities
   */
  async listPriorities(
    request: operations.ListPrioritiesRequest,
    options?: RequestOptions,
  ): Promise<components.PriorityEntity> {
    return unwrapAsync(incidentSettingsListPriorities(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a priority
   *
   * @remarks
   * Create a new priority
   */
  async createPriority(
    request: components.PostV1Priorities,
    options?: RequestOptions,
  ): Promise<components.PriorityEntity> {
    return unwrapAsync(incidentSettingsCreatePriority(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a priority
   *
   * @remarks
   * Retrieve a specific priority
   */
  async getPriority(
    request: operations.GetPriorityRequest,
    options?: RequestOptions,
  ): Promise<components.PriorityEntity> {
    return unwrapAsync(incidentSettingsGetPriority(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a priority
   *
   * @remarks
   * Delete a specific priority
   */
  async deletePriority(
    request: operations.DeletePriorityRequest,
    options?: RequestOptions,
  ): Promise<components.PriorityEntity> {
    return unwrapAsync(incidentSettingsDeletePriority(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a priority
   *
   * @remarks
   * Update a specific priority
   */
  async updatePriority(
    request: operations.UpdatePriorityRequest,
    options?: RequestOptions,
  ): Promise<components.PriorityEntity> {
    return unwrapAsync(incidentSettingsUpdatePriority(
      this,
      request,
      options,
    ));
  }

  /**
   * List severities
   *
   * @remarks
   * Lists severities
   */
  async listSeverities(
    request: operations.ListSeveritiesRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityEntityPaginated> {
    return unwrapAsync(incidentSettingsListSeverities(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a severity
   *
   * @remarks
   * Create a new severity
   */
  async createSeverity(
    request: components.PostV1Severities,
    options?: RequestOptions,
  ): Promise<components.SeverityEntity> {
    return unwrapAsync(incidentSettingsCreateSeverity(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a severity
   *
   * @remarks
   * Retrieve a specific severity
   */
  async getSeverity(
    request: operations.GetSeverityRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityEntity> {
    return unwrapAsync(incidentSettingsGetSeverity(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a severity
   *
   * @remarks
   * Delete a specific severity
   */
  async deleteSeverity(
    request: operations.DeleteSeverityRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityEntity> {
    return unwrapAsync(incidentSettingsDeleteSeverity(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a severity
   *
   * @remarks
   * Update a specific severity
   */
  async updateSeverity(
    request: operations.UpdateSeverityRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityEntity> {
    return unwrapAsync(incidentSettingsUpdateSeverity(
      this,
      request,
      options,
    ));
  }

  /**
   * Get severity matrix
   *
   * @remarks
   * Retrieve the Severity matrix for your organization and its components and configured severities.
   */
  async getSeverityMatrix(
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixSeverityMatrixEntity> {
    return unwrapAsync(incidentSettingsGetSeverityMatrix(
      this,
      options,
    ));
  }

  /**
   * Update severity matrix
   *
   * @remarks
   * Update available severities and impacts in your organization's severity matrix.
   */
  async updateSeverityMatrix(
    request: components.PatchV1SeverityMatrix,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixSeverityMatrixEntity> {
    return unwrapAsync(incidentSettingsUpdateSeverityMatrix(
      this,
      request,
      options,
    ));
  }

  /**
   * List severity matrix conditions
   *
   * @remarks
   * Lists conditions
   */
  async listSeverityMatrixConditions(
    request: operations.ListSeverityMatrixConditionsRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixConditionEntity> {
    return unwrapAsync(incidentSettingsListSeverityMatrixConditions(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a severity matrix condition
   *
   * @remarks
   * Create a new condition
   */
  async createSeverityMatrixCondition(
    request: components.PostV1SeverityMatrixConditions,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixConditionEntity> {
    return unwrapAsync(incidentSettingsCreateSeverityMatrixCondition(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a severity matrix condition
   */
  async getSeverityMatrixCondition(
    request: operations.GetSeverityMatrixConditionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(incidentSettingsGetSeverityMatrixCondition(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a severity matrix condition
   *
   * @remarks
   * Delete a specific condition
   */
  async deleteSeverityMatrixCondition(
    request: operations.DeleteSeverityMatrixConditionRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixConditionEntity> {
    return unwrapAsync(incidentSettingsDeleteSeverityMatrixCondition(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a severity matrix condition
   *
   * @remarks
   * Update a specific condition
   */
  async updateCondition(
    request: operations.UpdateSeverityMatrixConditionRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixConditionEntity> {
    return unwrapAsync(incidentSettingsUpdateCondition(
      this,
      request,
      options,
    ));
  }

  /**
   * List severity matrix impacts
   *
   * @remarks
   * Lists impacts
   */
  async listSeverityMatrixImpacts(
    request: operations.ListSeverityMatrixImpactsRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixImpactEntity> {
    return unwrapAsync(incidentSettingsListSeverityMatrixImpacts(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a severity matrix impact
   *
   * @remarks
   * Create a new impact
   */
  async createImpact(
    request: components.PostV1SeverityMatrixImpacts,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixImpactEntity> {
    return unwrapAsync(incidentSettingsCreateImpact(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an impact from the severity matrix
   *
   * @remarks
   * Delete a specific impact
   */
  async deleteSeverityMatrixImpact(
    request: operations.DeleteSeverityMatrixImpactRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixImpactEntity> {
    return unwrapAsync(incidentSettingsDeleteSeverityMatrixImpact(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an impact in the severity matrix
   *
   * @remarks
   * Update a specific impact
   */
  async updateImpact(
    request: operations.UpdateSeverityMatrixImpactRequest,
    options?: RequestOptions,
  ): Promise<components.SeverityMatrixImpactEntity> {
    return unwrapAsync(incidentSettingsUpdateImpact(
      this,
      request,
      options,
    ));
  }

  /**
   * List ticketing priorities
   *
   * @remarks
   * List all ticketing priorities available to the organization
   */
  async listTicketingPriorities(
    options?: RequestOptions,
  ): Promise<components.TicketingPriorityEntity> {
    return unwrapAsync(incidentSettingsListTicketingPriorities(
      this,
      options,
    ));
  }

  /**
   * Create a ticketing priority
   *
   * @remarks
   * Create a single ticketing priority
   */
  async createTicketingPriority(
    request: components.PostV1TicketingPriorities,
    options?: RequestOptions,
  ): Promise<components.TicketingPriorityEntity> {
    return unwrapAsync(incidentSettingsCreateTicketingPriority(
      this,
      request,
      options,
    ));
  }
}
