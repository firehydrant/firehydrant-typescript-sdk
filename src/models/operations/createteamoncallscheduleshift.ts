/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTeamOnCallScheduleShiftRequest = {
  teamId: string;
  scheduleId: string;
  postV1TeamsTeamIdOnCallSchedulesScheduleIdShifts:
    components.PostV1TeamsTeamIdOnCallSchedulesScheduleIdShifts;
};

/** @internal */
export const CreateTeamOnCallScheduleShiftRequest$inboundSchema: z.ZodType<
  CreateTeamOnCallScheduleShiftRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  team_id: z.string(),
  schedule_id: z.string(),
  postV1TeamsTeamIdOnCallSchedulesScheduleIdShifts:
    components.PostV1TeamsTeamIdOnCallSchedulesScheduleIdShifts$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "team_id": "teamId",
    "schedule_id": "scheduleId",
  });
});

/** @internal */
export type CreateTeamOnCallScheduleShiftRequest$Outbound = {
  team_id: string;
  schedule_id: string;
  postV1TeamsTeamIdOnCallSchedulesScheduleIdShifts:
    components.PostV1TeamsTeamIdOnCallSchedulesScheduleIdShifts$Outbound;
};

/** @internal */
export const CreateTeamOnCallScheduleShiftRequest$outboundSchema: z.ZodType<
  CreateTeamOnCallScheduleShiftRequest$Outbound,
  z.ZodTypeDef,
  CreateTeamOnCallScheduleShiftRequest
> = z.object({
  teamId: z.string(),
  scheduleId: z.string(),
  postV1TeamsTeamIdOnCallSchedulesScheduleIdShifts:
    components.PostV1TeamsTeamIdOnCallSchedulesScheduleIdShifts$outboundSchema,
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
export namespace CreateTeamOnCallScheduleShiftRequest$ {
  /** @deprecated use `CreateTeamOnCallScheduleShiftRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateTeamOnCallScheduleShiftRequest$inboundSchema;
  /** @deprecated use `CreateTeamOnCallScheduleShiftRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateTeamOnCallScheduleShiftRequest$outboundSchema;
  /** @deprecated use `CreateTeamOnCallScheduleShiftRequest$Outbound` instead. */
  export type Outbound = CreateTeamOnCallScheduleShiftRequest$Outbound;
}

export function createTeamOnCallScheduleShiftRequestToJSON(
  createTeamOnCallScheduleShiftRequest: CreateTeamOnCallScheduleShiftRequest,
): string {
  return JSON.stringify(
    CreateTeamOnCallScheduleShiftRequest$outboundSchema.parse(
      createTeamOnCallScheduleShiftRequest,
    ),
  );
}

export function createTeamOnCallScheduleShiftRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTeamOnCallScheduleShiftRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateTeamOnCallScheduleShiftRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTeamOnCallScheduleShiftRequest' from JSON`,
  );
}
