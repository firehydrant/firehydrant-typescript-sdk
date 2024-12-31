/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListStatuspagePagesRequest = {
  /**
   * Connection UUID
   */
  connectionId: string;
};

/** @internal */
export const ListStatuspagePagesRequest$inboundSchema: z.ZodType<
  ListStatuspagePagesRequest,
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
export type ListStatuspagePagesRequest$Outbound = {
  connection_id: string;
};

/** @internal */
export const ListStatuspagePagesRequest$outboundSchema: z.ZodType<
  ListStatuspagePagesRequest$Outbound,
  z.ZodTypeDef,
  ListStatuspagePagesRequest
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
export namespace ListStatuspagePagesRequest$ {
  /** @deprecated use `ListStatuspagePagesRequest$inboundSchema` instead. */
  export const inboundSchema = ListStatuspagePagesRequest$inboundSchema;
  /** @deprecated use `ListStatuspagePagesRequest$outboundSchema` instead. */
  export const outboundSchema = ListStatuspagePagesRequest$outboundSchema;
  /** @deprecated use `ListStatuspagePagesRequest$Outbound` instead. */
  export type Outbound = ListStatuspagePagesRequest$Outbound;
}

export function listStatuspagePagesRequestToJSON(
  listStatuspagePagesRequest: ListStatuspagePagesRequest,
): string {
  return JSON.stringify(
    ListStatuspagePagesRequest$outboundSchema.parse(listStatuspagePagesRequest),
  );
}

export function listStatuspagePagesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListStatuspagePagesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListStatuspagePagesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListStatuspagePagesRequest' from JSON`,
  );
}
