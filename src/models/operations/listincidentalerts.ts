/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListIncidentAlertsRequest = {
  incidentId: string;
};

/** @internal */
export const ListIncidentAlertsRequest$inboundSchema: z.ZodType<
  ListIncidentAlertsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "incident_id": "incidentId",
  });
});

/** @internal */
export type ListIncidentAlertsRequest$Outbound = {
  incident_id: string;
};

/** @internal */
export const ListIncidentAlertsRequest$outboundSchema: z.ZodType<
  ListIncidentAlertsRequest$Outbound,
  z.ZodTypeDef,
  ListIncidentAlertsRequest
> = z.object({
  incidentId: z.string(),
}).transform((v) => {
  return remap$(v, {
    incidentId: "incident_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIncidentAlertsRequest$ {
  /** @deprecated use `ListIncidentAlertsRequest$inboundSchema` instead. */
  export const inboundSchema = ListIncidentAlertsRequest$inboundSchema;
  /** @deprecated use `ListIncidentAlertsRequest$outboundSchema` instead. */
  export const outboundSchema = ListIncidentAlertsRequest$outboundSchema;
  /** @deprecated use `ListIncidentAlertsRequest$Outbound` instead. */
  export type Outbound = ListIncidentAlertsRequest$Outbound;
}

export function listIncidentAlertsRequestToJSON(
  listIncidentAlertsRequest: ListIncidentAlertsRequest,
): string {
  return JSON.stringify(
    ListIncidentAlertsRequest$outboundSchema.parse(listIncidentAlertsRequest),
  );
}

export function listIncidentAlertsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListIncidentAlertsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIncidentAlertsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIncidentAlertsRequest' from JSON`,
  );
}
