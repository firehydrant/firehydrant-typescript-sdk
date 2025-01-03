/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateIncidentRequest = {
  incidentId: string;
  patchV1IncidentsIncidentId: components.PatchV1IncidentsIncidentId;
};

/** @internal */
export const UpdateIncidentRequest$inboundSchema: z.ZodType<
  UpdateIncidentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_id: z.string(),
  patchV1IncidentsIncidentId:
    components.PatchV1IncidentsIncidentId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "incident_id": "incidentId",
  });
});

/** @internal */
export type UpdateIncidentRequest$Outbound = {
  incident_id: string;
  patchV1IncidentsIncidentId: components.PatchV1IncidentsIncidentId$Outbound;
};

/** @internal */
export const UpdateIncidentRequest$outboundSchema: z.ZodType<
  UpdateIncidentRequest$Outbound,
  z.ZodTypeDef,
  UpdateIncidentRequest
> = z.object({
  incidentId: z.string(),
  patchV1IncidentsIncidentId:
    components.PatchV1IncidentsIncidentId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    incidentId: "incident_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateIncidentRequest$ {
  /** @deprecated use `UpdateIncidentRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateIncidentRequest$inboundSchema;
  /** @deprecated use `UpdateIncidentRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateIncidentRequest$outboundSchema;
  /** @deprecated use `UpdateIncidentRequest$Outbound` instead. */
  export type Outbound = UpdateIncidentRequest$Outbound;
}

export function updateIncidentRequestToJSON(
  updateIncidentRequest: UpdateIncidentRequest,
): string {
  return JSON.stringify(
    UpdateIncidentRequest$outboundSchema.parse(updateIncidentRequest),
  );
}

export function updateIncidentRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateIncidentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateIncidentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateIncidentRequest' from JSON`,
  );
}
