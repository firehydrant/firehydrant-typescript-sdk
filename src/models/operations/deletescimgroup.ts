/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteScimGroupRequest = {
  id: string;
};

/** @internal */
export const DeleteScimGroupRequest$inboundSchema: z.ZodType<
  DeleteScimGroupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteScimGroupRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteScimGroupRequest$outboundSchema: z.ZodType<
  DeleteScimGroupRequest$Outbound,
  z.ZodTypeDef,
  DeleteScimGroupRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteScimGroupRequest$ {
  /** @deprecated use `DeleteScimGroupRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteScimGroupRequest$inboundSchema;
  /** @deprecated use `DeleteScimGroupRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteScimGroupRequest$outboundSchema;
  /** @deprecated use `DeleteScimGroupRequest$Outbound` instead. */
  export type Outbound = DeleteScimGroupRequest$Outbound;
}

export function deleteScimGroupRequestToJSON(
  deleteScimGroupRequest: DeleteScimGroupRequest,
): string {
  return JSON.stringify(
    DeleteScimGroupRequest$outboundSchema.parse(deleteScimGroupRequest),
  );
}

export function deleteScimGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteScimGroupRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteScimGroupRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteScimGroupRequest' from JSON`,
  );
}
