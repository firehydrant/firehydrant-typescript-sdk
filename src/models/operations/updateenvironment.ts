/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateEnvironmentRequest = {
  /**
   * Environment UUID
   */
  environmentId: string;
  patchV1EnvironmentsEnvironmentId: components.PatchV1EnvironmentsEnvironmentId;
};

/** @internal */
export const UpdateEnvironmentRequest$inboundSchema: z.ZodType<
  UpdateEnvironmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  environment_id: z.string(),
  patchV1EnvironmentsEnvironmentId:
    components.PatchV1EnvironmentsEnvironmentId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "environment_id": "environmentId",
  });
});

/** @internal */
export type UpdateEnvironmentRequest$Outbound = {
  environment_id: string;
  patchV1EnvironmentsEnvironmentId:
    components.PatchV1EnvironmentsEnvironmentId$Outbound;
};

/** @internal */
export const UpdateEnvironmentRequest$outboundSchema: z.ZodType<
  UpdateEnvironmentRequest$Outbound,
  z.ZodTypeDef,
  UpdateEnvironmentRequest
> = z.object({
  environmentId: z.string(),
  patchV1EnvironmentsEnvironmentId:
    components.PatchV1EnvironmentsEnvironmentId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    environmentId: "environment_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEnvironmentRequest$ {
  /** @deprecated use `UpdateEnvironmentRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateEnvironmentRequest$inboundSchema;
  /** @deprecated use `UpdateEnvironmentRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateEnvironmentRequest$outboundSchema;
  /** @deprecated use `UpdateEnvironmentRequest$Outbound` instead. */
  export type Outbound = UpdateEnvironmentRequest$Outbound;
}

export function updateEnvironmentRequestToJSON(
  updateEnvironmentRequest: UpdateEnvironmentRequest,
): string {
  return JSON.stringify(
    UpdateEnvironmentRequest$outboundSchema.parse(updateEnvironmentRequest),
  );
}

export function updateEnvironmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEnvironmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEnvironmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEnvironmentRequest' from JSON`,
  );
}
