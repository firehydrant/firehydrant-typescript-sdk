/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateIncidentImpactsRequest = {
  incidentId: string;
  putV1IncidentsIncidentIdImpact: components.PutV1IncidentsIncidentIdImpact;
};

/** @internal */
export const UpdateIncidentImpactsRequest$inboundSchema: z.ZodType<
  UpdateIncidentImpactsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_id: z.string(),
  putV1IncidentsIncidentIdImpact:
    components.PutV1IncidentsIncidentIdImpact$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "incident_id": "incidentId",
  });
});

/** @internal */
export type UpdateIncidentImpactsRequest$Outbound = {
  incident_id: string;
  putV1IncidentsIncidentIdImpact:
    components.PutV1IncidentsIncidentIdImpact$Outbound;
};

/** @internal */
export const UpdateIncidentImpactsRequest$outboundSchema: z.ZodType<
  UpdateIncidentImpactsRequest$Outbound,
  z.ZodTypeDef,
  UpdateIncidentImpactsRequest
> = z.object({
  incidentId: z.string(),
  putV1IncidentsIncidentIdImpact:
    components.PutV1IncidentsIncidentIdImpact$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    incidentId: "incident_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateIncidentImpactsRequest$ {
  /** @deprecated use `UpdateIncidentImpactsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateIncidentImpactsRequest$inboundSchema;
  /** @deprecated use `UpdateIncidentImpactsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateIncidentImpactsRequest$outboundSchema;
  /** @deprecated use `UpdateIncidentImpactsRequest$Outbound` instead. */
  export type Outbound = UpdateIncidentImpactsRequest$Outbound;
}

export function updateIncidentImpactsRequestToJSON(
  updateIncidentImpactsRequest: UpdateIncidentImpactsRequest,
): string {
  return JSON.stringify(
    UpdateIncidentImpactsRequest$outboundSchema.parse(
      updateIncidentImpactsRequest,
    ),
  );
}

export function updateIncidentImpactsRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateIncidentImpactsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateIncidentImpactsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateIncidentImpactsRequest' from JSON`,
  );
}
