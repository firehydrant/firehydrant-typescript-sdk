/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTicketRequest = {
  ticketId: string;
};

/** @internal */
export const GetTicketRequest$inboundSchema: z.ZodType<
  GetTicketRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ticket_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "ticket_id": "ticketId",
  });
});

/** @internal */
export type GetTicketRequest$Outbound = {
  ticket_id: string;
};

/** @internal */
export const GetTicketRequest$outboundSchema: z.ZodType<
  GetTicketRequest$Outbound,
  z.ZodTypeDef,
  GetTicketRequest
> = z.object({
  ticketId: z.string(),
}).transform((v) => {
  return remap$(v, {
    ticketId: "ticket_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTicketRequest$ {
  /** @deprecated use `GetTicketRequest$inboundSchema` instead. */
  export const inboundSchema = GetTicketRequest$inboundSchema;
  /** @deprecated use `GetTicketRequest$outboundSchema` instead. */
  export const outboundSchema = GetTicketRequest$outboundSchema;
  /** @deprecated use `GetTicketRequest$Outbound` instead. */
  export type Outbound = GetTicketRequest$Outbound;
}

export function getTicketRequestToJSON(
  getTicketRequest: GetTicketRequest,
): string {
  return JSON.stringify(
    GetTicketRequest$outboundSchema.parse(getTicketRequest),
  );
}

export function getTicketRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTicketRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTicketRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTicketRequest' from JSON`,
  );
}
