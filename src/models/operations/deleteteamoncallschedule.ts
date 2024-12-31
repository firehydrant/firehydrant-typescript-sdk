/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteTeamOnCallScheduleRequest = {
  teamId: string;
  scheduleId: string;
};

/** @internal */
export const DeleteTeamOnCallScheduleRequest$inboundSchema: z.ZodType<
  DeleteTeamOnCallScheduleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  team_id: z.string(),
  schedule_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "team_id": "teamId",
    "schedule_id": "scheduleId",
  });
});

/** @internal */
export type DeleteTeamOnCallScheduleRequest$Outbound = {
  team_id: string;
  schedule_id: string;
};

/** @internal */
export const DeleteTeamOnCallScheduleRequest$outboundSchema: z.ZodType<
  DeleteTeamOnCallScheduleRequest$Outbound,
  z.ZodTypeDef,
  DeleteTeamOnCallScheduleRequest
> = z.object({
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
export namespace DeleteTeamOnCallScheduleRequest$ {
  /** @deprecated use `DeleteTeamOnCallScheduleRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteTeamOnCallScheduleRequest$inboundSchema;
  /** @deprecated use `DeleteTeamOnCallScheduleRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteTeamOnCallScheduleRequest$outboundSchema;
  /** @deprecated use `DeleteTeamOnCallScheduleRequest$Outbound` instead. */
  export type Outbound = DeleteTeamOnCallScheduleRequest$Outbound;
}

export function deleteTeamOnCallScheduleRequestToJSON(
  deleteTeamOnCallScheduleRequest: DeleteTeamOnCallScheduleRequest,
): string {
  return JSON.stringify(
    DeleteTeamOnCallScheduleRequest$outboundSchema.parse(
      deleteTeamOnCallScheduleRequest,
    ),
  );
}

export function deleteTeamOnCallScheduleRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTeamOnCallScheduleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTeamOnCallScheduleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTeamOnCallScheduleRequest' from JSON`,
  );
}
