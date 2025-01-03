/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetIncidentRoleRequest = {
  incidentRoleId: string;
};

/** @internal */
export const GetIncidentRoleRequest$inboundSchema: z.ZodType<
  GetIncidentRoleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_role_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "incident_role_id": "incidentRoleId",
  });
});

/** @internal */
export type GetIncidentRoleRequest$Outbound = {
  incident_role_id: string;
};

/** @internal */
export const GetIncidentRoleRequest$outboundSchema: z.ZodType<
  GetIncidentRoleRequest$Outbound,
  z.ZodTypeDef,
  GetIncidentRoleRequest
> = z.object({
  incidentRoleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    incidentRoleId: "incident_role_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetIncidentRoleRequest$ {
  /** @deprecated use `GetIncidentRoleRequest$inboundSchema` instead. */
  export const inboundSchema = GetIncidentRoleRequest$inboundSchema;
  /** @deprecated use `GetIncidentRoleRequest$outboundSchema` instead. */
  export const outboundSchema = GetIncidentRoleRequest$outboundSchema;
  /** @deprecated use `GetIncidentRoleRequest$Outbound` instead. */
  export type Outbound = GetIncidentRoleRequest$Outbound;
}

export function getIncidentRoleRequestToJSON(
  getIncidentRoleRequest: GetIncidentRoleRequest,
): string {
  return JSON.stringify(
    GetIncidentRoleRequest$outboundSchema.parse(getIncidentRoleRequest),
  );
}

export function getIncidentRoleRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetIncidentRoleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetIncidentRoleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIncidentRoleRequest' from JSON`,
  );
}
