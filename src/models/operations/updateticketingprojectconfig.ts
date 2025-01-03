/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateTicketingProjectConfigRequest = {
  ticketingProjectId: string;
  configId: string;
};

/** @internal */
export const UpdateTicketingProjectConfigRequest$inboundSchema: z.ZodType<
  UpdateTicketingProjectConfigRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ticketing_project_id: z.string(),
  config_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "ticketing_project_id": "ticketingProjectId",
    "config_id": "configId",
  });
});

/** @internal */
export type UpdateTicketingProjectConfigRequest$Outbound = {
  ticketing_project_id: string;
  config_id: string;
};

/** @internal */
export const UpdateTicketingProjectConfigRequest$outboundSchema: z.ZodType<
  UpdateTicketingProjectConfigRequest$Outbound,
  z.ZodTypeDef,
  UpdateTicketingProjectConfigRequest
> = z.object({
  ticketingProjectId: z.string(),
  configId: z.string(),
}).transform((v) => {
  return remap$(v, {
    ticketingProjectId: "ticketing_project_id",
    configId: "config_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTicketingProjectConfigRequest$ {
  /** @deprecated use `UpdateTicketingProjectConfigRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateTicketingProjectConfigRequest$inboundSchema;
  /** @deprecated use `UpdateTicketingProjectConfigRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateTicketingProjectConfigRequest$outboundSchema;
  /** @deprecated use `UpdateTicketingProjectConfigRequest$Outbound` instead. */
  export type Outbound = UpdateTicketingProjectConfigRequest$Outbound;
}

export function updateTicketingProjectConfigRequestToJSON(
  updateTicketingProjectConfigRequest: UpdateTicketingProjectConfigRequest,
): string {
  return JSON.stringify(
    UpdateTicketingProjectConfigRequest$outboundSchema.parse(
      updateTicketingProjectConfigRequest,
    ),
  );
}

export function updateTicketingProjectConfigRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateTicketingProjectConfigRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateTicketingProjectConfigRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateTicketingProjectConfigRequest' from JSON`,
  );
}
