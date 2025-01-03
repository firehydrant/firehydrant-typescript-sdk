/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTeamScheduleShiftRequest = {
  id: string;
  teamId: string;
  scheduleId: string;
};

/** @internal */
export const GetTeamScheduleShiftRequest$inboundSchema: z.ZodType<
  GetTeamScheduleShiftRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  team_id: z.string(),
  schedule_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "team_id": "teamId",
    "schedule_id": "scheduleId",
  });
});

/** @internal */
export type GetTeamScheduleShiftRequest$Outbound = {
  id: string;
  team_id: string;
  schedule_id: string;
};

/** @internal */
export const GetTeamScheduleShiftRequest$outboundSchema: z.ZodType<
  GetTeamScheduleShiftRequest$Outbound,
  z.ZodTypeDef,
  GetTeamScheduleShiftRequest
> = z.object({
  id: z.string(),
  teamId: z.string(),
  scheduleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    teamId: "team_id",
    scheduleId: "schedule_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamScheduleShiftRequest$ {
  /** @deprecated use `GetTeamScheduleShiftRequest$inboundSchema` instead. */
  export const inboundSchema = GetTeamScheduleShiftRequest$inboundSchema;
  /** @deprecated use `GetTeamScheduleShiftRequest$outboundSchema` instead. */
  export const outboundSchema = GetTeamScheduleShiftRequest$outboundSchema;
  /** @deprecated use `GetTeamScheduleShiftRequest$Outbound` instead. */
  export type Outbound = GetTeamScheduleShiftRequest$Outbound;
}

export function getTeamScheduleShiftRequestToJSON(
  getTeamScheduleShiftRequest: GetTeamScheduleShiftRequest,
): string {
  return JSON.stringify(
    GetTeamScheduleShiftRequest$outboundSchema.parse(
      getTeamScheduleShiftRequest,
    ),
  );
}

export function getTeamScheduleShiftRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTeamScheduleShiftRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTeamScheduleShiftRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTeamScheduleShiftRequest' from JSON`,
  );
}
