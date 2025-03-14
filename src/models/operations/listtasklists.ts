/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListTaskListsRequest = {
  page?: number | undefined;
  perPage?: number | undefined;
};

/** @internal */
export const ListTaskListsRequest$inboundSchema: z.ZodType<
  ListTaskListsRequest,
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
export type ListTaskListsRequest$Outbound = {
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const ListTaskListsRequest$outboundSchema: z.ZodType<
  ListTaskListsRequest$Outbound,
  z.ZodTypeDef,
  ListTaskListsRequest
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
export namespace ListTaskListsRequest$ {
  /** @deprecated use `ListTaskListsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTaskListsRequest$inboundSchema;
  /** @deprecated use `ListTaskListsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTaskListsRequest$outboundSchema;
  /** @deprecated use `ListTaskListsRequest$Outbound` instead. */
  export type Outbound = ListTaskListsRequest$Outbound;
}

export function listTaskListsRequestToJSON(
  listTaskListsRequest: ListTaskListsRequest,
): string {
  return JSON.stringify(
    ListTaskListsRequest$outboundSchema.parse(listTaskListsRequest),
  );
}

export function listTaskListsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTaskListsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTaskListsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTaskListsRequest' from JSON`,
  );
}
