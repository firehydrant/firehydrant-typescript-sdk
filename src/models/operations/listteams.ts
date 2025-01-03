/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListTeamsRequest = {
  page?: number | undefined;
  perPage?: number | undefined;
  /**
   * A query to search teams by their name or description
   */
  query?: string | undefined;
  /**
   * A query to search teams by their name
   */
  name?: string | undefined;
  /**
   * A comma separated list of service IDs
   */
  services?: string | undefined;
  /**
   * Filter by teams that have or do not have members with a default incident role asssigned. Value may be 'present', 'blank', or the ID of an incident role.
   */
  defaultIncidentRole?: string | undefined;
  /**
   * Boolean to determine whether to return a slimified version of the teams object
   */
  lite?: boolean | undefined;
};

/** @internal */
export const ListTeamsRequest$inboundSchema: z.ZodType<
  ListTeamsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().optional(),
  per_page: z.number().int().optional(),
  query: z.string().optional(),
  name: z.string().optional(),
  services: z.string().optional(),
  default_incident_role: z.string().optional(),
  lite: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "per_page": "perPage",
    "default_incident_role": "defaultIncidentRole",
  });
});

/** @internal */
export type ListTeamsRequest$Outbound = {
  page?: number | undefined;
  per_page?: number | undefined;
  query?: string | undefined;
  name?: string | undefined;
  services?: string | undefined;
  default_incident_role?: string | undefined;
  lite?: boolean | undefined;
};

/** @internal */
export const ListTeamsRequest$outboundSchema: z.ZodType<
  ListTeamsRequest$Outbound,
  z.ZodTypeDef,
  ListTeamsRequest
> = z.object({
  page: z.number().int().optional(),
  perPage: z.number().int().optional(),
  query: z.string().optional(),
  name: z.string().optional(),
  services: z.string().optional(),
  defaultIncidentRole: z.string().optional(),
  lite: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    perPage: "per_page",
    defaultIncidentRole: "default_incident_role",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTeamsRequest$ {
  /** @deprecated use `ListTeamsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTeamsRequest$inboundSchema;
  /** @deprecated use `ListTeamsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTeamsRequest$outboundSchema;
  /** @deprecated use `ListTeamsRequest$Outbound` instead. */
  export type Outbound = ListTeamsRequest$Outbound;
}

export function listTeamsRequestToJSON(
  listTeamsRequest: ListTeamsRequest,
): string {
  return JSON.stringify(
    ListTeamsRequest$outboundSchema.parse(listTeamsRequest),
  );
}

export function listTeamsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTeamsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTeamsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTeamsRequest' from JSON`,
  );
}
