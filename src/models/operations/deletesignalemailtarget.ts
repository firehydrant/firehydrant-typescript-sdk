/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteSignalEmailTargetRequest = {
  id: string;
};

/** @internal */
export const DeleteSignalEmailTargetRequest$inboundSchema: z.ZodType<
  DeleteSignalEmailTargetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteSignalEmailTargetRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteSignalEmailTargetRequest$outboundSchema: z.ZodType<
  DeleteSignalEmailTargetRequest$Outbound,
  z.ZodTypeDef,
  DeleteSignalEmailTargetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSignalEmailTargetRequest$ {
  /** @deprecated use `DeleteSignalEmailTargetRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteSignalEmailTargetRequest$inboundSchema;
  /** @deprecated use `DeleteSignalEmailTargetRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteSignalEmailTargetRequest$outboundSchema;
  /** @deprecated use `DeleteSignalEmailTargetRequest$Outbound` instead. */
  export type Outbound = DeleteSignalEmailTargetRequest$Outbound;
}

export function deleteSignalEmailTargetRequestToJSON(
  deleteSignalEmailTargetRequest: DeleteSignalEmailTargetRequest,
): string {
  return JSON.stringify(
    DeleteSignalEmailTargetRequest$outboundSchema.parse(
      deleteSignalEmailTargetRequest,
    ),
  );
}

export function deleteSignalEmailTargetRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteSignalEmailTargetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteSignalEmailTargetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteSignalEmailTargetRequest' from JSON`,
  );
}
