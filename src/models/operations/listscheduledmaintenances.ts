/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListScheduledMaintenancesRequest = {
  /**
   * Filter scheduled_maintenances with a query on their name
   */
  query?: string | undefined;
  page?: number | undefined;
  perPage?: number | undefined;
};

/** @internal */
export const ListScheduledMaintenancesRequest$inboundSchema: z.ZodType<
  ListScheduledMaintenancesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string().optional(),
  page: z.number().int().optional(),
  per_page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "per_page": "perPage",
  });
});

/** @internal */
export type ListScheduledMaintenancesRequest$Outbound = {
  query?: string | undefined;
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const ListScheduledMaintenancesRequest$outboundSchema: z.ZodType<
  ListScheduledMaintenancesRequest$Outbound,
  z.ZodTypeDef,
  ListScheduledMaintenancesRequest
> = z.object({
  query: z.string().optional(),
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
export namespace ListScheduledMaintenancesRequest$ {
  /** @deprecated use `ListScheduledMaintenancesRequest$inboundSchema` instead. */
  export const inboundSchema = ListScheduledMaintenancesRequest$inboundSchema;
  /** @deprecated use `ListScheduledMaintenancesRequest$outboundSchema` instead. */
  export const outboundSchema = ListScheduledMaintenancesRequest$outboundSchema;
  /** @deprecated use `ListScheduledMaintenancesRequest$Outbound` instead. */
  export type Outbound = ListScheduledMaintenancesRequest$Outbound;
}

export function listScheduledMaintenancesRequestToJSON(
  listScheduledMaintenancesRequest: ListScheduledMaintenancesRequest,
): string {
  return JSON.stringify(
    ListScheduledMaintenancesRequest$outboundSchema.parse(
      listScheduledMaintenancesRequest,
    ),
  );
}

export function listScheduledMaintenancesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListScheduledMaintenancesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListScheduledMaintenancesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListScheduledMaintenancesRequest' from JSON`,
  );
}
