/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateAiPreferencesRequestBody = {
  /**
   * Whether to enable AI features
   */
  ai?: boolean | undefined;
  /**
   * Whether to enable incident summaries
   */
  summaries?: boolean | undefined;
  /**
   * Whether to enable incident descriptions
   */
  description?: boolean | undefined;
  /**
   * Whether to enable incident impact
   */
  impact?: boolean | undefined;
  /**
   * Whether to enable incident updates
   */
  updates?: boolean | undefined;
  /**
   * Whether to enable incident retrospectives
   */
  retros?: boolean | undefined;
  /**
   * Whether to enable incident followups
   */
  followups?: boolean | undefined;
  /**
   * Whether to enable similar incidents
   */
  similarIncidents?: boolean | undefined;
};

/** @internal */
export const UpdateAiPreferencesRequestBody$inboundSchema: z.ZodType<
  UpdateAiPreferencesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  ai: z.boolean().optional(),
  summaries: z.boolean().optional(),
  description: z.boolean().optional(),
  impact: z.boolean().optional(),
  updates: z.boolean().optional(),
  retros: z.boolean().optional(),
  followups: z.boolean().optional(),
  similar_incidents: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "similar_incidents": "similarIncidents",
  });
});

/** @internal */
export type UpdateAiPreferencesRequestBody$Outbound = {
  ai?: boolean | undefined;
  summaries?: boolean | undefined;
  description?: boolean | undefined;
  impact?: boolean | undefined;
  updates?: boolean | undefined;
  retros?: boolean | undefined;
  followups?: boolean | undefined;
  similar_incidents?: boolean | undefined;
};

/** @internal */
export const UpdateAiPreferencesRequestBody$outboundSchema: z.ZodType<
  UpdateAiPreferencesRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateAiPreferencesRequestBody
> = z.object({
  ai: z.boolean().optional(),
  summaries: z.boolean().optional(),
  description: z.boolean().optional(),
  impact: z.boolean().optional(),
  updates: z.boolean().optional(),
  retros: z.boolean().optional(),
  followups: z.boolean().optional(),
  similarIncidents: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    similarIncidents: "similar_incidents",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAiPreferencesRequestBody$ {
  /** @deprecated use `UpdateAiPreferencesRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateAiPreferencesRequestBody$inboundSchema;
  /** @deprecated use `UpdateAiPreferencesRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateAiPreferencesRequestBody$outboundSchema;
  /** @deprecated use `UpdateAiPreferencesRequestBody$Outbound` instead. */
  export type Outbound = UpdateAiPreferencesRequestBody$Outbound;
}

export function updateAiPreferencesRequestBodyToJSON(
  updateAiPreferencesRequestBody: UpdateAiPreferencesRequestBody,
): string {
  return JSON.stringify(
    UpdateAiPreferencesRequestBody$outboundSchema.parse(
      updateAiPreferencesRequestBody,
    ),
  );
}

export function updateAiPreferencesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAiPreferencesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAiPreferencesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAiPreferencesRequestBody' from JSON`,
  );
}
