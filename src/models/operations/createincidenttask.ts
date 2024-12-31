/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateIncidentTaskRequest = {
  incidentId: string;
  postV1IncidentsIncidentIdTasks: components.PostV1IncidentsIncidentIdTasks;
};

/** @internal */
export const CreateIncidentTaskRequest$inboundSchema: z.ZodType<
  CreateIncidentTaskRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_id: z.string(),
  postV1IncidentsIncidentIdTasks:
    components.PostV1IncidentsIncidentIdTasks$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "incident_id": "incidentId",
  });
});

/** @internal */
export type CreateIncidentTaskRequest$Outbound = {
  incident_id: string;
  postV1IncidentsIncidentIdTasks:
    components.PostV1IncidentsIncidentIdTasks$Outbound;
};

/** @internal */
export const CreateIncidentTaskRequest$outboundSchema: z.ZodType<
  CreateIncidentTaskRequest$Outbound,
  z.ZodTypeDef,
  CreateIncidentTaskRequest
> = z.object({
  incidentId: z.string(),
  postV1IncidentsIncidentIdTasks:
    components.PostV1IncidentsIncidentIdTasks$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    incidentId: "incident_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIncidentTaskRequest$ {
  /** @deprecated use `CreateIncidentTaskRequest$inboundSchema` instead. */
  export const inboundSchema = CreateIncidentTaskRequest$inboundSchema;
  /** @deprecated use `CreateIncidentTaskRequest$outboundSchema` instead. */
  export const outboundSchema = CreateIncidentTaskRequest$outboundSchema;
  /** @deprecated use `CreateIncidentTaskRequest$Outbound` instead. */
  export type Outbound = CreateIncidentTaskRequest$Outbound;
}

export function createIncidentTaskRequestToJSON(
  createIncidentTaskRequest: CreateIncidentTaskRequest,
): string {
  return JSON.stringify(
    CreateIncidentTaskRequest$outboundSchema.parse(createIncidentTaskRequest),
  );
}

export function createIncidentTaskRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateIncidentTaskRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateIncidentTaskRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIncidentTaskRequest' from JSON`,
  );
}
