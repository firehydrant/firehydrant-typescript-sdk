/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeletePriorityRequest = {
  prioritySlug: string;
};

/** @internal */
export const DeletePriorityRequest$inboundSchema: z.ZodType<
  DeletePriorityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  priority_slug: z.string(),
}).transform((v) => {
  return remap$(v, {
    "priority_slug": "prioritySlug",
  });
});

/** @internal */
export type DeletePriorityRequest$Outbound = {
  priority_slug: string;
};

/** @internal */
export const DeletePriorityRequest$outboundSchema: z.ZodType<
  DeletePriorityRequest$Outbound,
  z.ZodTypeDef,
  DeletePriorityRequest
> = z.object({
  prioritySlug: z.string(),
}).transform((v) => {
  return remap$(v, {
    prioritySlug: "priority_slug",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePriorityRequest$ {
  /** @deprecated use `DeletePriorityRequest$inboundSchema` instead. */
  export const inboundSchema = DeletePriorityRequest$inboundSchema;
  /** @deprecated use `DeletePriorityRequest$outboundSchema` instead. */
  export const outboundSchema = DeletePriorityRequest$outboundSchema;
  /** @deprecated use `DeletePriorityRequest$Outbound` instead. */
  export type Outbound = DeletePriorityRequest$Outbound;
}

export function deletePriorityRequestToJSON(
  deletePriorityRequest: DeletePriorityRequest,
): string {
  return JSON.stringify(
    DeletePriorityRequest$outboundSchema.parse(deletePriorityRequest),
  );
}

export function deletePriorityRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeletePriorityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeletePriorityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeletePriorityRequest' from JSON`,
  );
}
