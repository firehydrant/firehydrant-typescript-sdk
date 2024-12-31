/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * AI_Entities_PreferencesEntity model
 */
export type AIEntitiesPreferencesEntity = {
  ai?: boolean | undefined;
  description?: boolean | undefined;
  followups?: boolean | undefined;
  impact?: boolean | undefined;
  retros?: boolean | undefined;
  similarIncidents?: boolean | undefined;
  summaries?: boolean | undefined;
  updates?: boolean | undefined;
};

/** @internal */
export const AIEntitiesPreferencesEntity$inboundSchema: z.ZodType<
  AIEntitiesPreferencesEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  ai: z.boolean().optional(),
  description: z.boolean().optional(),
  followups: z.boolean().optional(),
  impact: z.boolean().optional(),
  retros: z.boolean().optional(),
  similar_incidents: z.boolean().optional(),
  summaries: z.boolean().optional(),
  updates: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "similar_incidents": "similarIncidents",
  });
});

/** @internal */
export type AIEntitiesPreferencesEntity$Outbound = {
  ai?: boolean | undefined;
  description?: boolean | undefined;
  followups?: boolean | undefined;
  impact?: boolean | undefined;
  retros?: boolean | undefined;
  similar_incidents?: boolean | undefined;
  summaries?: boolean | undefined;
  updates?: boolean | undefined;
};

/** @internal */
export const AIEntitiesPreferencesEntity$outboundSchema: z.ZodType<
  AIEntitiesPreferencesEntity$Outbound,
  z.ZodTypeDef,
  AIEntitiesPreferencesEntity
> = z.object({
  ai: z.boolean().optional(),
  description: z.boolean().optional(),
  followups: z.boolean().optional(),
  impact: z.boolean().optional(),
  retros: z.boolean().optional(),
  similarIncidents: z.boolean().optional(),
  summaries: z.boolean().optional(),
  updates: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    similarIncidents: "similar_incidents",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AIEntitiesPreferencesEntity$ {
  /** @deprecated use `AIEntitiesPreferencesEntity$inboundSchema` instead. */
  export const inboundSchema = AIEntitiesPreferencesEntity$inboundSchema;
  /** @deprecated use `AIEntitiesPreferencesEntity$outboundSchema` instead. */
  export const outboundSchema = AIEntitiesPreferencesEntity$outboundSchema;
  /** @deprecated use `AIEntitiesPreferencesEntity$Outbound` instead. */
  export type Outbound = AIEntitiesPreferencesEntity$Outbound;
}

export function aiEntitiesPreferencesEntityToJSON(
  aiEntitiesPreferencesEntity: AIEntitiesPreferencesEntity,
): string {
  return JSON.stringify(
    AIEntitiesPreferencesEntity$outboundSchema.parse(
      aiEntitiesPreferencesEntity,
    ),
  );
}

export function aiEntitiesPreferencesEntityFromJSON(
  jsonString: string,
): SafeParseResult<AIEntitiesPreferencesEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AIEntitiesPreferencesEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AIEntitiesPreferencesEntity' from JSON`,
  );
}
