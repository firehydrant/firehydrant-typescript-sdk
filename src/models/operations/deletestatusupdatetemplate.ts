/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteStatusUpdateTemplateRequest = {
  statusUpdateTemplateId: string;
};

/** @internal */
export const DeleteStatusUpdateTemplateRequest$inboundSchema: z.ZodType<
  DeleteStatusUpdateTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_update_template_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "status_update_template_id": "statusUpdateTemplateId",
  });
});

/** @internal */
export type DeleteStatusUpdateTemplateRequest$Outbound = {
  status_update_template_id: string;
};

/** @internal */
export const DeleteStatusUpdateTemplateRequest$outboundSchema: z.ZodType<
  DeleteStatusUpdateTemplateRequest$Outbound,
  z.ZodTypeDef,
  DeleteStatusUpdateTemplateRequest
> = z.object({
  statusUpdateTemplateId: z.string(),
}).transform((v) => {
  return remap$(v, {
    statusUpdateTemplateId: "status_update_template_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteStatusUpdateTemplateRequest$ {
  /** @deprecated use `DeleteStatusUpdateTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteStatusUpdateTemplateRequest$inboundSchema;
  /** @deprecated use `DeleteStatusUpdateTemplateRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteStatusUpdateTemplateRequest$outboundSchema;
  /** @deprecated use `DeleteStatusUpdateTemplateRequest$Outbound` instead. */
  export type Outbound = DeleteStatusUpdateTemplateRequest$Outbound;
}

export function deleteStatusUpdateTemplateRequestToJSON(
  deleteStatusUpdateTemplateRequest: DeleteStatusUpdateTemplateRequest,
): string {
  return JSON.stringify(
    DeleteStatusUpdateTemplateRequest$outboundSchema.parse(
      deleteStatusUpdateTemplateRequest,
    ),
  );
}

export function deleteStatusUpdateTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteStatusUpdateTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteStatusUpdateTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteStatusUpdateTemplateRequest' from JSON`,
  );
}
