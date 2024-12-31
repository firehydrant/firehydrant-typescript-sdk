/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Nunc_NuncSubscription model
 */
export type NuncNuncSubscription = {
  response?: string | undefined;
};

/** @internal */
export const NuncNuncSubscription$inboundSchema: z.ZodType<
  NuncNuncSubscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  response: z.string().optional(),
});

/** @internal */
export type NuncNuncSubscription$Outbound = {
  response?: string | undefined;
};

/** @internal */
export const NuncNuncSubscription$outboundSchema: z.ZodType<
  NuncNuncSubscription$Outbound,
  z.ZodTypeDef,
  NuncNuncSubscription
> = z.object({
  response: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NuncNuncSubscription$ {
  /** @deprecated use `NuncNuncSubscription$inboundSchema` instead. */
  export const inboundSchema = NuncNuncSubscription$inboundSchema;
  /** @deprecated use `NuncNuncSubscription$outboundSchema` instead. */
  export const outboundSchema = NuncNuncSubscription$outboundSchema;
  /** @deprecated use `NuncNuncSubscription$Outbound` instead. */
  export type Outbound = NuncNuncSubscription$Outbound;
}

export function nuncNuncSubscriptionToJSON(
  nuncNuncSubscription: NuncNuncSubscription,
): string {
  return JSON.stringify(
    NuncNuncSubscription$outboundSchema.parse(nuncNuncSubscription),
  );
}

export function nuncNuncSubscriptionFromJSON(
  jsonString: string,
): SafeParseResult<NuncNuncSubscription, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NuncNuncSubscription$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NuncNuncSubscription' from JSON`,
  );
}
