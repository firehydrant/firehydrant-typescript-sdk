/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * UserEntity model
 */
export type UserEntity = {
  id?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  slackUserId?: string | undefined;
  slackLinked?: boolean | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  signalsEnabledNotificationTypes?: Array<string> | undefined;
};

/** @internal */
export const UserEntity$inboundSchema: z.ZodType<
  UserEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  slack_user_id: z.string().optional(),
  "slack_linked?": z.boolean().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  signals_enabled_notification_types: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "slack_user_id": "slackUserId",
    "slack_linked?": "slackLinked",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "signals_enabled_notification_types": "signalsEnabledNotificationTypes",
  });
});

/** @internal */
export type UserEntity$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  slack_user_id?: string | undefined;
  "slack_linked?"?: boolean | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  signals_enabled_notification_types?: Array<string> | undefined;
};

/** @internal */
export const UserEntity$outboundSchema: z.ZodType<
  UserEntity$Outbound,
  z.ZodTypeDef,
  UserEntity
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  slackUserId: z.string().optional(),
  slackLinked: z.boolean().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  signalsEnabledNotificationTypes: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    slackUserId: "slack_user_id",
    slackLinked: "slack_linked?",
    createdAt: "created_at",
    updatedAt: "updated_at",
    signalsEnabledNotificationTypes: "signals_enabled_notification_types",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserEntity$ {
  /** @deprecated use `UserEntity$inboundSchema` instead. */
  export const inboundSchema = UserEntity$inboundSchema;
  /** @deprecated use `UserEntity$outboundSchema` instead. */
  export const outboundSchema = UserEntity$outboundSchema;
  /** @deprecated use `UserEntity$Outbound` instead. */
  export type Outbound = UserEntity$Outbound;
}

export function userEntityToJSON(userEntity: UserEntity): string {
  return JSON.stringify(UserEntity$outboundSchema.parse(userEntity));
}

export function userEntityFromJSON(
  jsonString: string,
): SafeParseResult<UserEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserEntity' from JSON`,
  );
}
