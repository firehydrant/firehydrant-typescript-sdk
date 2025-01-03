/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMeasurementDefinitionRequest = {
  measurementDefinitionId: string;
};

/** @internal */
export const GetMeasurementDefinitionRequest$inboundSchema: z.ZodType<
  GetMeasurementDefinitionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  measurement_definition_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "measurement_definition_id": "measurementDefinitionId",
  });
});

/** @internal */
export type GetMeasurementDefinitionRequest$Outbound = {
  measurement_definition_id: string;
};

/** @internal */
export const GetMeasurementDefinitionRequest$outboundSchema: z.ZodType<
  GetMeasurementDefinitionRequest$Outbound,
  z.ZodTypeDef,
  GetMeasurementDefinitionRequest
> = z.object({
  measurementDefinitionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    measurementDefinitionId: "measurement_definition_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMeasurementDefinitionRequest$ {
  /** @deprecated use `GetMeasurementDefinitionRequest$inboundSchema` instead. */
  export const inboundSchema = GetMeasurementDefinitionRequest$inboundSchema;
  /** @deprecated use `GetMeasurementDefinitionRequest$outboundSchema` instead. */
  export const outboundSchema = GetMeasurementDefinitionRequest$outboundSchema;
  /** @deprecated use `GetMeasurementDefinitionRequest$Outbound` instead. */
  export type Outbound = GetMeasurementDefinitionRequest$Outbound;
}

export function getMeasurementDefinitionRequestToJSON(
  getMeasurementDefinitionRequest: GetMeasurementDefinitionRequest,
): string {
  return JSON.stringify(
    GetMeasurementDefinitionRequest$outboundSchema.parse(
      getMeasurementDefinitionRequest,
    ),
  );
}

export function getMeasurementDefinitionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMeasurementDefinitionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMeasurementDefinitionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMeasurementDefinitionRequest' from JSON`,
  );
}
