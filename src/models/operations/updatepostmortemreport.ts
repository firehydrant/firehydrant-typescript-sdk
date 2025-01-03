/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdatePostMortemReportRequest = {
  reportId: string;
  patchV1PostMortemsReportsReportId:
    components.PatchV1PostMortemsReportsReportId;
};

/** @internal */
export const UpdatePostMortemReportRequest$inboundSchema: z.ZodType<
  UpdatePostMortemReportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  report_id: z.string(),
  patchV1PostMortemsReportsReportId:
    components.PatchV1PostMortemsReportsReportId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "report_id": "reportId",
  });
});

/** @internal */
export type UpdatePostMortemReportRequest$Outbound = {
  report_id: string;
  patchV1PostMortemsReportsReportId:
    components.PatchV1PostMortemsReportsReportId$Outbound;
};

/** @internal */
export const UpdatePostMortemReportRequest$outboundSchema: z.ZodType<
  UpdatePostMortemReportRequest$Outbound,
  z.ZodTypeDef,
  UpdatePostMortemReportRequest
> = z.object({
  reportId: z.string(),
  patchV1PostMortemsReportsReportId:
    components.PatchV1PostMortemsReportsReportId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    reportId: "report_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePostMortemReportRequest$ {
  /** @deprecated use `UpdatePostMortemReportRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePostMortemReportRequest$inboundSchema;
  /** @deprecated use `UpdatePostMortemReportRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePostMortemReportRequest$outboundSchema;
  /** @deprecated use `UpdatePostMortemReportRequest$Outbound` instead. */
  export type Outbound = UpdatePostMortemReportRequest$Outbound;
}

export function updatePostMortemReportRequestToJSON(
  updatePostMortemReportRequest: UpdatePostMortemReportRequest,
): string {
  return JSON.stringify(
    UpdatePostMortemReportRequest$outboundSchema.parse(
      updatePostMortemReportRequest,
    ),
  );
}

export function updatePostMortemReportRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdatePostMortemReportRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdatePostMortemReportRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdatePostMortemReportRequest' from JSON`,
  );
}
