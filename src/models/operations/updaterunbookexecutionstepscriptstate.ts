/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateRunbookExecutionStepScriptStateRequest = {
  executionId: string;
  stepId: string;
  state: string;
};

/** @internal */
export const UpdateRunbookExecutionStepScriptStateRequest$inboundSchema:
  z.ZodType<
    UpdateRunbookExecutionStepScriptStateRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    execution_id: z.string(),
    step_id: z.string(),
    state: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "execution_id": "executionId",
      "step_id": "stepId",
    });
  });

/** @internal */
export type UpdateRunbookExecutionStepScriptStateRequest$Outbound = {
  execution_id: string;
  step_id: string;
  state: string;
};

/** @internal */
export const UpdateRunbookExecutionStepScriptStateRequest$outboundSchema:
  z.ZodType<
    UpdateRunbookExecutionStepScriptStateRequest$Outbound,
    z.ZodTypeDef,
    UpdateRunbookExecutionStepScriptStateRequest
  > = z.object({
    executionId: z.string(),
    stepId: z.string(),
    state: z.string(),
  }).transform((v) => {
    return remap$(v, {
      executionId: "execution_id",
      stepId: "step_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRunbookExecutionStepScriptStateRequest$ {
  /** @deprecated use `UpdateRunbookExecutionStepScriptStateRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateRunbookExecutionStepScriptStateRequest$inboundSchema;
  /** @deprecated use `UpdateRunbookExecutionStepScriptStateRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateRunbookExecutionStepScriptStateRequest$outboundSchema;
  /** @deprecated use `UpdateRunbookExecutionStepScriptStateRequest$Outbound` instead. */
  export type Outbound = UpdateRunbookExecutionStepScriptStateRequest$Outbound;
}

export function updateRunbookExecutionStepScriptStateRequestToJSON(
  updateRunbookExecutionStepScriptStateRequest:
    UpdateRunbookExecutionStepScriptStateRequest,
): string {
  return JSON.stringify(
    UpdateRunbookExecutionStepScriptStateRequest$outboundSchema.parse(
      updateRunbookExecutionStepScriptStateRequest,
    ),
  );
}

export function updateRunbookExecutionStepScriptStateRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdateRunbookExecutionStepScriptStateRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateRunbookExecutionStepScriptStateRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdateRunbookExecutionStepScriptStateRequest' from JSON`,
  );
}
