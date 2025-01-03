/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateIncidentNoteRequest = {
  incidentId: string;
  postV1IncidentsIncidentIdNotes: components.PostV1IncidentsIncidentIdNotes;
};

/** @internal */
export const CreateIncidentNoteRequest$inboundSchema: z.ZodType<
  CreateIncidentNoteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_id: z.string(),
  postV1IncidentsIncidentIdNotes:
    components.PostV1IncidentsIncidentIdNotes$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "incident_id": "incidentId",
  });
});

/** @internal */
export type CreateIncidentNoteRequest$Outbound = {
  incident_id: string;
  postV1IncidentsIncidentIdNotes:
    components.PostV1IncidentsIncidentIdNotes$Outbound;
};

/** @internal */
export const CreateIncidentNoteRequest$outboundSchema: z.ZodType<
  CreateIncidentNoteRequest$Outbound,
  z.ZodTypeDef,
  CreateIncidentNoteRequest
> = z.object({
  incidentId: z.string(),
  postV1IncidentsIncidentIdNotes:
    components.PostV1IncidentsIncidentIdNotes$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    incidentId: "incident_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIncidentNoteRequest$ {
  /** @deprecated use `CreateIncidentNoteRequest$inboundSchema` instead. */
  export const inboundSchema = CreateIncidentNoteRequest$inboundSchema;
  /** @deprecated use `CreateIncidentNoteRequest$outboundSchema` instead. */
  export const outboundSchema = CreateIncidentNoteRequest$outboundSchema;
  /** @deprecated use `CreateIncidentNoteRequest$Outbound` instead. */
  export type Outbound = CreateIncidentNoteRequest$Outbound;
}

export function createIncidentNoteRequestToJSON(
  createIncidentNoteRequest: CreateIncidentNoteRequest,
): string {
  return JSON.stringify(
    CreateIncidentNoteRequest$outboundSchema.parse(createIncidentNoteRequest),
  );
}

export function createIncidentNoteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateIncidentNoteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateIncidentNoteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIncidentNoteRequest' from JSON`,
  );
}
