/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateAwsConnectionRequest = {
  id: string;
  patchV1IntegrationsAwsConnectionsId:
    components.PatchV1IntegrationsAwsConnectionsId;
};

/** @internal */
export const UpdateAwsConnectionRequest$inboundSchema: z.ZodType<
  UpdateAwsConnectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  patchV1IntegrationsAwsConnectionsId:
    components.PatchV1IntegrationsAwsConnectionsId$inboundSchema,
});

/** @internal */
export type UpdateAwsConnectionRequest$Outbound = {
  id: string;
  patchV1IntegrationsAwsConnectionsId:
    components.PatchV1IntegrationsAwsConnectionsId$Outbound;
};

/** @internal */
export const UpdateAwsConnectionRequest$outboundSchema: z.ZodType<
  UpdateAwsConnectionRequest$Outbound,
  z.ZodTypeDef,
  UpdateAwsConnectionRequest
> = z.object({
  id: z.string(),
  patchV1IntegrationsAwsConnectionsId:
    components.PatchV1IntegrationsAwsConnectionsId$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAwsConnectionRequest$ {
  /** @deprecated use `UpdateAwsConnectionRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAwsConnectionRequest$inboundSchema;
  /** @deprecated use `UpdateAwsConnectionRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAwsConnectionRequest$outboundSchema;
  /** @deprecated use `UpdateAwsConnectionRequest$Outbound` instead. */
  export type Outbound = UpdateAwsConnectionRequest$Outbound;
}

export function updateAwsConnectionRequestToJSON(
  updateAwsConnectionRequest: UpdateAwsConnectionRequest,
): string {
  return JSON.stringify(
    UpdateAwsConnectionRequest$outboundSchema.parse(updateAwsConnectionRequest),
  );
}

export function updateAwsConnectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAwsConnectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAwsConnectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAwsConnectionRequest' from JSON`,
  );
}
