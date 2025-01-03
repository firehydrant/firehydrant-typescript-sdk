/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetFunctionalityRequest = {
  functionalityId: string;
};

/** @internal */
export const GetFunctionalityRequest$inboundSchema: z.ZodType<
  GetFunctionalityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  functionality_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "functionality_id": "functionalityId",
  });
});

/** @internal */
export type GetFunctionalityRequest$Outbound = {
  functionality_id: string;
};

/** @internal */
export const GetFunctionalityRequest$outboundSchema: z.ZodType<
  GetFunctionalityRequest$Outbound,
  z.ZodTypeDef,
  GetFunctionalityRequest
> = z.object({
  functionalityId: z.string(),
}).transform((v) => {
  return remap$(v, {
    functionalityId: "functionality_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFunctionalityRequest$ {
  /** @deprecated use `GetFunctionalityRequest$inboundSchema` instead. */
  export const inboundSchema = GetFunctionalityRequest$inboundSchema;
  /** @deprecated use `GetFunctionalityRequest$outboundSchema` instead. */
  export const outboundSchema = GetFunctionalityRequest$outboundSchema;
  /** @deprecated use `GetFunctionalityRequest$Outbound` instead. */
  export type Outbound = GetFunctionalityRequest$Outbound;
}

export function getFunctionalityRequestToJSON(
  getFunctionalityRequest: GetFunctionalityRequest,
): string {
  return JSON.stringify(
    GetFunctionalityRequest$outboundSchema.parse(getFunctionalityRequest),
  );
}

export function getFunctionalityRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetFunctionalityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFunctionalityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFunctionalityRequest' from JSON`,
  );
}
