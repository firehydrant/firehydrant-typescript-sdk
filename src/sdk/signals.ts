/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { signalsCreateEmailTarget } from "../funcs/signalsCreateEmailTarget.js";
import { signalsCreateRule } from "../funcs/signalsCreateRule.js";
import { signalsCreateWebhookTarget } from "../funcs/signalsCreateWebhookTarget.js";
import { signalsDebug } from "../funcs/signalsDebug.js";
import { signalsDeleteEmailTarget } from "../funcs/signalsDeleteEmailTarget.js";
import { signalsDeleteEscalationPolicy } from "../funcs/signalsDeleteEscalationPolicy.js";
import { signalsDeleteRule } from "../funcs/signalsDeleteRule.js";
import { signalsDeleteWebhookTarget } from "../funcs/signalsDeleteWebhookTarget.js";
import { signalsGetAnalyticsTimeseries } from "../funcs/signalsGetAnalyticsTimeseries.js";
import { signalsGetEmailTarget } from "../funcs/signalsGetEmailTarget.js";
import { signalsGetIngestUrl } from "../funcs/signalsGetIngestUrl.js";
import { signalsGetMttxAnalytics } from "../funcs/signalsGetMttxAnalytics.js";
import { signalsGetOnCallSchedule } from "../funcs/signalsGetOnCallSchedule.js";
import { signalsGetRule } from "../funcs/signalsGetRule.js";
import { signalsGetWebhookTarget } from "../funcs/signalsGetWebhookTarget.js";
import { signalsListEmailTargets } from "../funcs/signalsListEmailTargets.js";
import { signalsListEscalationPolicies } from "../funcs/signalsListEscalationPolicies.js";
import { signalsListEventSources } from "../funcs/signalsListEventSources.js";
import { signalsListGroupedMetrics } from "../funcs/signalsListGroupedMetrics.js";
import { signalsListOnCall } from "../funcs/signalsListOnCall.js";
import { signalsListRules } from "../funcs/signalsListRules.js";
import { signalsListTransposers } from "../funcs/signalsListTransposers.js";
import { signalsListWebhookTargets } from "../funcs/signalsListWebhookTargets.js";
import { signalsUpdateEmailTarget } from "../funcs/signalsUpdateEmailTarget.js";
import { signalsUpdateOnCallSchedule } from "../funcs/signalsUpdateOnCallSchedule.js";
import { signalsUpdateRule } from "../funcs/signalsUpdateRule.js";
import { signalsUpdateWebhookTarget } from "../funcs/signalsUpdateWebhookTarget.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { FirehydrantTypescriptSDKSignalsTeams } from "./firehydranttypescriptsdksignalsteams.js";

export class Signals extends ClientSDK {
  private _teams?: FirehydrantTypescriptSDKSignalsTeams;
  get teams(): FirehydrantTypescriptSDKSignalsTeams {
    return (this._teams ??= new FirehydrantTypescriptSDKSignalsTeams(
      this._options,
    ));
  }

  /**
   * List grouped signal alert metrics
   *
   * @remarks
   * Generate a report of grouped metrics for Signals alerts
   */
  async listGroupedMetrics(
    request: operations.GetSignalGroupedMetricsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsListGroupedMetrics(
      this,
      request,
      options,
    ));
  }

  /**
   * Get MTTX analytics for signals
   *
   * @remarks
   * Get mean-time-to-acknowledged (MTTA) and mean-time-to-resolved (MTTR) metrics for Signals alerts
   */
  async getMttxAnalytics(
    request: operations.GetSignalsMttxAnalyticsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsGetMttxAnalytics(
      this,
      request,
      options,
    ));
  }

  /**
   * List timeseries metrics for signal alerts
   *
   * @remarks
   * Generate a timeseries-based report of metrics for Signals alerts
   */
  async getAnalyticsTimeseries(
    request: operations.GetSignalsAnalyticsTimeseriesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsGetAnalyticsTimeseries(
      this,
      request,
      options,
    ));
  }

  /**
   * Debug a signal
   */
  async debug(
    request: components.PostV1SignalsDebugger,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsDebug(
      this,
      request,
      options,
    ));
  }

  /**
   * List email targets for signals
   *
   * @remarks
   * List all Signals email targets for a team.
   */
  async listEmailTargets(
    request: operations.ListSignalEmailTargetsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsListEmailTargets(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an email target for signals
   *
   * @remarks
   * Create a Signals email target for a team.
   */
  async createEmailTarget(
    request: components.PostV1SignalsEmailTargets,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsCreateEmailTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a signal email target
   *
   * @remarks
   * Get a Signals email target by ID
   */
  async getEmailTarget(
    request: operations.GetSignalEmailTargetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsGetEmailTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a signal email target
   *
   * @remarks
   * Delete a Signals email target by ID
   */
  async deleteEmailTarget(
    request: operations.DeleteSignalEmailTargetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsDeleteEmailTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a signal email target
   *
   * @remarks
   * Update a Signals email target by ID
   */
  async updateEmailTarget(
    request: operations.UpdateSignalEmailTargetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsUpdateEmailTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * List event sources for signals
   */
  async listEventSources(
    request: operations.ListSignalEventSourcesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsListEventSources(
      this,
      request,
      options,
    ));
  }

  /**
   * Get signal ingestion URL
   *
   * @remarks
   * Retrieve the url for ingesting signals for your organization
   */
  async getIngestUrl(
    request: operations.GetSignalIngestUrlRequest,
    options?: RequestOptions,
  ): Promise<components.SignalsAPIIngestKeyEntity> {
    return unwrapAsync(signalsGetIngestUrl(
      this,
      request,
      options,
    ));
  }

  /**
   * List signal transposers
   */
  async listTransposers(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsListTransposers(
      this,
      options,
    ));
  }

  /**
   * List webhook targets for signals
   *
   * @remarks
   * List all Signals webhook targets.
   */
  async listWebhookTargets(
    request: operations.ListSignalWebhookTargetsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsListWebhookTargets(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a webhook target for signals
   *
   * @remarks
   * Create a Signals webhook target.
   */
  async createWebhookTarget(
    request: components.PostV1SignalsWebhookTargets,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsCreateWebhookTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a webhook target
   *
   * @remarks
   * Get a Signals webhook target by ID
   */
  async getWebhookTarget(
    request: operations.GetSignalsWebhookTargetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsGetWebhookTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a webhook target
   *
   * @remarks
   * Delete a Signals webhook target by ID
   */
  async deleteWebhookTarget(
    request: operations.DeleteSignalsWebhookTargetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsDeleteWebhookTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a webhook target
   *
   * @remarks
   * Update a Signals webhook target by ID
   */
  async updateWebhookTarget(
    request: operations.UpdateSignalsWebhookTargetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsUpdateWebhookTarget(
      this,
      request,
      options,
    ));
  }

  /**
   * List on-call schedules
   *
   * @remarks
   * List all Signals on-call schedules for the entire organization.
   */
  async listOnCall(
    request: operations.ListSignalsOnCallRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsListOnCall(
      this,
      request,
      options,
    ));
  }

  /**
   * List escalation policies for a team
   *
   * @remarks
   * List all Signals escalation policies for a team.
   */
  async listEscalationPolicies(
    request: operations.ListTeamEscalationPoliciesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsListEscalationPolicies(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an escalation policy for a team
   *
   * @remarks
   * Delete a Signals escalation policy by ID
   */
  async deleteEscalationPolicy(
    request: operations.DeleteTeamEscalationPolicyRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsDeleteEscalationPolicy(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an on-call schedule for a team
   *
   * @remarks
   * Get a Signals on-call schedule by ID
   */
  async getOnCallSchedule(
    request: operations.GetTeamOnCallScheduleRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsGetOnCallSchedule(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an on-call schedule for a team
   *
   * @remarks
   * Update a Signals on-call schedule by ID
   */
  async updateOnCallSchedule(
    request: operations.UpdateTeamOnCallScheduleRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsUpdateOnCallSchedule(
      this,
      request,
      options,
    ));
  }

  /**
   * List signal rules for a team
   *
   * @remarks
   * List all Signals rules for a team.
   */
  async listRules(
    request: operations.ListTeamSignalRulesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsListRules(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a signal rule for a team
   *
   * @remarks
   * Create a Signals rule for a team.
   */
  async createRule(
    request: operations.CreateTeamSignalRuleRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsCreateRule(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a signal rule
   *
   * @remarks
   * Get a Signals rule by ID.
   */
  async getRule(
    request: operations.GetTeamSignalRuleRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsGetRule(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a signal rule
   *
   * @remarks
   * Delete a Signals rule by ID
   */
  async deleteRule(
    request: operations.DeleteTeamSignalRuleRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsDeleteRule(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a signal rule
   *
   * @remarks
   * Update a Signals rule by ID
   */
  async updateRule(
    request: operations.UpdateTeamSignalRuleRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(signalsUpdateRule(
      this,
      request,
      options,
    ));
  }
}
