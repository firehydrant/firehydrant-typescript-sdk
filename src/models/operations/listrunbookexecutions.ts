/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListRunbookExecutionsRequest = {
  page?: number | undefined;
  perPage?: number | undefined;
};

/** @internal */
export const ListRunbookExecutionsRequest$inboundSchema: z.ZodType<
  ListRunbookExecutionsRequest,
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
export type ListRunbookExecutionsRequest$Outbound = {
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const ListRunbookExecutionsRequest$outboundSchema: z.ZodType<
  ListRunbookExecutionsRequest$Outbound,
  z.ZodTypeDef,
  ListRunbookExecutionsRequest
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
export namespace ListRunbookExecutionsRequest$ {
  /** @deprecated use `ListRunbookExecutionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListRunbookExecutionsRequest$inboundSchema;
  /** @deprecated use `ListRunbookExecutionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListRunbookExecutionsRequest$outboundSchema;
  /** @deprecated use `ListRunbookExecutionsRequest$Outbound` instead. */
  export type Outbound = ListRunbookExecutionsRequest$Outbound;
}

export function listRunbookExecutionsRequestToJSON(
  listRunbookExecutionsRequest: ListRunbookExecutionsRequest,
): string {
  return JSON.stringify(
    ListRunbookExecutionsRequest$outboundSchema.parse(
      listRunbookExecutionsRequest,
    ),
  );
}

export function listRunbookExecutionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListRunbookExecutionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListRunbookExecutionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListRunbookExecutionsRequest' from JSON`,
  );
}
