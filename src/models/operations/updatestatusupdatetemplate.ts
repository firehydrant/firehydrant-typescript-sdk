/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateStatusUpdateTemplateRequest = {
  statusUpdateTemplateId: string;
  patchV1StatusUpdateTemplatesStatusUpdateTemplateId:
    components.PatchV1StatusUpdateTemplatesStatusUpdateTemplateId;
};

/** @internal */
export const UpdateStatusUpdateTemplateRequest$inboundSchema: z.ZodType<
  UpdateStatusUpdateTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_update_template_id: z.string(),
  patchV1StatusUpdateTemplatesStatusUpdateTemplateId:
    components.PatchV1StatusUpdateTemplatesStatusUpdateTemplateId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_update_template_id": "statusUpdateTemplateId",
  });
});

/** @internal */
export type UpdateStatusUpdateTemplateRequest$Outbound = {
  status_update_template_id: string;
  patchV1StatusUpdateTemplatesStatusUpdateTemplateId:
    components.PatchV1StatusUpdateTemplatesStatusUpdateTemplateId$Outbound;
};

/** @internal */
export const UpdateStatusUpdateTemplateRequest$outboundSchema: z.ZodType<
  UpdateStatusUpdateTemplateRequest$Outbound,
  z.ZodTypeDef,
  UpdateStatusUpdateTemplateRequest
> = z.object({
  statusUpdateTemplateId: z.string(),
  patchV1StatusUpdateTemplatesStatusUpdateTemplateId:
    components
      .PatchV1StatusUpdateTemplatesStatusUpdateTemplateId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusUpdateTemplateId: "status_update_template_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStatusUpdateTemplateRequest$ {
  /** @deprecated use `UpdateStatusUpdateTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateStatusUpdateTemplateRequest$inboundSchema;
  /** @deprecated use `UpdateStatusUpdateTemplateRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateStatusUpdateTemplateRequest$outboundSchema;
  /** @deprecated use `UpdateStatusUpdateTemplateRequest$Outbound` instead. */
  export type Outbound = UpdateStatusUpdateTemplateRequest$Outbound;
}

export function updateStatusUpdateTemplateRequestToJSON(
  updateStatusUpdateTemplateRequest: UpdateStatusUpdateTemplateRequest,
): string {
  return JSON.stringify(
    UpdateStatusUpdateTemplateRequest$outboundSchema.parse(
      updateStatusUpdateTemplateRequest,
    ),
  );
}

export function updateStatusUpdateTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateStatusUpdateTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateStatusUpdateTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateStatusUpdateTemplateRequest' from JSON`,
  );
}
