/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1TeamsTeamIdOnCallSchedulesMembers = {
  /**
   * The ID of a user who should be added to the schedule's rotation. You can add a user to the schedule
   *
   * @remarks
   * multiple times to construct more complex rotations, and you can specify a `null` user ID to create
   * unassigned slots in the rotation.
   */
  userId?: string | undefined;
};

/**
 * The type of strategy. Must be one of "daily", "weekly", or "custom".
 */
export const PostV1TeamsTeamIdOnCallSchedulesType = {
  Daily: "daily",
  Weekly: "weekly",
  Custom: "custom",
} as const;
/**
 * The type of strategy. Must be one of "daily", "weekly", or "custom".
 */
export type PostV1TeamsTeamIdOnCallSchedulesType = ClosedEnum<
  typeof PostV1TeamsTeamIdOnCallSchedulesType
>;

/**
 * The day of the week on which on-call shifts should hand off, as its long-form name (e.g. "monday", "tuesday", etc). This value is only used if the strategy type is "weekly".
 */
export const HandoffDay = {
  Monday: "monday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
  Thursday: "thursday",
  Friday: "friday",
  Saturday: "saturday",
  Sunday: "sunday",
} as const;
/**
 * The day of the week on which on-call shifts should hand off, as its long-form name (e.g. "monday", "tuesday", etc). This value is only used if the strategy type is "weekly".
 */
export type HandoffDay = ClosedEnum<typeof HandoffDay>;

/**
 * An object that specifies how the schedule's on-call shifts should be generated.
 */
export type Strategy = {
  /**
   * The type of strategy. Must be one of "daily", "weekly", or "custom".
   */
  type: PostV1TeamsTeamIdOnCallSchedulesType;
  /**
   * An ISO8601 time string specifying when on-call shifts should hand off. This value is only used if the strategy type is "daily" or "weekly".
   */
  handoffTime?: string | undefined;
  /**
   * The day of the week on which on-call shifts should hand off, as its long-form name (e.g. "monday", "tuesday", etc). This value is only used if the strategy type is "weekly".
   */
  handoffDay?: HandoffDay | undefined;
  /**
   * An ISO8601 duration string specifying how long each shift should last. This value is only used if the strategy type is "custom".
   */
  shiftDuration?: string | undefined;
};

/**
 * The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc).
 */
export const StartDay = {
  Monday: "monday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
  Thursday: "thursday",
  Friday: "friday",
  Saturday: "saturday",
  Sunday: "sunday",
} as const;
/**
 * The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc).
 */
export type StartDay = ClosedEnum<typeof StartDay>;

/**
 * The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).
 */
export const EndDay = {
  Monday: "monday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
  Thursday: "thursday",
  Friday: "friday",
  Saturday: "saturday",
  Sunday: "sunday",
} as const;
/**
 * The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).
 */
export type EndDay = ClosedEnum<typeof EndDay>;

export type Restrictions = {
  /**
   * The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc).
   */
  startDay: StartDay;
  /**
   * An ISO8601 time string specifying when the restriction should start.
   */
  startTime: string;
  /**
   * The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).
   */
  endDay: EndDay;
  /**
   * An ISO8601 time string specifying when the restriction should end.
   */
  endTime: string;
};

/**
 * Create a Signals on-call schedule for a team.
 */
export type PostV1TeamsTeamIdOnCallSchedules = {
  /**
   * The on-call schedule's name.
   */
  name: string;
  /**
   * A detailed description of the on-call schedule.
   */
  description?: string | undefined;
  /**
   * The time zone in which the on-call schedule operates. This value must be a valid IANA time zone name.
   */
  timeZone: string;
  /**
   * The ID of a Slack user group for syncing purposes. If provided, we will automatically sync whoever is on call to the user group in Slack.
   */
  slackUserGroupId?: string | undefined;
  /**
   * An ordered list of objects that specify members of the on-call schedule's rotation.
   */
  members?: Array<PostV1TeamsTeamIdOnCallSchedulesMembers> | undefined;
  /**
   * An object that specifies how the schedule's on-call shifts should be generated.
   */
  strategy: Strategy;
  /**
   * A list of objects that restrict the schedule to speccific on-call periods.
   */
  restrictions?: Array<Restrictions> | undefined;
  /**
   * An ISO8601 time string specifying when the schedule's first shift should start. This value is only used if the schedule's strategy is "custom".
   */
  startTime?: string | undefined;
  /**
   * A hex color code that will be used to represent the schedule in the UI and iCal subscriptions.
   */
  color?: string | undefined;
  /**
   * This parameter is deprecated; use `members` instead.
   */
  memberIds?: Array<string> | undefined;
};

/** @internal */
export const PostV1TeamsTeamIdOnCallSchedulesMembers$inboundSchema: z.ZodType<
  PostV1TeamsTeamIdOnCallSchedulesMembers,
  z.ZodTypeDef,
  unknown
> = z.object({
  user_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
  });
});

/** @internal */
export type PostV1TeamsTeamIdOnCallSchedulesMembers$Outbound = {
  user_id?: string | undefined;
};

/** @internal */
export const PostV1TeamsTeamIdOnCallSchedulesMembers$outboundSchema: z.ZodType<
  PostV1TeamsTeamIdOnCallSchedulesMembers$Outbound,
  z.ZodTypeDef,
  PostV1TeamsTeamIdOnCallSchedulesMembers
> = z.object({
  userId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1TeamsTeamIdOnCallSchedulesMembers$ {
  /** @deprecated use `PostV1TeamsTeamIdOnCallSchedulesMembers$inboundSchema` instead. */
  export const inboundSchema =
    PostV1TeamsTeamIdOnCallSchedulesMembers$inboundSchema;
  /** @deprecated use `PostV1TeamsTeamIdOnCallSchedulesMembers$outboundSchema` instead. */
  export const outboundSchema =
    PostV1TeamsTeamIdOnCallSchedulesMembers$outboundSchema;
  /** @deprecated use `PostV1TeamsTeamIdOnCallSchedulesMembers$Outbound` instead. */
  export type Outbound = PostV1TeamsTeamIdOnCallSchedulesMembers$Outbound;
}

export function postV1TeamsTeamIdOnCallSchedulesMembersToJSON(
  postV1TeamsTeamIdOnCallSchedulesMembers:
    PostV1TeamsTeamIdOnCallSchedulesMembers,
): string {
  return JSON.stringify(
    PostV1TeamsTeamIdOnCallSchedulesMembers$outboundSchema.parse(
      postV1TeamsTeamIdOnCallSchedulesMembers,
    ),
  );
}

export function postV1TeamsTeamIdOnCallSchedulesMembersFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1TeamsTeamIdOnCallSchedulesMembers,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1TeamsTeamIdOnCallSchedulesMembers$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1TeamsTeamIdOnCallSchedulesMembers' from JSON`,
  );
}

/** @internal */
export const PostV1TeamsTeamIdOnCallSchedulesType$inboundSchema:
  z.ZodNativeEnum<typeof PostV1TeamsTeamIdOnCallSchedulesType> = z.nativeEnum(
    PostV1TeamsTeamIdOnCallSchedulesType,
  );

/** @internal */
export const PostV1TeamsTeamIdOnCallSchedulesType$outboundSchema:
  z.ZodNativeEnum<typeof PostV1TeamsTeamIdOnCallSchedulesType> =
    PostV1TeamsTeamIdOnCallSchedulesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1TeamsTeamIdOnCallSchedulesType$ {
  /** @deprecated use `PostV1TeamsTeamIdOnCallSchedulesType$inboundSchema` instead. */
  export const inboundSchema =
    PostV1TeamsTeamIdOnCallSchedulesType$inboundSchema;
  /** @deprecated use `PostV1TeamsTeamIdOnCallSchedulesType$outboundSchema` instead. */
  export const outboundSchema =
    PostV1TeamsTeamIdOnCallSchedulesType$outboundSchema;
}

/** @internal */
export const HandoffDay$inboundSchema: z.ZodNativeEnum<typeof HandoffDay> = z
  .nativeEnum(HandoffDay);

/** @internal */
export const HandoffDay$outboundSchema: z.ZodNativeEnum<typeof HandoffDay> =
  HandoffDay$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HandoffDay$ {
  /** @deprecated use `HandoffDay$inboundSchema` instead. */
  export const inboundSchema = HandoffDay$inboundSchema;
  /** @deprecated use `HandoffDay$outboundSchema` instead. */
  export const outboundSchema = HandoffDay$outboundSchema;
}

/** @internal */
export const Strategy$inboundSchema: z.ZodType<
  Strategy,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: PostV1TeamsTeamIdOnCallSchedulesType$inboundSchema,
  handoff_time: z.string().optional(),
  handoff_day: HandoffDay$inboundSchema.optional(),
  shift_duration: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "handoff_time": "handoffTime",
    "handoff_day": "handoffDay",
    "shift_duration": "shiftDuration",
  });
});

/** @internal */
export type Strategy$Outbound = {
  type: string;
  handoff_time?: string | undefined;
  handoff_day?: string | undefined;
  shift_duration?: string | undefined;
};

/** @internal */
export const Strategy$outboundSchema: z.ZodType<
  Strategy$Outbound,
  z.ZodTypeDef,
  Strategy
> = z.object({
  type: PostV1TeamsTeamIdOnCallSchedulesType$outboundSchema,
  handoffTime: z.string().optional(),
  handoffDay: HandoffDay$outboundSchema.optional(),
  shiftDuration: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    handoffTime: "handoff_time",
    handoffDay: "handoff_day",
    shiftDuration: "shift_duration",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Strategy$ {
  /** @deprecated use `Strategy$inboundSchema` instead. */
  export const inboundSchema = Strategy$inboundSchema;
  /** @deprecated use `Strategy$outboundSchema` instead. */
  export const outboundSchema = Strategy$outboundSchema;
  /** @deprecated use `Strategy$Outbound` instead. */
  export type Outbound = Strategy$Outbound;
}

export function strategyToJSON(strategy: Strategy): string {
  return JSON.stringify(Strategy$outboundSchema.parse(strategy));
}

export function strategyFromJSON(
  jsonString: string,
): SafeParseResult<Strategy, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Strategy$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Strategy' from JSON`,
  );
}

/** @internal */
export const StartDay$inboundSchema: z.ZodNativeEnum<typeof StartDay> = z
  .nativeEnum(StartDay);

/** @internal */
export const StartDay$outboundSchema: z.ZodNativeEnum<typeof StartDay> =
  StartDay$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartDay$ {
  /** @deprecated use `StartDay$inboundSchema` instead. */
  export const inboundSchema = StartDay$inboundSchema;
  /** @deprecated use `StartDay$outboundSchema` instead. */
  export const outboundSchema = StartDay$outboundSchema;
}

/** @internal */
export const EndDay$inboundSchema: z.ZodNativeEnum<typeof EndDay> = z
  .nativeEnum(EndDay);

/** @internal */
export const EndDay$outboundSchema: z.ZodNativeEnum<typeof EndDay> =
  EndDay$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EndDay$ {
  /** @deprecated use `EndDay$inboundSchema` instead. */
  export const inboundSchema = EndDay$inboundSchema;
  /** @deprecated use `EndDay$outboundSchema` instead. */
  export const outboundSchema = EndDay$outboundSchema;
}

/** @internal */
export const Restrictions$inboundSchema: z.ZodType<
  Restrictions,
  z.ZodTypeDef,
  unknown
> = z.object({
  start_day: StartDay$inboundSchema,
  start_time: z.string(),
  end_day: EndDay$inboundSchema,
  end_time: z.string(),
}).transform((v) => {
  return remap$(v, {
    "start_day": "startDay",
    "start_time": "startTime",
    "end_day": "endDay",
    "end_time": "endTime",
  });
});

/** @internal */
export type Restrictions$Outbound = {
  start_day: string;
  start_time: string;
  end_day: string;
  end_time: string;
};

/** @internal */
export const Restrictions$outboundSchema: z.ZodType<
  Restrictions$Outbound,
  z.ZodTypeDef,
  Restrictions
> = z.object({
  startDay: StartDay$outboundSchema,
  startTime: z.string(),
  endDay: EndDay$outboundSchema,
  endTime: z.string(),
}).transform((v) => {
  return remap$(v, {
    startDay: "start_day",
    startTime: "start_time",
    endDay: "end_day",
    endTime: "end_time",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Restrictions$ {
  /** @deprecated use `Restrictions$inboundSchema` instead. */
  export const inboundSchema = Restrictions$inboundSchema;
  /** @deprecated use `Restrictions$outboundSchema` instead. */
  export const outboundSchema = Restrictions$outboundSchema;
  /** @deprecated use `Restrictions$Outbound` instead. */
  export type Outbound = Restrictions$Outbound;
}

export function restrictionsToJSON(restrictions: Restrictions): string {
  return JSON.stringify(Restrictions$outboundSchema.parse(restrictions));
}

export function restrictionsFromJSON(
  jsonString: string,
): SafeParseResult<Restrictions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Restrictions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Restrictions' from JSON`,
  );
}

/** @internal */
export const PostV1TeamsTeamIdOnCallSchedules$inboundSchema: z.ZodType<
  PostV1TeamsTeamIdOnCallSchedules,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  time_zone: z.string(),
  slack_user_group_id: z.string().optional(),
  members: z.array(
    z.lazy(() => PostV1TeamsTeamIdOnCallSchedulesMembers$inboundSchema),
  ).optional(),
  strategy: z.lazy(() => Strategy$inboundSchema),
  restrictions: z.array(z.lazy(() => Restrictions$inboundSchema)).optional(),
  start_time: z.string().optional(),
  color: z.string().optional(),
  member_ids: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "time_zone": "timeZone",
    "slack_user_group_id": "slackUserGroupId",
    "start_time": "startTime",
    "member_ids": "memberIds",
  });
});

/** @internal */
export type PostV1TeamsTeamIdOnCallSchedules$Outbound = {
  name: string;
  description?: string | undefined;
  time_zone: string;
  slack_user_group_id?: string | undefined;
  members?: Array<PostV1TeamsTeamIdOnCallSchedulesMembers$Outbound> | undefined;
  strategy: Strategy$Outbound;
  restrictions?: Array<Restrictions$Outbound> | undefined;
  start_time?: string | undefined;
  color?: string | undefined;
  member_ids?: Array<string> | undefined;
};

/** @internal */
export const PostV1TeamsTeamIdOnCallSchedules$outboundSchema: z.ZodType<
  PostV1TeamsTeamIdOnCallSchedules$Outbound,
  z.ZodTypeDef,
  PostV1TeamsTeamIdOnCallSchedules
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  timeZone: z.string(),
  slackUserGroupId: z.string().optional(),
  members: z.array(
    z.lazy(() => PostV1TeamsTeamIdOnCallSchedulesMembers$outboundSchema),
  ).optional(),
  strategy: z.lazy(() => Strategy$outboundSchema),
  restrictions: z.array(z.lazy(() => Restrictions$outboundSchema)).optional(),
  startTime: z.string().optional(),
  color: z.string().optional(),
  memberIds: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    timeZone: "time_zone",
    slackUserGroupId: "slack_user_group_id",
    startTime: "start_time",
    memberIds: "member_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1TeamsTeamIdOnCallSchedules$ {
  /** @deprecated use `PostV1TeamsTeamIdOnCallSchedules$inboundSchema` instead. */
  export const inboundSchema = PostV1TeamsTeamIdOnCallSchedules$inboundSchema;
  /** @deprecated use `PostV1TeamsTeamIdOnCallSchedules$outboundSchema` instead. */
  export const outboundSchema = PostV1TeamsTeamIdOnCallSchedules$outboundSchema;
  /** @deprecated use `PostV1TeamsTeamIdOnCallSchedules$Outbound` instead. */
  export type Outbound = PostV1TeamsTeamIdOnCallSchedules$Outbound;
}

export function postV1TeamsTeamIdOnCallSchedulesToJSON(
  postV1TeamsTeamIdOnCallSchedules: PostV1TeamsTeamIdOnCallSchedules,
): string {
  return JSON.stringify(
    PostV1TeamsTeamIdOnCallSchedules$outboundSchema.parse(
      postV1TeamsTeamIdOnCallSchedules,
    ),
  );
}

export function postV1TeamsTeamIdOnCallSchedulesFromJSON(
  jsonString: string,
): SafeParseResult<PostV1TeamsTeamIdOnCallSchedules, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1TeamsTeamIdOnCallSchedules$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1TeamsTeamIdOnCallSchedules' from JSON`,
  );
}
