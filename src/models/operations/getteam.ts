/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTeamRequest = {
  teamId: string;
  /**
   * Boolean to determine whether to return a slimified version of the teams object
   */
  lite?: boolean | undefined;
};

/** @internal */
export const GetTeamRequest$inboundSchema: z.ZodType<
  GetTeamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  team_id: z.string(),
  lite: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "team_id": "teamId",
  });
});

/** @internal */
export type GetTeamRequest$Outbound = {
  team_id: string;
  lite?: boolean | undefined;
};

/** @internal */
export const GetTeamRequest$outboundSchema: z.ZodType<
  GetTeamRequest$Outbound,
  z.ZodTypeDef,
  GetTeamRequest
> = z.object({
  teamId: z.string(),
  lite: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    teamId: "team_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamRequest$ {
  /** @deprecated use `GetTeamRequest$inboundSchema` instead. */
  export const inboundSchema = GetTeamRequest$inboundSchema;
  /** @deprecated use `GetTeamRequest$outboundSchema` instead. */
  export const outboundSchema = GetTeamRequest$outboundSchema;
  /** @deprecated use `GetTeamRequest$Outbound` instead. */
  export type Outbound = GetTeamRequest$Outbound;
}

export function getTeamRequestToJSON(getTeamRequest: GetTeamRequest): string {
  return JSON.stringify(GetTeamRequest$outboundSchema.parse(getTeamRequest));
}

export function getTeamRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTeamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTeamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTeamRequest' from JSON`,
  );
}
