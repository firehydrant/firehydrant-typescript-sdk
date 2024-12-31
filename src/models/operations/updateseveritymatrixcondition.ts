/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateSeverityMatrixConditionRequest = {
  conditionId: string;
  patchV1SeverityMatrixConditionsConditionId:
    components.PatchV1SeverityMatrixConditionsConditionId;
};

/** @internal */
export const UpdateSeverityMatrixConditionRequest$inboundSchema: z.ZodType<
  UpdateSeverityMatrixConditionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  condition_id: z.string(),
  patchV1SeverityMatrixConditionsConditionId:
    components.PatchV1SeverityMatrixConditionsConditionId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "condition_id": "conditionId",
  });
});

/** @internal */
export type UpdateSeverityMatrixConditionRequest$Outbound = {
  condition_id: string;
  patchV1SeverityMatrixConditionsConditionId:
    components.PatchV1SeverityMatrixConditionsConditionId$Outbound;
};

/** @internal */
export const UpdateSeverityMatrixConditionRequest$outboundSchema: z.ZodType<
  UpdateSeverityMatrixConditionRequest$Outbound,
  z.ZodTypeDef,
  UpdateSeverityMatrixConditionRequest
> = z.object({
  conditionId: z.string(),
  patchV1SeverityMatrixConditionsConditionId:
    components.PatchV1SeverityMatrixConditionsConditionId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    conditionId: "condition_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSeverityMatrixConditionRequest$ {
  /** @deprecated use `UpdateSeverityMatrixConditionRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateSeverityMatrixConditionRequest$inboundSchema;
  /** @deprecated use `UpdateSeverityMatrixConditionRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateSeverityMatrixConditionRequest$outboundSchema;
  /** @deprecated use `UpdateSeverityMatrixConditionRequest$Outbound` instead. */
  export type Outbound = UpdateSeverityMatrixConditionRequest$Outbound;
}

export function updateSeverityMatrixConditionRequestToJSON(
  updateSeverityMatrixConditionRequest: UpdateSeverityMatrixConditionRequest,
): string {
  return JSON.stringify(
    UpdateSeverityMatrixConditionRequest$outboundSchema.parse(
      updateSeverityMatrixConditionRequest,
    ),
  );
}

export function updateSeverityMatrixConditionRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSeverityMatrixConditionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateSeverityMatrixConditionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSeverityMatrixConditionRequest' from JSON`,
  );
}
