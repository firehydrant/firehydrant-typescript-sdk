/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteTicketingPriorityRequest = {
  id: string;
};

/** @internal */
export const DeleteTicketingPriorityRequest$inboundSchema: z.ZodType<
  DeleteTicketingPriorityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteTicketingPriorityRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteTicketingPriorityRequest$outboundSchema: z.ZodType<
  DeleteTicketingPriorityRequest$Outbound,
  z.ZodTypeDef,
  DeleteTicketingPriorityRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTicketingPriorityRequest$ {
  /** @deprecated use `DeleteTicketingPriorityRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteTicketingPriorityRequest$inboundSchema;
  /** @deprecated use `DeleteTicketingPriorityRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteTicketingPriorityRequest$outboundSchema;
  /** @deprecated use `DeleteTicketingPriorityRequest$Outbound` instead. */
  export type Outbound = DeleteTicketingPriorityRequest$Outbound;
}

export function deleteTicketingPriorityRequestToJSON(
  deleteTicketingPriorityRequest: DeleteTicketingPriorityRequest,
): string {
  return JSON.stringify(
    DeleteTicketingPriorityRequest$outboundSchema.parse(
      deleteTicketingPriorityRequest,
    ),
  );
}

export function deleteTicketingPriorityRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTicketingPriorityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTicketingPriorityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTicketingPriorityRequest' from JSON`,
  );
}
