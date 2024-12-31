/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of target that the inbound email will notify when matched.
 */
export const PatchV1SignalsEmailTargetsIdType = {
  Team: "Team",
  EntireTeam: "EntireTeam",
  EscalationPolicy: "EscalationPolicy",
  OnCallSchedule: "OnCallSchedule",
  User: "User",
  SlackChannel: "SlackChannel",
  Webhook: "Webhook",
} as const;
/**
 * The type of target that the inbound email will notify when matched.
 */
export type PatchV1SignalsEmailTargetsIdType = ClosedEnum<
  typeof PatchV1SignalsEmailTargetsIdType
>;

/**
 * The target that the email target will notify. This object must contain a `type`
 *
 * @remarks
 * field that specifies the type of target and an `id` field that specifies the ID of
 * the target. The `type` field must be one of "escalation_policy", "on_call_schedule",
 * "team", "user", or "slack_channel".
 */
export type PatchV1SignalsEmailTargetsIdTarget = {
  /**
   * The type of target that the inbound email will notify when matched.
   */
  type: PatchV1SignalsEmailTargetsIdType;
  /**
   * The ID of the target that the inbound email will notify when matched.
   */
  id: string;
};

/**
 * Whether or not all rules must match, or if only one rule must match.
 */
export const PatchV1SignalsEmailTargetsIdRuleMatchingStrategy = {
  All: "all",
  Any: "any",
} as const;
/**
 * Whether or not all rules must match, or if only one rule must match.
 */
export type PatchV1SignalsEmailTargetsIdRuleMatchingStrategy = ClosedEnum<
  typeof PatchV1SignalsEmailTargetsIdRuleMatchingStrategy
>;

/**
 * Update a Signals email target by ID
 */
export type PatchV1SignalsEmailTargetsId = {
  /**
   * The email target's name.
   */
  name?: string | undefined;
  /**
   * The email address that will be listening to events.
   */
  slug?: string | undefined;
  /**
   * A detailed description of the email target.
   */
  description?: string | undefined;
  /**
   * The target that the email target will notify. This object must contain a `type`
   *
   * @remarks
   * field that specifies the type of target and an `id` field that specifies the ID of
   * the target. The `type` field must be one of "escalation_policy", "on_call_schedule",
   * "team", "user", or "slack_channel".
   */
  target?: PatchV1SignalsEmailTargetsIdTarget | undefined;
  /**
   * A list of email addresses that are allowed to send events to the target. Must be exact match.
   */
  allowedSenders?: Array<string> | undefined;
  /**
   * The CEL expression that defines the status of an incoming email that is sent to the target.
   */
  statusCel?: string | undefined;
  /**
   * The CEL expression that defines the level of an incoming email that is sent to the target.
   */
  levelCel?: string | undefined;
  /**
   * A list of CEL expressions that should be evaluated and matched to determine if the target should be notified.
   */
  rules?: Array<string> | undefined;
  /**
   * Whether or not all rules must match, or if only one rule must match.
   */
  ruleMatchingStrategy?:
    | PatchV1SignalsEmailTargetsIdRuleMatchingStrategy
    | undefined;
};

/** @internal */
export const PatchV1SignalsEmailTargetsIdType$inboundSchema: z.ZodNativeEnum<
  typeof PatchV1SignalsEmailTargetsIdType
> = z.nativeEnum(PatchV1SignalsEmailTargetsIdType);

/** @internal */
export const PatchV1SignalsEmailTargetsIdType$outboundSchema: z.ZodNativeEnum<
  typeof PatchV1SignalsEmailTargetsIdType
> = PatchV1SignalsEmailTargetsIdType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1SignalsEmailTargetsIdType$ {
  /** @deprecated use `PatchV1SignalsEmailTargetsIdType$inboundSchema` instead. */
  export const inboundSchema = PatchV1SignalsEmailTargetsIdType$inboundSchema;
  /** @deprecated use `PatchV1SignalsEmailTargetsIdType$outboundSchema` instead. */
  export const outboundSchema = PatchV1SignalsEmailTargetsIdType$outboundSchema;
}

/** @internal */
export const PatchV1SignalsEmailTargetsIdTarget$inboundSchema: z.ZodType<
  PatchV1SignalsEmailTargetsIdTarget,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: PatchV1SignalsEmailTargetsIdType$inboundSchema,
  id: z.string(),
});

/** @internal */
export type PatchV1SignalsEmailTargetsIdTarget$Outbound = {
  type: string;
  id: string;
};

/** @internal */
export const PatchV1SignalsEmailTargetsIdTarget$outboundSchema: z.ZodType<
  PatchV1SignalsEmailTargetsIdTarget$Outbound,
  z.ZodTypeDef,
  PatchV1SignalsEmailTargetsIdTarget
> = z.object({
  type: PatchV1SignalsEmailTargetsIdType$outboundSchema,
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1SignalsEmailTargetsIdTarget$ {
  /** @deprecated use `PatchV1SignalsEmailTargetsIdTarget$inboundSchema` instead. */
  export const inboundSchema = PatchV1SignalsEmailTargetsIdTarget$inboundSchema;
  /** @deprecated use `PatchV1SignalsEmailTargetsIdTarget$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1SignalsEmailTargetsIdTarget$outboundSchema;
  /** @deprecated use `PatchV1SignalsEmailTargetsIdTarget$Outbound` instead. */
  export type Outbound = PatchV1SignalsEmailTargetsIdTarget$Outbound;
}

export function patchV1SignalsEmailTargetsIdTargetToJSON(
  patchV1SignalsEmailTargetsIdTarget: PatchV1SignalsEmailTargetsIdTarget,
): string {
  return JSON.stringify(
    PatchV1SignalsEmailTargetsIdTarget$outboundSchema.parse(
      patchV1SignalsEmailTargetsIdTarget,
    ),
  );
}

export function patchV1SignalsEmailTargetsIdTargetFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1SignalsEmailTargetsIdTarget, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1SignalsEmailTargetsIdTarget$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1SignalsEmailTargetsIdTarget' from JSON`,
  );
}

/** @internal */
export const PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$inboundSchema:
  z.ZodNativeEnum<typeof PatchV1SignalsEmailTargetsIdRuleMatchingStrategy> = z
    .nativeEnum(PatchV1SignalsEmailTargetsIdRuleMatchingStrategy);

/** @internal */
export const PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$outboundSchema:
  z.ZodNativeEnum<typeof PatchV1SignalsEmailTargetsIdRuleMatchingStrategy> =
    PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$ {
  /** @deprecated use `PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$inboundSchema;
  /** @deprecated use `PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$outboundSchema;
}

/** @internal */
export const PatchV1SignalsEmailTargetsId$inboundSchema: z.ZodType<
  PatchV1SignalsEmailTargetsId,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  target: z.lazy(() => PatchV1SignalsEmailTargetsIdTarget$inboundSchema)
    .optional(),
  allowed_senders: z.array(z.string()).optional(),
  status_cel: z.string().optional(),
  level_cel: z.string().optional(),
  rules: z.array(z.string()).optional(),
  rule_matching_strategy:
    PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "allowed_senders": "allowedSenders",
    "status_cel": "statusCel",
    "level_cel": "levelCel",
    "rule_matching_strategy": "ruleMatchingStrategy",
  });
});

/** @internal */
export type PatchV1SignalsEmailTargetsId$Outbound = {
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  target?: PatchV1SignalsEmailTargetsIdTarget$Outbound | undefined;
  allowed_senders?: Array<string> | undefined;
  status_cel?: string | undefined;
  level_cel?: string | undefined;
  rules?: Array<string> | undefined;
  rule_matching_strategy?: string | undefined;
};

/** @internal */
export const PatchV1SignalsEmailTargetsId$outboundSchema: z.ZodType<
  PatchV1SignalsEmailTargetsId$Outbound,
  z.ZodTypeDef,
  PatchV1SignalsEmailTargetsId
> = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  target: z.lazy(() => PatchV1SignalsEmailTargetsIdTarget$outboundSchema)
    .optional(),
  allowedSenders: z.array(z.string()).optional(),
  statusCel: z.string().optional(),
  levelCel: z.string().optional(),
  rules: z.array(z.string()).optional(),
  ruleMatchingStrategy:
    PatchV1SignalsEmailTargetsIdRuleMatchingStrategy$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    allowedSenders: "allowed_senders",
    statusCel: "status_cel",
    levelCel: "level_cel",
    ruleMatchingStrategy: "rule_matching_strategy",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1SignalsEmailTargetsId$ {
  /** @deprecated use `PatchV1SignalsEmailTargetsId$inboundSchema` instead. */
  export const inboundSchema = PatchV1SignalsEmailTargetsId$inboundSchema;
  /** @deprecated use `PatchV1SignalsEmailTargetsId$outboundSchema` instead. */
  export const outboundSchema = PatchV1SignalsEmailTargetsId$outboundSchema;
  /** @deprecated use `PatchV1SignalsEmailTargetsId$Outbound` instead. */
  export type Outbound = PatchV1SignalsEmailTargetsId$Outbound;
}

export function patchV1SignalsEmailTargetsIdToJSON(
  patchV1SignalsEmailTargetsId: PatchV1SignalsEmailTargetsId,
): string {
  return JSON.stringify(
    PatchV1SignalsEmailTargetsId$outboundSchema.parse(
      patchV1SignalsEmailTargetsId,
    ),
  );
}

export function patchV1SignalsEmailTargetsIdFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1SignalsEmailTargetsId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchV1SignalsEmailTargetsId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1SignalsEmailTargetsId' from JSON`,
  );
}
