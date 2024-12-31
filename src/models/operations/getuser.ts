/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetUserRequest = {
  id: string;
};

/** @internal */
export const GetUserRequest$inboundSchema: z.ZodType<
  GetUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetUserRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetUserRequest$outboundSchema: z.ZodType<
  GetUserRequest$Outbound,
  z.ZodTypeDef,
  GetUserRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserRequest$ {
  /** @deprecated use `GetUserRequest$inboundSchema` instead. */
  export const inboundSchema = GetUserRequest$inboundSchema;
  /** @deprecated use `GetUserRequest$outboundSchema` instead. */
  export const outboundSchema = GetUserRequest$outboundSchema;
  /** @deprecated use `GetUserRequest$Outbound` instead. */
  export type Outbound = GetUserRequest$Outbound;
}

export function getUserRequestToJSON(getUserRequest: GetUserRequest): string {
  return JSON.stringify(GetUserRequest$outboundSchema.parse(getUserRequest));
}

export function getUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUserRequest' from JSON`,
  );
}
