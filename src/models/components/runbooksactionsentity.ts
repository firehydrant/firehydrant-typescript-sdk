/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IntegrationsIntegrationEntity,
  IntegrationsIntegrationEntity$inboundSchema,
  IntegrationsIntegrationEntity$Outbound,
  IntegrationsIntegrationEntity$outboundSchema,
} from "./integrationsintegrationentity.js";
import {
  RunbooksActionConfigEntity,
  RunbooksActionConfigEntity$inboundSchema,
  RunbooksActionConfigEntity$Outbound,
  RunbooksActionConfigEntity$outboundSchema,
} from "./runbooksactionconfigentity.js";

export type Prerequisites = {};

export type DefaultLogic = {};

export type DefaultRuleData = {};

export type RunbooksActionsEntity = {
  id?: string | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  config?: RunbooksActionConfigEntity | undefined;
  category?: string | undefined;
  prerequisites?: Prerequisites | undefined;
  /**
   * Integrations_IntegrationEntity model
   */
  integration?: IntegrationsIntegrationEntity | undefined;
  supportedRunbookTypes?: Array<string> | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  automatable?: boolean | undefined;
  rerunnable?: boolean | undefined;
  repeatable?: boolean | undefined;
  defaultLogic?: DefaultLogic | undefined;
  defaultRuleData?: DefaultRuleData | undefined;
};

/** @internal */
export const Prerequisites$inboundSchema: z.ZodType<
  Prerequisites,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Prerequisites$Outbound = {};

/** @internal */
export const Prerequisites$outboundSchema: z.ZodType<
  Prerequisites$Outbound,
  z.ZodTypeDef,
  Prerequisites
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Prerequisites$ {
  /** @deprecated use `Prerequisites$inboundSchema` instead. */
  export const inboundSchema = Prerequisites$inboundSchema;
  /** @deprecated use `Prerequisites$outboundSchema` instead. */
  export const outboundSchema = Prerequisites$outboundSchema;
  /** @deprecated use `Prerequisites$Outbound` instead. */
  export type Outbound = Prerequisites$Outbound;
}

export function prerequisitesToJSON(prerequisites: Prerequisites): string {
  return JSON.stringify(Prerequisites$outboundSchema.parse(prerequisites));
}

export function prerequisitesFromJSON(
  jsonString: string,
): SafeParseResult<Prerequisites, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Prerequisites$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Prerequisites' from JSON`,
  );
}

/** @internal */
export const DefaultLogic$inboundSchema: z.ZodType<
  DefaultLogic,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DefaultLogic$Outbound = {};

/** @internal */
export const DefaultLogic$outboundSchema: z.ZodType<
  DefaultLogic$Outbound,
  z.ZodTypeDef,
  DefaultLogic
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultLogic$ {
  /** @deprecated use `DefaultLogic$inboundSchema` instead. */
  export const inboundSchema = DefaultLogic$inboundSchema;
  /** @deprecated use `DefaultLogic$outboundSchema` instead. */
  export const outboundSchema = DefaultLogic$outboundSchema;
  /** @deprecated use `DefaultLogic$Outbound` instead. */
  export type Outbound = DefaultLogic$Outbound;
}

export function defaultLogicToJSON(defaultLogic: DefaultLogic): string {
  return JSON.stringify(DefaultLogic$outboundSchema.parse(defaultLogic));
}

export function defaultLogicFromJSON(
  jsonString: string,
): SafeParseResult<DefaultLogic, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DefaultLogic$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DefaultLogic' from JSON`,
  );
}

/** @internal */
export const DefaultRuleData$inboundSchema: z.ZodType<
  DefaultRuleData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DefaultRuleData$Outbound = {};

/** @internal */
export const DefaultRuleData$outboundSchema: z.ZodType<
  DefaultRuleData$Outbound,
  z.ZodTypeDef,
  DefaultRuleData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultRuleData$ {
  /** @deprecated use `DefaultRuleData$inboundSchema` instead. */
  export const inboundSchema = DefaultRuleData$inboundSchema;
  /** @deprecated use `DefaultRuleData$outboundSchema` instead. */
  export const outboundSchema = DefaultRuleData$outboundSchema;
  /** @deprecated use `DefaultRuleData$Outbound` instead. */
  export type Outbound = DefaultRuleData$Outbound;
}

export function defaultRuleDataToJSON(
  defaultRuleData: DefaultRuleData,
): string {
  return JSON.stringify(DefaultRuleData$outboundSchema.parse(defaultRuleData));
}

export function defaultRuleDataFromJSON(
  jsonString: string,
): SafeParseResult<DefaultRuleData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DefaultRuleData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DefaultRuleData' from JSON`,
  );
}

/** @internal */
export const RunbooksActionsEntity$inboundSchema: z.ZodType<
  RunbooksActionsEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  config: RunbooksActionConfigEntity$inboundSchema.optional(),
  category: z.string().optional(),
  prerequisites: z.lazy(() => Prerequisites$inboundSchema).optional(),
  integration: IntegrationsIntegrationEntity$inboundSchema.optional(),
  supported_runbook_types: z.array(z.string()).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  automatable: z.boolean().optional(),
  rerunnable: z.boolean().optional(),
  repeatable: z.boolean().optional(),
  default_logic: z.lazy(() => DefaultLogic$inboundSchema).optional(),
  default_rule_data: z.lazy(() => DefaultRuleData$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "supported_runbook_types": "supportedRunbookTypes",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "default_logic": "defaultLogic",
    "default_rule_data": "defaultRuleData",
  });
});

/** @internal */
export type RunbooksActionsEntity$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  config?: RunbooksActionConfigEntity$Outbound | undefined;
  category?: string | undefined;
  prerequisites?: Prerequisites$Outbound | undefined;
  integration?: IntegrationsIntegrationEntity$Outbound | undefined;
  supported_runbook_types?: Array<string> | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  automatable?: boolean | undefined;
  rerunnable?: boolean | undefined;
  repeatable?: boolean | undefined;
  default_logic?: DefaultLogic$Outbound | undefined;
  default_rule_data?: DefaultRuleData$Outbound | undefined;
};

/** @internal */
export const RunbooksActionsEntity$outboundSchema: z.ZodType<
  RunbooksActionsEntity$Outbound,
  z.ZodTypeDef,
  RunbooksActionsEntity
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  config: RunbooksActionConfigEntity$outboundSchema.optional(),
  category: z.string().optional(),
  prerequisites: z.lazy(() => Prerequisites$outboundSchema).optional(),
  integration: IntegrationsIntegrationEntity$outboundSchema.optional(),
  supportedRunbookTypes: z.array(z.string()).optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  automatable: z.boolean().optional(),
  rerunnable: z.boolean().optional(),
  repeatable: z.boolean().optional(),
  defaultLogic: z.lazy(() => DefaultLogic$outboundSchema).optional(),
  defaultRuleData: z.lazy(() => DefaultRuleData$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    supportedRunbookTypes: "supported_runbook_types",
    createdAt: "created_at",
    updatedAt: "updated_at",
    defaultLogic: "default_logic",
    defaultRuleData: "default_rule_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunbooksActionsEntity$ {
  /** @deprecated use `RunbooksActionsEntity$inboundSchema` instead. */
  export const inboundSchema = RunbooksActionsEntity$inboundSchema;
  /** @deprecated use `RunbooksActionsEntity$outboundSchema` instead. */
  export const outboundSchema = RunbooksActionsEntity$outboundSchema;
  /** @deprecated use `RunbooksActionsEntity$Outbound` instead. */
  export type Outbound = RunbooksActionsEntity$Outbound;
}

export function runbooksActionsEntityToJSON(
  runbooksActionsEntity: RunbooksActionsEntity,
): string {
  return JSON.stringify(
    RunbooksActionsEntity$outboundSchema.parse(runbooksActionsEntity),
  );
}

export function runbooksActionsEntityFromJSON(
  jsonString: string,
): SafeParseResult<RunbooksActionsEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RunbooksActionsEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RunbooksActionsEntity' from JSON`,
  );
}
