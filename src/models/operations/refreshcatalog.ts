/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RefreshCatalogRequest = {
  catalogId: string;
};

/** @internal */
export const RefreshCatalogRequest$inboundSchema: z.ZodType<
  RefreshCatalogRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  catalog_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "catalog_id": "catalogId",
  });
});

/** @internal */
export type RefreshCatalogRequest$Outbound = {
  catalog_id: string;
};

/** @internal */
export const RefreshCatalogRequest$outboundSchema: z.ZodType<
  RefreshCatalogRequest$Outbound,
  z.ZodTypeDef,
  RefreshCatalogRequest
> = z.object({
  catalogId: z.string(),
}).transform((v) => {
  return remap$(v, {
    catalogId: "catalog_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefreshCatalogRequest$ {
  /** @deprecated use `RefreshCatalogRequest$inboundSchema` instead. */
  export const inboundSchema = RefreshCatalogRequest$inboundSchema;
  /** @deprecated use `RefreshCatalogRequest$outboundSchema` instead. */
  export const outboundSchema = RefreshCatalogRequest$outboundSchema;
  /** @deprecated use `RefreshCatalogRequest$Outbound` instead. */
  export type Outbound = RefreshCatalogRequest$Outbound;
}

export function refreshCatalogRequestToJSON(
  refreshCatalogRequest: RefreshCatalogRequest,
): string {
  return JSON.stringify(
    RefreshCatalogRequest$outboundSchema.parse(refreshCatalogRequest),
  );
}

export function refreshCatalogRequestFromJSON(
  jsonString: string,
): SafeParseResult<RefreshCatalogRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RefreshCatalogRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RefreshCatalogRequest' from JSON`,
  );
}
