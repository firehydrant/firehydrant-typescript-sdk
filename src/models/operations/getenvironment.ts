/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetEnvironmentRequest = {
  /**
   * Environment UUID
   */
  environmentId: string;
};

/** @internal */
export const GetEnvironmentRequest$inboundSchema: z.ZodType<
  GetEnvironmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  environment_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "environment_id": "environmentId",
  });
});

/** @internal */
export type GetEnvironmentRequest$Outbound = {
  environment_id: string;
};

/** @internal */
export const GetEnvironmentRequest$outboundSchema: z.ZodType<
  GetEnvironmentRequest$Outbound,
  z.ZodTypeDef,
  GetEnvironmentRequest
> = z.object({
  environmentId: z.string(),
}).transform((v) => {
  return remap$(v, {
    environmentId: "environment_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEnvironmentRequest$ {
  /** @deprecated use `GetEnvironmentRequest$inboundSchema` instead. */
  export const inboundSchema = GetEnvironmentRequest$inboundSchema;
  /** @deprecated use `GetEnvironmentRequest$outboundSchema` instead. */
  export const outboundSchema = GetEnvironmentRequest$outboundSchema;
  /** @deprecated use `GetEnvironmentRequest$Outbound` instead. */
  export type Outbound = GetEnvironmentRequest$Outbound;
}

export function getEnvironmentRequestToJSON(
  getEnvironmentRequest: GetEnvironmentRequest,
): string {
  return JSON.stringify(
    GetEnvironmentRequest$outboundSchema.parse(getEnvironmentRequest),
  );
}

export function getEnvironmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetEnvironmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEnvironmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEnvironmentRequest' from JSON`,
  );
}
