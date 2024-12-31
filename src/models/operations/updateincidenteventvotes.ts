/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateIncidentEventVotesRequest = {
  incidentId: string;
  eventId: string;
  patchV1IncidentsIncidentIdEventsEventIdVotes:
    components.PatchV1IncidentsIncidentIdEventsEventIdVotes;
};

/** @internal */
export const UpdateIncidentEventVotesRequest$inboundSchema: z.ZodType<
  UpdateIncidentEventVotesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_id: z.string(),
  event_id: z.string(),
  patchV1IncidentsIncidentIdEventsEventIdVotes:
    components.PatchV1IncidentsIncidentIdEventsEventIdVotes$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "incident_id": "incidentId",
    "event_id": "eventId",
  });
});

/** @internal */
export type UpdateIncidentEventVotesRequest$Outbound = {
  incident_id: string;
  event_id: string;
  patchV1IncidentsIncidentIdEventsEventIdVotes:
    components.PatchV1IncidentsIncidentIdEventsEventIdVotes$Outbound;
};

/** @internal */
export const UpdateIncidentEventVotesRequest$outboundSchema: z.ZodType<
  UpdateIncidentEventVotesRequest$Outbound,
  z.ZodTypeDef,
  UpdateIncidentEventVotesRequest
> = z.object({
  incidentId: z.string(),
  eventId: z.string(),
  patchV1IncidentsIncidentIdEventsEventIdVotes:
    components.PatchV1IncidentsIncidentIdEventsEventIdVotes$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    incidentId: "incident_id",
    eventId: "event_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateIncidentEventVotesRequest$ {
  /** @deprecated use `UpdateIncidentEventVotesRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateIncidentEventVotesRequest$inboundSchema;
  /** @deprecated use `UpdateIncidentEventVotesRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateIncidentEventVotesRequest$outboundSchema;
  /** @deprecated use `UpdateIncidentEventVotesRequest$Outbound` instead. */
  export type Outbound = UpdateIncidentEventVotesRequest$Outbound;
}

export function updateIncidentEventVotesRequestToJSON(
  updateIncidentEventVotesRequest: UpdateIncidentEventVotesRequest,
): string {
  return JSON.stringify(
    UpdateIncidentEventVotesRequest$outboundSchema.parse(
      updateIncidentEventVotesRequest,
    ),
  );
}

export function updateIncidentEventVotesRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateIncidentEventVotesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateIncidentEventVotesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateIncidentEventVotesRequest' from JSON`,
  );
}
