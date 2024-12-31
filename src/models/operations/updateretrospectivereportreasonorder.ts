/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateRetrospectiveReportReasonOrderRequest = {
  reportId: string;
  putV1PostMortemsReportsReportIdReasonsOrder:
    components.PutV1PostMortemsReportsReportIdReasonsOrder;
};

/** @internal */
export const UpdateRetrospectiveReportReasonOrderRequest$inboundSchema:
  z.ZodType<
    UpdateRetrospectiveReportReasonOrderRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    report_id: z.string(),
    putV1PostMortemsReportsReportIdReasonsOrder:
      components.PutV1PostMortemsReportsReportIdReasonsOrder$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "report_id": "reportId",
    });
  });

/** @internal */
export type UpdateRetrospectiveReportReasonOrderRequest$Outbound = {
  report_id: string;
  putV1PostMortemsReportsReportIdReasonsOrder:
    components.PutV1PostMortemsReportsReportIdReasonsOrder$Outbound;
};

/** @internal */
export const UpdateRetrospectiveReportReasonOrderRequest$outboundSchema:
  z.ZodType<
    UpdateRetrospectiveReportReasonOrderRequest$Outbound,
    z.ZodTypeDef,
    UpdateRetrospectiveReportReasonOrderRequest
  > = z.object({
    reportId: z.string(),
    putV1PostMortemsReportsReportIdReasonsOrder:
      components.PutV1PostMortemsReportsReportIdReasonsOrder$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      reportId: "report_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRetrospectiveReportReasonOrderRequest$ {
  /** @deprecated use `UpdateRetrospectiveReportReasonOrderRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateRetrospectiveReportReasonOrderRequest$inboundSchema;
  /** @deprecated use `UpdateRetrospectiveReportReasonOrderRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateRetrospectiveReportReasonOrderRequest$outboundSchema;
  /** @deprecated use `UpdateRetrospectiveReportReasonOrderRequest$Outbound` instead. */
  export type Outbound = UpdateRetrospectiveReportReasonOrderRequest$Outbound;
}

export function updateRetrospectiveReportReasonOrderRequestToJSON(
  updateRetrospectiveReportReasonOrderRequest:
    UpdateRetrospectiveReportReasonOrderRequest,
): string {
  return JSON.stringify(
    UpdateRetrospectiveReportReasonOrderRequest$outboundSchema.parse(
      updateRetrospectiveReportReasonOrderRequest,
    ),
  );
}

export function updateRetrospectiveReportReasonOrderRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdateRetrospectiveReportReasonOrderRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateRetrospectiveReportReasonOrderRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdateRetrospectiveReportReasonOrderRequest' from JSON`,
  );
}
