/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Key:value pairs to track custom data for the incident
 */
export type PatchV1IncidentsIncidentIdLabels = {};

/**
 * Updates an incident with provided parameters
 */
export type PatchV1IncidentsIncidentId = {
  name?: string | undefined;
  summary?: string | undefined;
  customerImpactSummary?: string | undefined;
  description?: string | undefined;
  /**
   * Key:value pairs to track custom data for the incident
   */
  labels?: PatchV1IncidentsIncidentIdLabels | undefined;
  priority?: string | undefined;
  severity?: string | undefined;
  severityConditionId?: string | undefined;
  severityImpactId?: string | undefined;
  /**
   * List of tags for the incident
   */
  tagList?: Array<string> | undefined;
};

/** @internal */
export const PatchV1IncidentsIncidentIdLabels$inboundSchema: z.ZodType<
  PatchV1IncidentsIncidentIdLabels,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PatchV1IncidentsIncidentIdLabels$Outbound = {};

/** @internal */
export const PatchV1IncidentsIncidentIdLabels$outboundSchema: z.ZodType<
  PatchV1IncidentsIncidentIdLabels$Outbound,
  z.ZodTypeDef,
  PatchV1IncidentsIncidentIdLabels
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1IncidentsIncidentIdLabels$ {
  /** @deprecated use `PatchV1IncidentsIncidentIdLabels$inboundSchema` instead. */
  export const inboundSchema = PatchV1IncidentsIncidentIdLabels$inboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdLabels$outboundSchema` instead. */
  export const outboundSchema = PatchV1IncidentsIncidentIdLabels$outboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdLabels$Outbound` instead. */
  export type Outbound = PatchV1IncidentsIncidentIdLabels$Outbound;
}

export function patchV1IncidentsIncidentIdLabelsToJSON(
  patchV1IncidentsIncidentIdLabels: PatchV1IncidentsIncidentIdLabels,
): string {
  return JSON.stringify(
    PatchV1IncidentsIncidentIdLabels$outboundSchema.parse(
      patchV1IncidentsIncidentIdLabels,
    ),
  );
}

export function patchV1IncidentsIncidentIdLabelsFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1IncidentsIncidentIdLabels, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV1IncidentsIncidentIdLabels$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1IncidentsIncidentIdLabels' from JSON`,
  );
}

/** @internal */
export const PatchV1IncidentsIncidentId$inboundSchema: z.ZodType<
  PatchV1IncidentsIncidentId,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  summary: z.string().optional(),
  customer_impact_summary: z.string().optional(),
  description: z.string().optional(),
  labels: z.lazy(() => PatchV1IncidentsIncidentIdLabels$inboundSchema)
    .optional(),
  priority: z.string().optional(),
  severity: z.string().optional(),
  severity_condition_id: z.string().optional(),
  severity_impact_id: z.string().optional(),
  tag_list: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "customer_impact_summary": "customerImpactSummary",
    "severity_condition_id": "severityConditionId",
    "severity_impact_id": "severityImpactId",
    "tag_list": "tagList",
  });
});

/** @internal */
export type PatchV1IncidentsIncidentId$Outbound = {
  name?: string | undefined;
  summary?: string | undefined;
  customer_impact_summary?: string | undefined;
  description?: string | undefined;
  labels?: PatchV1IncidentsIncidentIdLabels$Outbound | undefined;
  priority?: string | undefined;
  severity?: string | undefined;
  severity_condition_id?: string | undefined;
  severity_impact_id?: string | undefined;
  tag_list?: Array<string> | undefined;
};

/** @internal */
export const PatchV1IncidentsIncidentId$outboundSchema: z.ZodType<
  PatchV1IncidentsIncidentId$Outbound,
  z.ZodTypeDef,
  PatchV1IncidentsIncidentId
> = z.object({
  name: z.string().optional(),
  summary: z.string().optional(),
  customerImpactSummary: z.string().optional(),
  description: z.string().optional(),
  labels: z.lazy(() => PatchV1IncidentsIncidentIdLabels$outboundSchema)
    .optional(),
  priority: z.string().optional(),
  severity: z.string().optional(),
  severityConditionId: z.string().optional(),
  severityImpactId: z.string().optional(),
  tagList: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    customerImpactSummary: "customer_impact_summary",
    severityConditionId: "severity_condition_id",
    severityImpactId: "severity_impact_id",
    tagList: "tag_list",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1IncidentsIncidentId$ {
  /** @deprecated use `PatchV1IncidentsIncidentId$inboundSchema` instead. */
  export const inboundSchema = PatchV1IncidentsIncidentId$inboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentId$outboundSchema` instead. */
  export const outboundSchema = PatchV1IncidentsIncidentId$outboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentId$Outbound` instead. */
  export type Outbound = PatchV1IncidentsIncidentId$Outbound;
}

export function patchV1IncidentsIncidentIdToJSON(
  patchV1IncidentsIncidentId: PatchV1IncidentsIncidentId,
): string {
  return JSON.stringify(
    PatchV1IncidentsIncidentId$outboundSchema.parse(patchV1IncidentsIncidentId),
  );
}

export function patchV1IncidentsIncidentIdFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1IncidentsIncidentId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV1IncidentsIncidentId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1IncidentsIncidentId' from JSON`,
  );
}
