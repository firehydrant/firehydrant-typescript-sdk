/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetIntegrationFieldMapAvailableFieldsRequest = {
  fieldMapId: string;
};

/** @internal */
export const GetIntegrationFieldMapAvailableFieldsRequest$inboundSchema:
  z.ZodType<
    GetIntegrationFieldMapAvailableFieldsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    field_map_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "field_map_id": "fieldMapId",
    });
  });

/** @internal */
export type GetIntegrationFieldMapAvailableFieldsRequest$Outbound = {
  field_map_id: string;
};

/** @internal */
export const GetIntegrationFieldMapAvailableFieldsRequest$outboundSchema:
  z.ZodType<
    GetIntegrationFieldMapAvailableFieldsRequest$Outbound,
    z.ZodTypeDef,
    GetIntegrationFieldMapAvailableFieldsRequest
  > = z.object({
    fieldMapId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      fieldMapId: "field_map_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetIntegrationFieldMapAvailableFieldsRequest$ {
  /** @deprecated use `GetIntegrationFieldMapAvailableFieldsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetIntegrationFieldMapAvailableFieldsRequest$inboundSchema;
  /** @deprecated use `GetIntegrationFieldMapAvailableFieldsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetIntegrationFieldMapAvailableFieldsRequest$outboundSchema;
  /** @deprecated use `GetIntegrationFieldMapAvailableFieldsRequest$Outbound` instead. */
  export type Outbound = GetIntegrationFieldMapAvailableFieldsRequest$Outbound;
}

export function getIntegrationFieldMapAvailableFieldsRequestToJSON(
  getIntegrationFieldMapAvailableFieldsRequest:
    GetIntegrationFieldMapAvailableFieldsRequest,
): string {
  return JSON.stringify(
    GetIntegrationFieldMapAvailableFieldsRequest$outboundSchema.parse(
      getIntegrationFieldMapAvailableFieldsRequest,
    ),
  );
}

export function getIntegrationFieldMapAvailableFieldsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetIntegrationFieldMapAvailableFieldsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetIntegrationFieldMapAvailableFieldsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetIntegrationFieldMapAvailableFieldsRequest' from JSON`,
  );
}
