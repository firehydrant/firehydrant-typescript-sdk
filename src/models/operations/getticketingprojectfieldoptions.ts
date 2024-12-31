/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTicketingProjectFieldOptionsRequest = {
  fieldId: string;
  ticketingProjectId: string;
};

/** @internal */
export const GetTicketingProjectFieldOptionsRequest$inboundSchema: z.ZodType<
  GetTicketingProjectFieldOptionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  field_id: z.string(),
  ticketing_project_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "field_id": "fieldId",
    "ticketing_project_id": "ticketingProjectId",
  });
});

/** @internal */
export type GetTicketingProjectFieldOptionsRequest$Outbound = {
  field_id: string;
  ticketing_project_id: string;
};

/** @internal */
export const GetTicketingProjectFieldOptionsRequest$outboundSchema: z.ZodType<
  GetTicketingProjectFieldOptionsRequest$Outbound,
  z.ZodTypeDef,
  GetTicketingProjectFieldOptionsRequest
> = z.object({
  fieldId: z.string(),
  ticketingProjectId: z.string(),
}).transform((v) => {
  return remap$(v, {
    fieldId: "field_id",
    ticketingProjectId: "ticketing_project_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTicketingProjectFieldOptionsRequest$ {
  /** @deprecated use `GetTicketingProjectFieldOptionsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetTicketingProjectFieldOptionsRequest$inboundSchema;
  /** @deprecated use `GetTicketingProjectFieldOptionsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetTicketingProjectFieldOptionsRequest$outboundSchema;
  /** @deprecated use `GetTicketingProjectFieldOptionsRequest$Outbound` instead. */
  export type Outbound = GetTicketingProjectFieldOptionsRequest$Outbound;
}

export function getTicketingProjectFieldOptionsRequestToJSON(
  getTicketingProjectFieldOptionsRequest:
    GetTicketingProjectFieldOptionsRequest,
): string {
  return JSON.stringify(
    GetTicketingProjectFieldOptionsRequest$outboundSchema.parse(
      getTicketingProjectFieldOptionsRequest,
    ),
  );
}

export function getTicketingProjectFieldOptionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTicketingProjectFieldOptionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetTicketingProjectFieldOptionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTicketingProjectFieldOptionsRequest' from JSON`,
  );
}
