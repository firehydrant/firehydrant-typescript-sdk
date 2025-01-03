/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListPrioritiesRequest = {
  page?: number | undefined;
  perPage?: number | undefined;
};

/** @internal */
export const ListPrioritiesRequest$inboundSchema: z.ZodType<
  ListPrioritiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().optional(),
  per_page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "per_page": "perPage",
  });
});

/** @internal */
export type ListPrioritiesRequest$Outbound = {
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const ListPrioritiesRequest$outboundSchema: z.ZodType<
  ListPrioritiesRequest$Outbound,
  z.ZodTypeDef,
  ListPrioritiesRequest
> = z.object({
  page: z.number().int().optional(),
  perPage: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    perPage: "per_page",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPrioritiesRequest$ {
  /** @deprecated use `ListPrioritiesRequest$inboundSchema` instead. */
  export const inboundSchema = ListPrioritiesRequest$inboundSchema;
  /** @deprecated use `ListPrioritiesRequest$outboundSchema` instead. */
  export const outboundSchema = ListPrioritiesRequest$outboundSchema;
  /** @deprecated use `ListPrioritiesRequest$Outbound` instead. */
  export type Outbound = ListPrioritiesRequest$Outbound;
}

export function listPrioritiesRequestToJSON(
  listPrioritiesRequest: ListPrioritiesRequest,
): string {
  return JSON.stringify(
    ListPrioritiesRequest$outboundSchema.parse(listPrioritiesRequest),
  );
}

export function listPrioritiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPrioritiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPrioritiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPrioritiesRequest' from JSON`,
  );
}
