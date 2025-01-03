/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListUserServicesRequest = {
  id: string;
  page?: number | undefined;
  perPage?: number | undefined;
};

/** @internal */
export const ListUserServicesRequest$inboundSchema: z.ZodType<
  ListUserServicesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  page: z.number().int().optional(),
  per_page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "per_page": "perPage",
  });
});

/** @internal */
export type ListUserServicesRequest$Outbound = {
  id: string;
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const ListUserServicesRequest$outboundSchema: z.ZodType<
  ListUserServicesRequest$Outbound,
  z.ZodTypeDef,
  ListUserServicesRequest
> = z.object({
  id: z.string(),
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
export namespace ListUserServicesRequest$ {
  /** @deprecated use `ListUserServicesRequest$inboundSchema` instead. */
  export const inboundSchema = ListUserServicesRequest$inboundSchema;
  /** @deprecated use `ListUserServicesRequest$outboundSchema` instead. */
  export const outboundSchema = ListUserServicesRequest$outboundSchema;
  /** @deprecated use `ListUserServicesRequest$Outbound` instead. */
  export type Outbound = ListUserServicesRequest$Outbound;
}

export function listUserServicesRequestToJSON(
  listUserServicesRequest: ListUserServicesRequest,
): string {
  return JSON.stringify(
    ListUserServicesRequest$outboundSchema.parse(listUserServicesRequest),
  );
}

export function listUserServicesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListUserServicesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListUserServicesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListUserServicesRequest' from JSON`,
  );
}
