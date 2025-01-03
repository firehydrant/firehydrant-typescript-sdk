/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FHTypesGenericEntity,
  FHTypesGenericEntity$inboundSchema,
  FHTypesGenericEntity$Outbound,
  FHTypesGenericEntity$outboundSchema,
} from "./fhtypesgenericentity.js";

/**
 * An unstructured object of key/value pairs describing the logic for applying the rule.
 */
export type Logic = {};

export type RulesRuleEntity = {
  /**
   * An unstructured object of key/value pairs describing the logic for applying the rule.
   */
  logic?: Logic | undefined;
  userData?: FHTypesGenericEntity | undefined;
};

/** @internal */
export const Logic$inboundSchema: z.ZodType<Logic, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Logic$Outbound = {};

/** @internal */
export const Logic$outboundSchema: z.ZodType<
  Logic$Outbound,
  z.ZodTypeDef,
  Logic
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Logic$ {
  /** @deprecated use `Logic$inboundSchema` instead. */
  export const inboundSchema = Logic$inboundSchema;
  /** @deprecated use `Logic$outboundSchema` instead. */
  export const outboundSchema = Logic$outboundSchema;
  /** @deprecated use `Logic$Outbound` instead. */
  export type Outbound = Logic$Outbound;
}

export function logicToJSON(logic: Logic): string {
  return JSON.stringify(Logic$outboundSchema.parse(logic));
}

export function logicFromJSON(
  jsonString: string,
): SafeParseResult<Logic, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Logic$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Logic' from JSON`,
  );
}

/** @internal */
export const RulesRuleEntity$inboundSchema: z.ZodType<
  RulesRuleEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  logic: z.lazy(() => Logic$inboundSchema).optional(),
  user_data: FHTypesGenericEntity$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "user_data": "userData",
  });
});

/** @internal */
export type RulesRuleEntity$Outbound = {
  logic?: Logic$Outbound | undefined;
  user_data?: FHTypesGenericEntity$Outbound | undefined;
};

/** @internal */
export const RulesRuleEntity$outboundSchema: z.ZodType<
  RulesRuleEntity$Outbound,
  z.ZodTypeDef,
  RulesRuleEntity
> = z.object({
  logic: z.lazy(() => Logic$outboundSchema).optional(),
  userData: FHTypesGenericEntity$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    userData: "user_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RulesRuleEntity$ {
  /** @deprecated use `RulesRuleEntity$inboundSchema` instead. */
  export const inboundSchema = RulesRuleEntity$inboundSchema;
  /** @deprecated use `RulesRuleEntity$outboundSchema` instead. */
  export const outboundSchema = RulesRuleEntity$outboundSchema;
  /** @deprecated use `RulesRuleEntity$Outbound` instead. */
  export type Outbound = RulesRuleEntity$Outbound;
}

export function rulesRuleEntityToJSON(
  rulesRuleEntity: RulesRuleEntity,
): string {
  return JSON.stringify(RulesRuleEntity$outboundSchema.parse(rulesRuleEntity));
}

export function rulesRuleEntityFromJSON(
  jsonString: string,
): SafeParseResult<RulesRuleEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RulesRuleEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RulesRuleEntity' from JSON`,
  );
}
