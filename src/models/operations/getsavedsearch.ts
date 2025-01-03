/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetSavedSearchPathParamResourceType = {
  ChangeEvents: "change_events",
  Incidents: "incidents",
  Services: "services",
  ScheduledMaintenances: "scheduled_maintenances",
  TicketTasks: "ticket_tasks",
  TicketFollowUps: "ticket_follow_ups",
  Analytics: "analytics",
  ImpactAnalytics: "impact_analytics",
  Alerts: "alerts",
  IncidentEvents: "incident_events",
} as const;
export type GetSavedSearchPathParamResourceType = ClosedEnum<
  typeof GetSavedSearchPathParamResourceType
>;

export type GetSavedSearchRequest = {
  resourceType: GetSavedSearchPathParamResourceType;
  savedSearchId: string;
};

/** @internal */
export const GetSavedSearchPathParamResourceType$inboundSchema: z.ZodNativeEnum<
  typeof GetSavedSearchPathParamResourceType
> = z.nativeEnum(GetSavedSearchPathParamResourceType);

/** @internal */
export const GetSavedSearchPathParamResourceType$outboundSchema:
  z.ZodNativeEnum<typeof GetSavedSearchPathParamResourceType> =
    GetSavedSearchPathParamResourceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSavedSearchPathParamResourceType$ {
  /** @deprecated use `GetSavedSearchPathParamResourceType$inboundSchema` instead. */
  export const inboundSchema =
    GetSavedSearchPathParamResourceType$inboundSchema;
  /** @deprecated use `GetSavedSearchPathParamResourceType$outboundSchema` instead. */
  export const outboundSchema =
    GetSavedSearchPathParamResourceType$outboundSchema;
}

/** @internal */
export const GetSavedSearchRequest$inboundSchema: z.ZodType<
  GetSavedSearchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource_type: GetSavedSearchPathParamResourceType$inboundSchema,
  saved_search_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "resource_type": "resourceType",
    "saved_search_id": "savedSearchId",
  });
});

/** @internal */
export type GetSavedSearchRequest$Outbound = {
  resource_type: string;
  saved_search_id: string;
};

/** @internal */
export const GetSavedSearchRequest$outboundSchema: z.ZodType<
  GetSavedSearchRequest$Outbound,
  z.ZodTypeDef,
  GetSavedSearchRequest
> = z.object({
  resourceType: GetSavedSearchPathParamResourceType$outboundSchema,
  savedSearchId: z.string(),
}).transform((v) => {
  return remap$(v, {
    resourceType: "resource_type",
    savedSearchId: "saved_search_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSavedSearchRequest$ {
  /** @deprecated use `GetSavedSearchRequest$inboundSchema` instead. */
  export const inboundSchema = GetSavedSearchRequest$inboundSchema;
  /** @deprecated use `GetSavedSearchRequest$outboundSchema` instead. */
  export const outboundSchema = GetSavedSearchRequest$outboundSchema;
  /** @deprecated use `GetSavedSearchRequest$Outbound` instead. */
  export type Outbound = GetSavedSearchRequest$Outbound;
}

export function getSavedSearchRequestToJSON(
  getSavedSearchRequest: GetSavedSearchRequest,
): string {
  return JSON.stringify(
    GetSavedSearchRequest$outboundSchema.parse(getSavedSearchRequest),
  );
}

export function getSavedSearchRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetSavedSearchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSavedSearchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSavedSearchRequest' from JSON`,
  );
}
