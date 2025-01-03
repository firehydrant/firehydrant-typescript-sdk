/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetRunbookExecutionVoteStatusRequest = {
  executionId: string;
};

/** @internal */
export const GetRunbookExecutionVoteStatusRequest$inboundSchema: z.ZodType<
  GetRunbookExecutionVoteStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  execution_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "execution_id": "executionId",
  });
});

/** @internal */
export type GetRunbookExecutionVoteStatusRequest$Outbound = {
  execution_id: string;
};

/** @internal */
export const GetRunbookExecutionVoteStatusRequest$outboundSchema: z.ZodType<
  GetRunbookExecutionVoteStatusRequest$Outbound,
  z.ZodTypeDef,
  GetRunbookExecutionVoteStatusRequest
> = z.object({
  executionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    executionId: "execution_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRunbookExecutionVoteStatusRequest$ {
  /** @deprecated use `GetRunbookExecutionVoteStatusRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetRunbookExecutionVoteStatusRequest$inboundSchema;
  /** @deprecated use `GetRunbookExecutionVoteStatusRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetRunbookExecutionVoteStatusRequest$outboundSchema;
  /** @deprecated use `GetRunbookExecutionVoteStatusRequest$Outbound` instead. */
  export type Outbound = GetRunbookExecutionVoteStatusRequest$Outbound;
}

export function getRunbookExecutionVoteStatusRequestToJSON(
  getRunbookExecutionVoteStatusRequest: GetRunbookExecutionVoteStatusRequest,
): string {
  return JSON.stringify(
    GetRunbookExecutionVoteStatusRequest$outboundSchema.parse(
      getRunbookExecutionVoteStatusRequest,
    ),
  );
}

export function getRunbookExecutionVoteStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRunbookExecutionVoteStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetRunbookExecutionVoteStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRunbookExecutionVoteStatusRequest' from JSON`,
  );
}
