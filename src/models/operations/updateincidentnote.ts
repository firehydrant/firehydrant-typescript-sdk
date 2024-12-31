/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateIncidentNoteRequest = {
  noteId: string;
  incidentId: string;
  patchV1IncidentsIncidentIdNotesNoteId:
    components.PatchV1IncidentsIncidentIdNotesNoteId;
};

/** @internal */
export const UpdateIncidentNoteRequest$inboundSchema: z.ZodType<
  UpdateIncidentNoteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  note_id: z.string(),
  incident_id: z.string(),
  patchV1IncidentsIncidentIdNotesNoteId:
    components.PatchV1IncidentsIncidentIdNotesNoteId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "note_id": "noteId",
    "incident_id": "incidentId",
  });
});

/** @internal */
export type UpdateIncidentNoteRequest$Outbound = {
  note_id: string;
  incident_id: string;
  patchV1IncidentsIncidentIdNotesNoteId:
    components.PatchV1IncidentsIncidentIdNotesNoteId$Outbound;
};

/** @internal */
export const UpdateIncidentNoteRequest$outboundSchema: z.ZodType<
  UpdateIncidentNoteRequest$Outbound,
  z.ZodTypeDef,
  UpdateIncidentNoteRequest
> = z.object({
  noteId: z.string(),
  incidentId: z.string(),
  patchV1IncidentsIncidentIdNotesNoteId:
    components.PatchV1IncidentsIncidentIdNotesNoteId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    noteId: "note_id",
    incidentId: "incident_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateIncidentNoteRequest$ {
  /** @deprecated use `UpdateIncidentNoteRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateIncidentNoteRequest$inboundSchema;
  /** @deprecated use `UpdateIncidentNoteRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateIncidentNoteRequest$outboundSchema;
  /** @deprecated use `UpdateIncidentNoteRequest$Outbound` instead. */
  export type Outbound = UpdateIncidentNoteRequest$Outbound;
}

export function updateIncidentNoteRequestToJSON(
  updateIncidentNoteRequest: UpdateIncidentNoteRequest,
): string {
  return JSON.stringify(
    UpdateIncidentNoteRequest$outboundSchema.parse(updateIncidentNoteRequest),
  );
}

export function updateIncidentNoteRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateIncidentNoteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateIncidentNoteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateIncidentNoteRequest' from JSON`,
  );
}
