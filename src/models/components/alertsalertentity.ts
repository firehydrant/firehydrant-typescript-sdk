/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AlertsSirenEventEntity,
  AlertsSirenEventEntity$inboundSchema,
  AlertsSirenEventEntity$Outbound,
  AlertsSirenEventEntity$outboundSchema,
} from "./alertssirenevententity.js";
import {
  PublicApiv1IncidentsSuccinctEntity,
  PublicApiv1IncidentsSuccinctEntity$inboundSchema,
  PublicApiv1IncidentsSuccinctEntity$Outbound,
  PublicApiv1IncidentsSuccinctEntity$outboundSchema,
} from "./publicapiv1incidentssuccinctentity.js";
import {
  SignalsAPIRuleEntity,
  SignalsAPIRuleEntity$inboundSchema,
  SignalsAPIRuleEntity$Outbound,
  SignalsAPIRuleEntity$outboundSchema,
} from "./signalsapiruleentity.js";
import {
  SuccinctEntity,
  SuccinctEntity$inboundSchema,
  SuccinctEntity$Outbound,
  SuccinctEntity$outboundSchema,
} from "./succinctentity.js";

/**
 * Arbitrary key:value pairs of labels.
 */
export type Labels = {};

/**
 * Alerts_AlertEntity model
 */
export type AlertsAlertEntity = {
  id?: string | undefined;
  summary?: string | undefined;
  description?: string | undefined;
  priority?: string | undefined;
  integrationName?: string | undefined;
  startsAt?: Date | undefined;
  endsAt?: Date | null | undefined;
  durationMs?: number | null | undefined;
  durationIso8601?: string | null | undefined;
  status?: string | undefined;
  remoteId?: string | undefined;
  remoteUrl?: string | undefined;
  /**
   * Arbitrary key:value pairs of labels.
   */
  labels?: Labels | undefined;
  environments?: Array<SuccinctEntity> | undefined;
  services?: Array<SuccinctEntity> | undefined;
  tags?: Array<string> | undefined;
  sourceIcon?: string | undefined;
  signalId?: string | undefined;
  signalRule?: SignalsAPIRuleEntity | undefined;
  teamName?: string | undefined;
  teamId?: string | undefined;
  position?: number | undefined;
  incidents?: Array<PublicApiv1IncidentsSuccinctEntity> | undefined;
  events?: Array<AlertsSirenEventEntity> | undefined;
  isExpired?: boolean | undefined;
};

/** @internal */
export const Labels$inboundSchema: z.ZodType<Labels, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Labels$Outbound = {};

/** @internal */
export const Labels$outboundSchema: z.ZodType<
  Labels$Outbound,
  z.ZodTypeDef,
  Labels
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Labels$ {
  /** @deprecated use `Labels$inboundSchema` instead. */
  export const inboundSchema = Labels$inboundSchema;
  /** @deprecated use `Labels$outboundSchema` instead. */
  export const outboundSchema = Labels$outboundSchema;
  /** @deprecated use `Labels$Outbound` instead. */
  export type Outbound = Labels$Outbound;
}

export function labelsToJSON(labels: Labels): string {
  return JSON.stringify(Labels$outboundSchema.parse(labels));
}

export function labelsFromJSON(
  jsonString: string,
): SafeParseResult<Labels, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Labels$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Labels' from JSON`,
  );
}

/** @internal */
export const AlertsAlertEntity$inboundSchema: z.ZodType<
  AlertsAlertEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  priority: z.string().optional(),
  integration_name: z.string().optional(),
  starts_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  ends_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  duration_ms: z.nullable(z.number().int()).optional(),
  duration_iso8601: z.nullable(z.string()).optional(),
  status: z.string().optional(),
  remote_id: z.string().optional(),
  remote_url: z.string().optional(),
  labels: z.lazy(() => Labels$inboundSchema).optional(),
  environments: z.array(SuccinctEntity$inboundSchema).optional(),
  services: z.array(SuccinctEntity$inboundSchema).optional(),
  tags: z.array(z.string()).optional(),
  source_icon: z.string().optional(),
  signal_id: z.string().optional(),
  signal_rule: SignalsAPIRuleEntity$inboundSchema.optional(),
  team_name: z.string().optional(),
  team_id: z.string().optional(),
  position: z.number().int().optional(),
  incidents: z.array(PublicApiv1IncidentsSuccinctEntity$inboundSchema)
    .optional(),
  events: z.array(AlertsSirenEventEntity$inboundSchema).optional(),
  is_expired: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "integration_name": "integrationName",
    "starts_at": "startsAt",
    "ends_at": "endsAt",
    "duration_ms": "durationMs",
    "duration_iso8601": "durationIso8601",
    "remote_id": "remoteId",
    "remote_url": "remoteUrl",
    "source_icon": "sourceIcon",
    "signal_id": "signalId",
    "signal_rule": "signalRule",
    "team_name": "teamName",
    "team_id": "teamId",
    "is_expired": "isExpired",
  });
});

/** @internal */
export type AlertsAlertEntity$Outbound = {
  id?: string | undefined;
  summary?: string | undefined;
  description?: string | undefined;
  priority?: string | undefined;
  integration_name?: string | undefined;
  starts_at?: string | undefined;
  ends_at?: string | null | undefined;
  duration_ms?: number | null | undefined;
  duration_iso8601?: string | null | undefined;
  status?: string | undefined;
  remote_id?: string | undefined;
  remote_url?: string | undefined;
  labels?: Labels$Outbound | undefined;
  environments?: Array<SuccinctEntity$Outbound> | undefined;
  services?: Array<SuccinctEntity$Outbound> | undefined;
  tags?: Array<string> | undefined;
  source_icon?: string | undefined;
  signal_id?: string | undefined;
  signal_rule?: SignalsAPIRuleEntity$Outbound | undefined;
  team_name?: string | undefined;
  team_id?: string | undefined;
  position?: number | undefined;
  incidents?: Array<PublicApiv1IncidentsSuccinctEntity$Outbound> | undefined;
  events?: Array<AlertsSirenEventEntity$Outbound> | undefined;
  is_expired?: boolean | undefined;
};

/** @internal */
export const AlertsAlertEntity$outboundSchema: z.ZodType<
  AlertsAlertEntity$Outbound,
  z.ZodTypeDef,
  AlertsAlertEntity
> = z.object({
  id: z.string().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  priority: z.string().optional(),
  integrationName: z.string().optional(),
  startsAt: z.date().transform(v => v.toISOString()).optional(),
  endsAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  durationMs: z.nullable(z.number().int()).optional(),
  durationIso8601: z.nullable(z.string()).optional(),
  status: z.string().optional(),
  remoteId: z.string().optional(),
  remoteUrl: z.string().optional(),
  labels: z.lazy(() => Labels$outboundSchema).optional(),
  environments: z.array(SuccinctEntity$outboundSchema).optional(),
  services: z.array(SuccinctEntity$outboundSchema).optional(),
  tags: z.array(z.string()).optional(),
  sourceIcon: z.string().optional(),
  signalId: z.string().optional(),
  signalRule: SignalsAPIRuleEntity$outboundSchema.optional(),
  teamName: z.string().optional(),
  teamId: z.string().optional(),
  position: z.number().int().optional(),
  incidents: z.array(PublicApiv1IncidentsSuccinctEntity$outboundSchema)
    .optional(),
  events: z.array(AlertsSirenEventEntity$outboundSchema).optional(),
  isExpired: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    integrationName: "integration_name",
    startsAt: "starts_at",
    endsAt: "ends_at",
    durationMs: "duration_ms",
    durationIso8601: "duration_iso8601",
    remoteId: "remote_id",
    remoteUrl: "remote_url",
    sourceIcon: "source_icon",
    signalId: "signal_id",
    signalRule: "signal_rule",
    teamName: "team_name",
    teamId: "team_id",
    isExpired: "is_expired",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AlertsAlertEntity$ {
  /** @deprecated use `AlertsAlertEntity$inboundSchema` instead. */
  export const inboundSchema = AlertsAlertEntity$inboundSchema;
  /** @deprecated use `AlertsAlertEntity$outboundSchema` instead. */
  export const outboundSchema = AlertsAlertEntity$outboundSchema;
  /** @deprecated use `AlertsAlertEntity$Outbound` instead. */
  export type Outbound = AlertsAlertEntity$Outbound;
}

export function alertsAlertEntityToJSON(
  alertsAlertEntity: AlertsAlertEntity,
): string {
  return JSON.stringify(
    AlertsAlertEntity$outboundSchema.parse(alertsAlertEntity),
  );
}

export function alertsAlertEntityFromJSON(
  jsonString: string,
): SafeParseResult<AlertsAlertEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AlertsAlertEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AlertsAlertEntity' from JSON`,
  );
}
