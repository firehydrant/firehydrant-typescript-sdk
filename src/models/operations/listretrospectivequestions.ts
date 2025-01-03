/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListRetrospectiveQuestionsRequest = {
  page?: number | undefined;
  perPage?: number | undefined;
};

/** @internal */
export const ListRetrospectiveQuestionsRequest$inboundSchema: z.ZodType<
  ListRetrospectiveQuestionsRequest,
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
export type ListRetrospectiveQuestionsRequest$Outbound = {
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const ListRetrospectiveQuestionsRequest$outboundSchema: z.ZodType<
  ListRetrospectiveQuestionsRequest$Outbound,
  z.ZodTypeDef,
  ListRetrospectiveQuestionsRequest
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
export namespace ListRetrospectiveQuestionsRequest$ {
  /** @deprecated use `ListRetrospectiveQuestionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListRetrospectiveQuestionsRequest$inboundSchema;
  /** @deprecated use `ListRetrospectiveQuestionsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListRetrospectiveQuestionsRequest$outboundSchema;
  /** @deprecated use `ListRetrospectiveQuestionsRequest$Outbound` instead. */
  export type Outbound = ListRetrospectiveQuestionsRequest$Outbound;
}

export function listRetrospectiveQuestionsRequestToJSON(
  listRetrospectiveQuestionsRequest: ListRetrospectiveQuestionsRequest,
): string {
  return JSON.stringify(
    ListRetrospectiveQuestionsRequest$outboundSchema.parse(
      listRetrospectiveQuestionsRequest,
    ),
  );
}

export function listRetrospectiveQuestionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListRetrospectiveQuestionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListRetrospectiveQuestionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListRetrospectiveQuestionsRequest' from JSON`,
  );
}
