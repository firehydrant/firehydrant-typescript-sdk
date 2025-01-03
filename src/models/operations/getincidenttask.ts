/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetIncidentTaskRequest = {
  taskId: string;
  incidentId: string;
};

/** @internal */
export const GetIncidentTaskRequest$inboundSchema: z.ZodType<
  GetIncidentTaskRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  task_id: z.string(),
  incident_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "task_id": "taskId",
    "incident_id": "incidentId",
  });
});

/** @internal */
export type GetIncidentTaskRequest$Outbound = {
  task_id: string;
  incident_id: string;
};

/** @internal */
export const GetIncidentTaskRequest$outboundSchema: z.ZodType<
  GetIncidentTaskRequest$Outbound,
  z.ZodTypeDef,
  GetIncidentTaskRequest
> = z.object({
  taskId: z.string(),
  incidentId: z.string(),
}).transform((v) => {
  return remap$(v, {
    taskId: "task_id",
    incidentId: "incident_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetIncidentTaskRequest$ {
  /** @deprecated use `GetIncidentTaskRequest$inboundSchema` instead. */
  export const inboundSchema = GetIncidentTaskRequest$inboundSchema;
  /** @deprecated use `GetIncidentTaskRequest$outboundSchema` instead. */
  export const outboundSchema = GetIncidentTaskRequest$outboundSchema;
  /** @deprecated use `GetIncidentTaskRequest$Outbound` instead. */
  export type Outbound = GetIncidentTaskRequest$Outbound;
}

export function getIncidentTaskRequestToJSON(
  getIncidentTaskRequest: GetIncidentTaskRequest,
): string {
  return JSON.stringify(
    GetIncidentTaskRequest$outboundSchema.parse(getIncidentTaskRequest),
  );
}

export function getIncidentTaskRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetIncidentTaskRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetIncidentTaskRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIncidentTaskRequest' from JSON`,
  );
}
