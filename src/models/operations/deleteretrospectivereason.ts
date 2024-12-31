/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteRetrospectiveReasonRequest = {
  reportId: string;
  reasonId: string;
};

/** @internal */
export const DeleteRetrospectiveReasonRequest$inboundSchema: z.ZodType<
  DeleteRetrospectiveReasonRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  report_id: z.string(),
  reason_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "report_id": "reportId",
    "reason_id": "reasonId",
  });
});

/** @internal */
export type DeleteRetrospectiveReasonRequest$Outbound = {
  report_id: string;
  reason_id: string;
};

/** @internal */
export const DeleteRetrospectiveReasonRequest$outboundSchema: z.ZodType<
  DeleteRetrospectiveReasonRequest$Outbound,
  z.ZodTypeDef,
  DeleteRetrospectiveReasonRequest
> = z.object({
  reportId: z.string(),
  reasonId: z.string(),
}).transform((v) => {
  return remap$(v, {
    reportId: "report_id",
    reasonId: "reason_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRetrospectiveReasonRequest$ {
  /** @deprecated use `DeleteRetrospectiveReasonRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteRetrospectiveReasonRequest$inboundSchema;
  /** @deprecated use `DeleteRetrospectiveReasonRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteRetrospectiveReasonRequest$outboundSchema;
  /** @deprecated use `DeleteRetrospectiveReasonRequest$Outbound` instead. */
  export type Outbound = DeleteRetrospectiveReasonRequest$Outbound;
}

export function deleteRetrospectiveReasonRequestToJSON(
  deleteRetrospectiveReasonRequest: DeleteRetrospectiveReasonRequest,
): string {
  return JSON.stringify(
    DeleteRetrospectiveReasonRequest$outboundSchema.parse(
      deleteRetrospectiveReasonRequest,
    ),
  );
}

export function deleteRetrospectiveReasonRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRetrospectiveReasonRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRetrospectiveReasonRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRetrospectiveReasonRequest' from JSON`,
  );
}
