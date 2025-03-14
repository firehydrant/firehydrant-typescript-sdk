/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListMeasurementDefinitionsRequest = {
  page?: number | undefined;
  perPage?: number | undefined;
};

/** @internal */
export const ListMeasurementDefinitionsRequest$inboundSchema: z.ZodType<
  ListMeasurementDefinitionsRequest,
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
export type ListMeasurementDefinitionsRequest$Outbound = {
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const ListMeasurementDefinitionsRequest$outboundSchema: z.ZodType<
  ListMeasurementDefinitionsRequest$Outbound,
  z.ZodTypeDef,
  ListMeasurementDefinitionsRequest
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
export namespace ListMeasurementDefinitionsRequest$ {
  /** @deprecated use `ListMeasurementDefinitionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListMeasurementDefinitionsRequest$inboundSchema;
  /** @deprecated use `ListMeasurementDefinitionsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListMeasurementDefinitionsRequest$outboundSchema;
  /** @deprecated use `ListMeasurementDefinitionsRequest$Outbound` instead. */
  export type Outbound = ListMeasurementDefinitionsRequest$Outbound;
}

export function listMeasurementDefinitionsRequestToJSON(
  listMeasurementDefinitionsRequest: ListMeasurementDefinitionsRequest,
): string {
  return JSON.stringify(
    ListMeasurementDefinitionsRequest$outboundSchema.parse(
      listMeasurementDefinitionsRequest,
    ),
  );
}

export function listMeasurementDefinitionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListMeasurementDefinitionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListMeasurementDefinitionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMeasurementDefinitionsRequest' from JSON`,
  );
}
