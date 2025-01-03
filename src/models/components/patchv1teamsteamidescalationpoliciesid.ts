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
 * The type of target that the step will notify.
 */
export const PatchV1TeamsTeamIdEscalationPoliciesIdType = {
  OnCallSchedule: "OnCallSchedule",
  User: "User",
  SlackChannel: "SlackChannel",
  EntireTeam: "EntireTeam",
  Webhook: "Webhook",
} as const;
/**
 * The type of target that the step will notify.
 */
export type PatchV1TeamsTeamIdEscalationPoliciesIdType = ClosedEnum<
  typeof PatchV1TeamsTeamIdEscalationPoliciesIdType
>;

export type PatchV1TeamsTeamIdEscalationPoliciesIdTargets = {
  /**
   * The type of target that the step will notify.
   */
  type: PatchV1TeamsTeamIdEscalationPoliciesIdType;
  /**
   * The ID of the target that the step will notify.
   */
  id: string;
};

export type PatchV1TeamsTeamIdEscalationPoliciesIdSteps = {
  /**
   * A list of targets that the step will notify. You can specify up to 15 targets per step.
   */
  targets?: Array<PatchV1TeamsTeamIdEscalationPoliciesIdTargets> | undefined;
  /**
   * An ISO8601 duration string specifying how long to wait before moving on to the next step. For the last step, this value specifies how long to wait before the escalation policy should repeat, if it repeats.
   */
  timeout: string;
};

/**
 * The type of target to which the policy will hand off.
 */
export const PatchV1TeamsTeamIdEscalationPoliciesIdTargetType = {
  EscalationPolicy: "EscalationPolicy",
  Team: "Team",
} as const;
/**
 * The type of target to which the policy will hand off.
 */
export type PatchV1TeamsTeamIdEscalationPoliciesIdTargetType = ClosedEnum<
  typeof PatchV1TeamsTeamIdEscalationPoliciesIdTargetType
>;

/**
 * A step that defines where an alert should be sent when the policy is exhausted and the alert is still unacknowledged.
 */
export type PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep = {
  /**
   * The type of target to which the policy will hand off.
   */
  targetType: PatchV1TeamsTeamIdEscalationPoliciesIdTargetType;
  /**
   * The ID of the target to which the policy will hand off.
   */
  targetId: string;
};

/**
 * Update a Signals escalation policy by ID
 */
export type PatchV1TeamsTeamIdEscalationPoliciesId = {
  /**
   * The escalation policy's name.
   */
  name?: string | undefined;
  /**
   * A detailed description of the escalation policy.
   */
  description?: string | undefined;
  /**
   * The number of times that the escalation policy should repeat before an alert is dropped.
   */
  repetitions?: number | undefined;
  /**
   * Whether this escalation policy should be the default for the team.
   */
  default?: boolean | undefined;
  /**
   * A list of steps that define how an alert should escalate through the policy.
   */
  steps?: Array<PatchV1TeamsTeamIdEscalationPoliciesIdSteps> | undefined;
  /**
   * A step that defines where an alert should be sent when the policy is exhausted and the alert is still unacknowledged.
   */
  handoffStep?: PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep | undefined;
};

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdType$inboundSchema:
  z.ZodNativeEnum<typeof PatchV1TeamsTeamIdEscalationPoliciesIdType> = z
    .nativeEnum(PatchV1TeamsTeamIdEscalationPoliciesIdType);

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdType$outboundSchema:
  z.ZodNativeEnum<typeof PatchV1TeamsTeamIdEscalationPoliciesIdType> =
    PatchV1TeamsTeamIdEscalationPoliciesIdType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamIdEscalationPoliciesIdType$ {
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdType$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdType$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdType$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdType$outboundSchema;
}

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdTargets$inboundSchema:
  z.ZodType<
    PatchV1TeamsTeamIdEscalationPoliciesIdTargets,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: PatchV1TeamsTeamIdEscalationPoliciesIdType$inboundSchema,
    id: z.string(),
  });

/** @internal */
export type PatchV1TeamsTeamIdEscalationPoliciesIdTargets$Outbound = {
  type: string;
  id: string;
};

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdTargets$outboundSchema:
  z.ZodType<
    PatchV1TeamsTeamIdEscalationPoliciesIdTargets$Outbound,
    z.ZodTypeDef,
    PatchV1TeamsTeamIdEscalationPoliciesIdTargets
  > = z.object({
    type: PatchV1TeamsTeamIdEscalationPoliciesIdType$outboundSchema,
    id: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamIdEscalationPoliciesIdTargets$ {
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdTargets$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdTargets$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdTargets$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdTargets$outboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdTargets$Outbound` instead. */
  export type Outbound = PatchV1TeamsTeamIdEscalationPoliciesIdTargets$Outbound;
}

export function patchV1TeamsTeamIdEscalationPoliciesIdTargetsToJSON(
  patchV1TeamsTeamIdEscalationPoliciesIdTargets:
    PatchV1TeamsTeamIdEscalationPoliciesIdTargets,
): string {
  return JSON.stringify(
    PatchV1TeamsTeamIdEscalationPoliciesIdTargets$outboundSchema.parse(
      patchV1TeamsTeamIdEscalationPoliciesIdTargets,
    ),
  );
}

export function patchV1TeamsTeamIdEscalationPoliciesIdTargetsFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchV1TeamsTeamIdEscalationPoliciesIdTargets,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1TeamsTeamIdEscalationPoliciesIdTargets$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchV1TeamsTeamIdEscalationPoliciesIdTargets' from JSON`,
  );
}

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdSteps$inboundSchema:
  z.ZodType<
    PatchV1TeamsTeamIdEscalationPoliciesIdSteps,
    z.ZodTypeDef,
    unknown
  > = z.object({
    targets: z.array(
      z.lazy(() => PatchV1TeamsTeamIdEscalationPoliciesIdTargets$inboundSchema),
    ).optional(),
    timeout: z.string(),
  });

/** @internal */
export type PatchV1TeamsTeamIdEscalationPoliciesIdSteps$Outbound = {
  targets?:
    | Array<PatchV1TeamsTeamIdEscalationPoliciesIdTargets$Outbound>
    | undefined;
  timeout: string;
};

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdSteps$outboundSchema:
  z.ZodType<
    PatchV1TeamsTeamIdEscalationPoliciesIdSteps$Outbound,
    z.ZodTypeDef,
    PatchV1TeamsTeamIdEscalationPoliciesIdSteps
  > = z.object({
    targets: z.array(
      z.lazy(() =>
        PatchV1TeamsTeamIdEscalationPoliciesIdTargets$outboundSchema
      ),
    ).optional(),
    timeout: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamIdEscalationPoliciesIdSteps$ {
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdSteps$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdSteps$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdSteps$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdSteps$outboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdSteps$Outbound` instead. */
  export type Outbound = PatchV1TeamsTeamIdEscalationPoliciesIdSteps$Outbound;
}

export function patchV1TeamsTeamIdEscalationPoliciesIdStepsToJSON(
  patchV1TeamsTeamIdEscalationPoliciesIdSteps:
    PatchV1TeamsTeamIdEscalationPoliciesIdSteps,
): string {
  return JSON.stringify(
    PatchV1TeamsTeamIdEscalationPoliciesIdSteps$outboundSchema.parse(
      patchV1TeamsTeamIdEscalationPoliciesIdSteps,
    ),
  );
}

export function patchV1TeamsTeamIdEscalationPoliciesIdStepsFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchV1TeamsTeamIdEscalationPoliciesIdSteps,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1TeamsTeamIdEscalationPoliciesIdSteps$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchV1TeamsTeamIdEscalationPoliciesIdSteps' from JSON`,
  );
}

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$inboundSchema:
  z.ZodNativeEnum<typeof PatchV1TeamsTeamIdEscalationPoliciesIdTargetType> = z
    .nativeEnum(PatchV1TeamsTeamIdEscalationPoliciesIdTargetType);

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$outboundSchema:
  z.ZodNativeEnum<typeof PatchV1TeamsTeamIdEscalationPoliciesIdTargetType> =
    PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$ {
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$outboundSchema;
}

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$inboundSchema:
  z.ZodType<
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep,
    z.ZodTypeDef,
    unknown
  > = z.object({
    target_type: PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$inboundSchema,
    target_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "target_type": "targetType",
      "target_id": "targetId",
    });
  });

/** @internal */
export type PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$Outbound = {
  target_type: string;
  target_id: string;
};

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$outboundSchema:
  z.ZodType<
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$Outbound,
    z.ZodTypeDef,
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep
  > = z.object({
    targetType: PatchV1TeamsTeamIdEscalationPoliciesIdTargetType$outboundSchema,
    targetId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      targetType: "target_type",
      targetId: "target_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$ {
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$outboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$Outbound` instead. */
  export type Outbound =
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$Outbound;
}

export function patchV1TeamsTeamIdEscalationPoliciesIdHandoffStepToJSON(
  patchV1TeamsTeamIdEscalationPoliciesIdHandoffStep:
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep,
): string {
  return JSON.stringify(
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$outboundSchema.parse(
      patchV1TeamsTeamIdEscalationPoliciesIdHandoffStep,
    ),
  );
}

export function patchV1TeamsTeamIdEscalationPoliciesIdHandoffStepFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep' from JSON`,
  );
}

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesId$inboundSchema: z.ZodType<
  PatchV1TeamsTeamIdEscalationPoliciesId,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  repetitions: z.number().int().default(0),
  default: z.boolean().default(false),
  steps: z.array(
    z.lazy(() => PatchV1TeamsTeamIdEscalationPoliciesIdSteps$inboundSchema),
  ).optional(),
  handoff_step: z.lazy(() =>
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "handoff_step": "handoffStep",
  });
});

/** @internal */
export type PatchV1TeamsTeamIdEscalationPoliciesId$Outbound = {
  name?: string | undefined;
  description?: string | undefined;
  repetitions: number;
  default: boolean;
  steps?:
    | Array<PatchV1TeamsTeamIdEscalationPoliciesIdSteps$Outbound>
    | undefined;
  handoff_step?:
    | PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$Outbound
    | undefined;
};

/** @internal */
export const PatchV1TeamsTeamIdEscalationPoliciesId$outboundSchema: z.ZodType<
  PatchV1TeamsTeamIdEscalationPoliciesId$Outbound,
  z.ZodTypeDef,
  PatchV1TeamsTeamIdEscalationPoliciesId
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  repetitions: z.number().int().default(0),
  default: z.boolean().default(false),
  steps: z.array(
    z.lazy(() => PatchV1TeamsTeamIdEscalationPoliciesIdSteps$outboundSchema),
  ).optional(),
  handoffStep: z.lazy(() =>
    PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    handoffStep: "handoff_step",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1TeamsTeamIdEscalationPoliciesId$ {
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesId$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesId$inboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesId$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1TeamsTeamIdEscalationPoliciesId$outboundSchema;
  /** @deprecated use `PatchV1TeamsTeamIdEscalationPoliciesId$Outbound` instead. */
  export type Outbound = PatchV1TeamsTeamIdEscalationPoliciesId$Outbound;
}

export function patchV1TeamsTeamIdEscalationPoliciesIdToJSON(
  patchV1TeamsTeamIdEscalationPoliciesId:
    PatchV1TeamsTeamIdEscalationPoliciesId,
): string {
  return JSON.stringify(
    PatchV1TeamsTeamIdEscalationPoliciesId$outboundSchema.parse(
      patchV1TeamsTeamIdEscalationPoliciesId,
    ),
  );
}

export function patchV1TeamsTeamIdEscalationPoliciesIdFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1TeamsTeamIdEscalationPoliciesId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1TeamsTeamIdEscalationPoliciesId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1TeamsTeamIdEscalationPoliciesId' from JSON`,
  );
}
