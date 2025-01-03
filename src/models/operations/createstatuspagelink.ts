/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateStatusPageLinkRequest = {
  nuncConnectionId: string;
};

/** @internal */
export const CreateStatusPageLinkRequest$inboundSchema: z.ZodType<
  CreateStatusPageLinkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  nunc_connection_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "nunc_connection_id": "nuncConnectionId",
  });
});

/** @internal */
export type CreateStatusPageLinkRequest$Outbound = {
  nunc_connection_id: string;
};

/** @internal */
export const CreateStatusPageLinkRequest$outboundSchema: z.ZodType<
  CreateStatusPageLinkRequest$Outbound,
  z.ZodTypeDef,
  CreateStatusPageLinkRequest
> = z.object({
  nuncConnectionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    nuncConnectionId: "nunc_connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateStatusPageLinkRequest$ {
  /** @deprecated use `CreateStatusPageLinkRequest$inboundSchema` instead. */
  export const inboundSchema = CreateStatusPageLinkRequest$inboundSchema;
  /** @deprecated use `CreateStatusPageLinkRequest$outboundSchema` instead. */
  export const outboundSchema = CreateStatusPageLinkRequest$outboundSchema;
  /** @deprecated use `CreateStatusPageLinkRequest$Outbound` instead. */
  export type Outbound = CreateStatusPageLinkRequest$Outbound;
}

export function createStatusPageLinkRequestToJSON(
  createStatusPageLinkRequest: CreateStatusPageLinkRequest,
): string {
  return JSON.stringify(
    CreateStatusPageLinkRequest$outboundSchema.parse(
      createStatusPageLinkRequest,
    ),
  );
}

export function createStatusPageLinkRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateStatusPageLinkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateStatusPageLinkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateStatusPageLinkRequest' from JSON`,
  );
}
