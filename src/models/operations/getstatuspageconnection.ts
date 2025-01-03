/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetStatuspageConnectionRequest = {
  /**
   * Connection UUID
   */
  connectionId: string;
};

/** @internal */
export const GetStatuspageConnectionRequest$inboundSchema: z.ZodType<
  GetStatuspageConnectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type GetStatuspageConnectionRequest$Outbound = {
  connection_id: string;
};

/** @internal */
export const GetStatuspageConnectionRequest$outboundSchema: z.ZodType<
  GetStatuspageConnectionRequest$Outbound,
  z.ZodTypeDef,
  GetStatuspageConnectionRequest
> = z.object({
  connectionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStatuspageConnectionRequest$ {
  /** @deprecated use `GetStatuspageConnectionRequest$inboundSchema` instead. */
  export const inboundSchema = GetStatuspageConnectionRequest$inboundSchema;
  /** @deprecated use `GetStatuspageConnectionRequest$outboundSchema` instead. */
  export const outboundSchema = GetStatuspageConnectionRequest$outboundSchema;
  /** @deprecated use `GetStatuspageConnectionRequest$Outbound` instead. */
  export type Outbound = GetStatuspageConnectionRequest$Outbound;
}

export function getStatuspageConnectionRequestToJSON(
  getStatuspageConnectionRequest: GetStatuspageConnectionRequest,
): string {
  return JSON.stringify(
    GetStatuspageConnectionRequest$outboundSchema.parse(
      getStatuspageConnectionRequest,
    ),
  );
}

export function getStatuspageConnectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetStatuspageConnectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStatuspageConnectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStatuspageConnectionRequest' from JSON`,
  );
}
