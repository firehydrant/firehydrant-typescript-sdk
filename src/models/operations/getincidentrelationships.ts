/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetIncidentRelationshipsRequest = {
  incidentId: string;
};

/** @internal */
export const GetIncidentRelationshipsRequest$inboundSchema: z.ZodType<
  GetIncidentRelationshipsRequest,
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
export type GetIncidentRelationshipsRequest$Outbound = {
  incident_id: string;
};

/** @internal */
export const GetIncidentRelationshipsRequest$outboundSchema: z.ZodType<
  GetIncidentRelationshipsRequest$Outbound,
  z.ZodTypeDef,
  GetIncidentRelationshipsRequest
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
export namespace GetIncidentRelationshipsRequest$ {
  /** @deprecated use `GetIncidentRelationshipsRequest$inboundSchema` instead. */
  export const inboundSchema = GetIncidentRelationshipsRequest$inboundSchema;
  /** @deprecated use `GetIncidentRelationshipsRequest$outboundSchema` instead. */
  export const outboundSchema = GetIncidentRelationshipsRequest$outboundSchema;
  /** @deprecated use `GetIncidentRelationshipsRequest$Outbound` instead. */
  export type Outbound = GetIncidentRelationshipsRequest$Outbound;
}

export function getIncidentRelationshipsRequestToJSON(
  getIncidentRelationshipsRequest: GetIncidentRelationshipsRequest,
): string {
  return JSON.stringify(
    GetIncidentRelationshipsRequest$outboundSchema.parse(
      getIncidentRelationshipsRequest,
    ),
  );
}

export function getIncidentRelationshipsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetIncidentRelationshipsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetIncidentRelationshipsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIncidentRelationshipsRequest' from JSON`,
  );
}
