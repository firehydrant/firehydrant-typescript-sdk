/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * MS Teams channel identity for channel associated with this team
 */
export type PatchV1TeamsTeamIdMsTeamsChannel = {
  channelId: string;
  msTeamId: string;
};

export type PatchV1TeamsTeamIdMemberships = {
  userId?: string | undefined;
  scheduleId?: string | undefined;
  /**
   * An incident role ID that this user will automatically assigned if this team is assigned to an incident
   */
  incidentRoleId?: string | undefined;
};

/**
 * Update a single team from its ID
 */
export type PatchV1TeamsTeamId = {
  name?: string | undefined;
  description?: string | undefined;
  slug?: string | undefined;
  /**
   * The Slack channel ID that this team is associated with
   */
  slackChannelId?: string | undefined;
  /**
   * MS Teams channel identity for channel associated with this team
   */
  msTeamsChannel?: PatchV1TeamsTeamIdMsTeamsChannel | undefined;
  memberships?: Array<PatchV1TeamsTeamIdMemberships> | undefined;
};

/** @internal */
export const PatchV1TeamsTeamIdMsTeamsChannel$inboundSchema: z.ZodType<
  PatchV1TeamsTeamIdMsTeamsChannel,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  ms_team_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "ms_team_id": "msTeamId",
  });
});

/** @internal */
export type PatchV1TeamsTeamIdMsTeamsChannel$Outbound = {
  channel_id: string;
  ms_team_id: string;
};

/** @internal */
export const PatchV1TeamsTeamIdMsTeamsChannel$outboundSchema: z.ZodType<
  PatchV1TeamsTeamIdMsTeamsChannel$Outbound,
  z.ZodTypeDef,
  PatchV1TeamsTeamIdMsTeamsChannel
> = z.object({
  channelId: z.string(),
  msTeamId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    msTeamId: "ms_team_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamIdMsTeamsChannel$ {
  /** @deprecated use `PatchV1TeamsTeamIdMsTeamsChannel$inboundSchema` instead. */
  export const inboundSchema = PatchV1TeamsTeamIdMsTeamsChannel$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdMsTeamsChannel$outboundSchema` instead. */
  export const outboundSchema = PatchV1TeamsTeamIdMsTeamsChannel$outboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdMsTeamsChannel$Outbound` instead. */
  export type Outbound = PatchV1TeamsTeamIdMsTeamsChannel$Outbound;
}

export function patchV1TeamsTeamIdMsTeamsChannelToJSON(
  patchV1TeamsTeamIdMsTeamsChannel: PatchV1TeamsTeamIdMsTeamsChannel,
): string {
  return JSON.stringify(
    PatchV1TeamsTeamIdMsTeamsChannel$outboundSchema.parse(
      patchV1TeamsTeamIdMsTeamsChannel,
    ),
  );
}

export function patchV1TeamsTeamIdMsTeamsChannelFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1TeamsTeamIdMsTeamsChannel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV1TeamsTeamIdMsTeamsChannel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1TeamsTeamIdMsTeamsChannel' from JSON`,
  );
}

/** @internal */
export const PatchV1TeamsTeamIdMemberships$inboundSchema: z.ZodType<
  PatchV1TeamsTeamIdMemberships,
  z.ZodTypeDef,
  unknown
> = z.object({
  user_id: z.string().optional(),
  schedule_id: z.string().optional(),
  incident_role_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
    "schedule_id": "scheduleId",
    "incident_role_id": "incidentRoleId",
  });
});

/** @internal */
export type PatchV1TeamsTeamIdMemberships$Outbound = {
  user_id?: string | undefined;
  schedule_id?: string | undefined;
  incident_role_id?: string | undefined;
};

/** @internal */
export const PatchV1TeamsTeamIdMemberships$outboundSchema: z.ZodType<
  PatchV1TeamsTeamIdMemberships$Outbound,
  z.ZodTypeDef,
  PatchV1TeamsTeamIdMemberships
> = z.object({
  userId: z.string().optional(),
  scheduleId: z.string().optional(),
  incidentRoleId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    userId: "user_id",
    scheduleId: "schedule_id",
    incidentRoleId: "incident_role_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamIdMemberships$ {
  /** @deprecated use `PatchV1TeamsTeamIdMemberships$inboundSchema` instead. */
  export const inboundSchema = PatchV1TeamsTeamIdMemberships$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdMemberships$outboundSchema` instead. */
  export const outboundSchema = PatchV1TeamsTeamIdMemberships$outboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdMemberships$Outbound` instead. */
  export type Outbound = PatchV1TeamsTeamIdMemberships$Outbound;
}

export function patchV1TeamsTeamIdMembershipsToJSON(
  patchV1TeamsTeamIdMemberships: PatchV1TeamsTeamIdMemberships,
): string {
  return JSON.stringify(
    PatchV1TeamsTeamIdMemberships$outboundSchema.parse(
      patchV1TeamsTeamIdMemberships,
    ),
  );
}

export function patchV1TeamsTeamIdMembershipsFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1TeamsTeamIdMemberships, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV1TeamsTeamIdMemberships$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1TeamsTeamIdMemberships' from JSON`,
  );
}

/** @internal */
export const PatchV1TeamsTeamId$inboundSchema: z.ZodType<
  PatchV1TeamsTeamId,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
  slack_channel_id: z.string().optional(),
  ms_teams_channel: z.lazy(() => PatchV1TeamsTeamIdMsTeamsChannel$inboundSchema)
    .optional(),
  memberships: z.array(
    z.lazy(() => PatchV1TeamsTeamIdMemberships$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "slack_channel_id": "slackChannelId",
    "ms_teams_channel": "msTeamsChannel",
  });
});

/** @internal */
export type PatchV1TeamsTeamId$Outbound = {
  name?: string | undefined;
  description?: string | undefined;
  slug?: string | undefined;
  slack_channel_id?: string | undefined;
  ms_teams_channel?: PatchV1TeamsTeamIdMsTeamsChannel$Outbound | undefined;
  memberships?: Array<PatchV1TeamsTeamIdMemberships$Outbound> | undefined;
};

/** @internal */
export const PatchV1TeamsTeamId$outboundSchema: z.ZodType<
  PatchV1TeamsTeamId$Outbound,
  z.ZodTypeDef,
  PatchV1TeamsTeamId
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
  slackChannelId: z.string().optional(),
  msTeamsChannel: z.lazy(() => PatchV1TeamsTeamIdMsTeamsChannel$outboundSchema)
    .optional(),
  memberships: z.array(
    z.lazy(() => PatchV1TeamsTeamIdMemberships$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    slackChannelId: "slack_channel_id",
    msTeamsChannel: "ms_teams_channel",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamId$ {
  /** @deprecated use `PatchV1TeamsTeamId$inboundSchema` instead. */
  export const inboundSchema = PatchV1TeamsTeamId$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamId$outboundSchema` instead. */
  export const outboundSchema = PatchV1TeamsTeamId$outboundSchema;
  /** @deprecated use `PatchV1TeamsTeamId$Outbound` instead. */
  export type Outbound = PatchV1TeamsTeamId$Outbound;
}

export function patchV1TeamsTeamIdToJSON(
  patchV1TeamsTeamId: PatchV1TeamsTeamId,
): string {
  return JSON.stringify(
    PatchV1TeamsTeamId$outboundSchema.parse(patchV1TeamsTeamId),
  );
}

export function patchV1TeamsTeamIdFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1TeamsTeamId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV1TeamsTeamId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1TeamsTeamId' from JSON`,
  );
}
