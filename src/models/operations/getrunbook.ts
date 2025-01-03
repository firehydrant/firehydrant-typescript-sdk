/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetRunbookRequest = {
  runbookId: string;
};

/** @internal */
export const GetRunbookRequest$inboundSchema: z.ZodType<
  GetRunbookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  runbook_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "runbook_id": "runbookId",
  });
});

/** @internal */
export type GetRunbookRequest$Outbound = {
  runbook_id: string;
};

/** @internal */
export const GetRunbookRequest$outboundSchema: z.ZodType<
  GetRunbookRequest$Outbound,
  z.ZodTypeDef,
  GetRunbookRequest
> = z.object({
  runbookId: z.string(),
}).transform((v) => {
  return remap$(v, {
    runbookId: "runbook_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRunbookRequest$ {
  /** @deprecated use `GetRunbookRequest$inboundSchema` instead. */
  export const inboundSchema = GetRunbookRequest$inboundSchema;
  /** @deprecated use `GetRunbookRequest$outboundSchema` instead. */
  export const outboundSchema = GetRunbookRequest$outboundSchema;
  /** @deprecated use `GetRunbookRequest$Outbound` instead. */
  export type Outbound = GetRunbookRequest$Outbound;
}

export function getRunbookRequestToJSON(
  getRunbookRequest: GetRunbookRequest,
): string {
  return JSON.stringify(
    GetRunbookRequest$outboundSchema.parse(getRunbookRequest),
  );
}

export function getRunbookRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRunbookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRunbookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRunbookRequest' from JSON`,
  );
}
