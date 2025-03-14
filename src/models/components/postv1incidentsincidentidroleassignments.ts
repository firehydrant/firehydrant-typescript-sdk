/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Assign a role to a user for this incident
 */
export type PostV1IncidentsIncidentIdRoleAssignments = {
  /**
   * The user ID to assign the role to
   */
  userId: string;
  /**
   * The Incident Role ID to assign the role to
   */
  incidentRoleId: string;
};

/** @internal */
export const PostV1IncidentsIncidentIdRoleAssignments$inboundSchema: z.ZodType<
  PostV1IncidentsIncidentIdRoleAssignments,
  z.ZodTypeDef,
  unknown
> = z.object({
  user_id: z.string(),
  incident_role_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
    "incident_role_id": "incidentRoleId",
  });
});

/** @internal */
export type PostV1IncidentsIncidentIdRoleAssignments$Outbound = {
  user_id: string;
  incident_role_id: string;
};

/** @internal */
export const PostV1IncidentsIncidentIdRoleAssignments$outboundSchema: z.ZodType<
  PostV1IncidentsIncidentIdRoleAssignments$Outbound,
  z.ZodTypeDef,
  PostV1IncidentsIncidentIdRoleAssignments
> = z.object({
  userId: z.string(),
  incidentRoleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    userId: "user_id",
    incidentRoleId: "incident_role_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1IncidentsIncidentIdRoleAssignments$ {
  /** @deprecated use `PostV1IncidentsIncidentIdRoleAssignments$inboundSchema` instead. */
  export const inboundSchema =
    PostV1IncidentsIncidentIdRoleAssignments$inboundSchema;
  /** @deprecated use `PostV1IncidentsIncidentIdRoleAssignments$outboundSchema` instead. */
  export const outboundSchema =
    PostV1IncidentsIncidentIdRoleAssignments$outboundSchema;
  /** @deprecated use `PostV1IncidentsIncidentIdRoleAssignments$Outbound` instead. */
  export type Outbound = PostV1IncidentsIncidentIdRoleAssignments$Outbound;
}

export function postV1IncidentsIncidentIdRoleAssignmentsToJSON(
  postV1IncidentsIncidentIdRoleAssignments:
    PostV1IncidentsIncidentIdRoleAssignments,
): string {
  return JSON.stringify(
    PostV1IncidentsIncidentIdRoleAssignments$outboundSchema.parse(
      postV1IncidentsIncidentIdRoleAssignments,
    ),
  );
}

export function postV1IncidentsIncidentIdRoleAssignmentsFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1IncidentsIncidentIdRoleAssignments,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1IncidentsIncidentIdRoleAssignments$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1IncidentsIncidentIdRoleAssignments' from JSON`,
  );
}
