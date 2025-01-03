/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetPriorityRequest = {
  prioritySlug: string;
};

/** @internal */
export const GetPriorityRequest$inboundSchema: z.ZodType<
  GetPriorityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  priority_slug: z.string(),
}).transform((v) => {
  return remap$(v, {
    "priority_slug": "prioritySlug",
  });
});

/** @internal */
export type GetPriorityRequest$Outbound = {
  priority_slug: string;
};

/** @internal */
export const GetPriorityRequest$outboundSchema: z.ZodType<
  GetPriorityRequest$Outbound,
  z.ZodTypeDef,
  GetPriorityRequest
> = z.object({
  prioritySlug: z.string(),
}).transform((v) => {
  return remap$(v, {
    prioritySlug: "priority_slug",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPriorityRequest$ {
  /** @deprecated use `GetPriorityRequest$inboundSchema` instead. */
  export const inboundSchema = GetPriorityRequest$inboundSchema;
  /** @deprecated use `GetPriorityRequest$outboundSchema` instead. */
  export const outboundSchema = GetPriorityRequest$outboundSchema;
  /** @deprecated use `GetPriorityRequest$Outbound` instead. */
  export type Outbound = GetPriorityRequest$Outbound;
}

export function getPriorityRequestToJSON(
  getPriorityRequest: GetPriorityRequest,
): string {
  return JSON.stringify(
    GetPriorityRequest$outboundSchema.parse(getPriorityRequest),
  );
}

export function getPriorityRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetPriorityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPriorityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPriorityRequest' from JSON`,
  );
}
