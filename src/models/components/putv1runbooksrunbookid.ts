/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * An object representing a Team that owns the runbook
 */
export type PutV1RunbooksRunbookIdOwner = {
  id?: string | undefined;
};

export type PutV1RunbooksRunbookIdSeverities = {
  id?: string | undefined;
};

export type PutV1RunbooksRunbookIdServices = {
  id?: string | undefined;
};

export type Environments = {
  id?: string | undefined;
};

export type PutV1RunbooksRunbookIdAttachmentRule = {
  /**
   * The JSON logic for the attaching the runbook
   */
  logic: string;
  /**
   * The user data for the rule
   */
  userData?: string | undefined;
};

export type PutV1RunbooksRunbookIdRule = {
  /**
   * The JSON logic for the rule
   */
  logic: string;
  /**
   * The user data for the rule
   */
  userData?: string | undefined;
};

export type PutV1RunbooksRunbookIdSteps = {
  /**
   * ID of step to be updated
   */
  stepId?: string | undefined;
  /**
   * Name for step
   */
  name: string;
  /**
   * ID of action to use for this step.
   */
  actionId: string;
  rule?: PutV1RunbooksRunbookIdRule | undefined;
};

/**
 * Update a runbook and any attachment rules associated with it. This endpoint is used to configure nearly everything
 *
 * @remarks
 * about a runbook, including but not limited to the steps, environments, attachment rules, and severities.
 */
export type PutV1RunbooksRunbookId = {
  name?: string | undefined;
  summary?: string | undefined;
  description?: string | undefined;
  /**
   * Whether or not this runbook is a tutorial runbook
   */
  tutorial?: boolean | undefined;
  /**
   * An object representing a Team that owns the runbook
   */
  owner?: PutV1RunbooksRunbookIdOwner | undefined;
  severities?: Array<PutV1RunbooksRunbookIdSeverities> | undefined;
  services?: Array<PutV1RunbooksRunbookIdServices> | undefined;
  environments?: Array<Environments> | undefined;
  attachmentRule?: PutV1RunbooksRunbookIdAttachmentRule | undefined;
  steps?: Array<PutV1RunbooksRunbookIdSteps> | undefined;
  /**
   * Whether or not this runbook should be automatically attached to restricted incidents. Note that setting this to `true` will prevent it from being attached to public incidents, even manually. Defaults to `false`.
   */
  autoAttachToRestrictedIncidents?: boolean | undefined;
};

/** @internal */
export const PutV1RunbooksRunbookIdOwner$inboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdOwner,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type PutV1RunbooksRunbookIdOwner$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const PutV1RunbooksRunbookIdOwner$outboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdOwner$Outbound,
  z.ZodTypeDef,
  PutV1RunbooksRunbookIdOwner
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1RunbooksRunbookIdOwner$ {
  /** @deprecated use `PutV1RunbooksRunbookIdOwner$inboundSchema` instead. */
  export const inboundSchema = PutV1RunbooksRunbookIdOwner$inboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdOwner$outboundSchema` instead. */
  export const outboundSchema = PutV1RunbooksRunbookIdOwner$outboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdOwner$Outbound` instead. */
  export type Outbound = PutV1RunbooksRunbookIdOwner$Outbound;
}

export function putV1RunbooksRunbookIdOwnerToJSON(
  putV1RunbooksRunbookIdOwner: PutV1RunbooksRunbookIdOwner,
): string {
  return JSON.stringify(
    PutV1RunbooksRunbookIdOwner$outboundSchema.parse(
      putV1RunbooksRunbookIdOwner,
    ),
  );
}

export function putV1RunbooksRunbookIdOwnerFromJSON(
  jsonString: string,
): SafeParseResult<PutV1RunbooksRunbookIdOwner, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1RunbooksRunbookIdOwner$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1RunbooksRunbookIdOwner' from JSON`,
  );
}

/** @internal */
export const PutV1RunbooksRunbookIdSeverities$inboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdSeverities,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type PutV1RunbooksRunbookIdSeverities$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const PutV1RunbooksRunbookIdSeverities$outboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdSeverities$Outbound,
  z.ZodTypeDef,
  PutV1RunbooksRunbookIdSeverities
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1RunbooksRunbookIdSeverities$ {
  /** @deprecated use `PutV1RunbooksRunbookIdSeverities$inboundSchema` instead. */
  export const inboundSchema = PutV1RunbooksRunbookIdSeverities$inboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdSeverities$outboundSchema` instead. */
  export const outboundSchema = PutV1RunbooksRunbookIdSeverities$outboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdSeverities$Outbound` instead. */
  export type Outbound = PutV1RunbooksRunbookIdSeverities$Outbound;
}

export function putV1RunbooksRunbookIdSeveritiesToJSON(
  putV1RunbooksRunbookIdSeverities: PutV1RunbooksRunbookIdSeverities,
): string {
  return JSON.stringify(
    PutV1RunbooksRunbookIdSeverities$outboundSchema.parse(
      putV1RunbooksRunbookIdSeverities,
    ),
  );
}

export function putV1RunbooksRunbookIdSeveritiesFromJSON(
  jsonString: string,
): SafeParseResult<PutV1RunbooksRunbookIdSeverities, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1RunbooksRunbookIdSeverities$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1RunbooksRunbookIdSeverities' from JSON`,
  );
}

/** @internal */
export const PutV1RunbooksRunbookIdServices$inboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdServices,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type PutV1RunbooksRunbookIdServices$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const PutV1RunbooksRunbookIdServices$outboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdServices$Outbound,
  z.ZodTypeDef,
  PutV1RunbooksRunbookIdServices
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1RunbooksRunbookIdServices$ {
  /** @deprecated use `PutV1RunbooksRunbookIdServices$inboundSchema` instead. */
  export const inboundSchema = PutV1RunbooksRunbookIdServices$inboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdServices$outboundSchema` instead. */
  export const outboundSchema = PutV1RunbooksRunbookIdServices$outboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdServices$Outbound` instead. */
  export type Outbound = PutV1RunbooksRunbookIdServices$Outbound;
}

export function putV1RunbooksRunbookIdServicesToJSON(
  putV1RunbooksRunbookIdServices: PutV1RunbooksRunbookIdServices,
): string {
  return JSON.stringify(
    PutV1RunbooksRunbookIdServices$outboundSchema.parse(
      putV1RunbooksRunbookIdServices,
    ),
  );
}

export function putV1RunbooksRunbookIdServicesFromJSON(
  jsonString: string,
): SafeParseResult<PutV1RunbooksRunbookIdServices, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1RunbooksRunbookIdServices$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1RunbooksRunbookIdServices' from JSON`,
  );
}

/** @internal */
export const Environments$inboundSchema: z.ZodType<
  Environments,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type Environments$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const Environments$outboundSchema: z.ZodType<
  Environments$Outbound,
  z.ZodTypeDef,
  Environments
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Environments$ {
  /** @deprecated use `Environments$inboundSchema` instead. */
  export const inboundSchema = Environments$inboundSchema;
  /** @deprecated use `Environments$outboundSchema` instead. */
  export const outboundSchema = Environments$outboundSchema;
  /** @deprecated use `Environments$Outbound` instead. */
  export type Outbound = Environments$Outbound;
}

export function environmentsToJSON(environments: Environments): string {
  return JSON.stringify(Environments$outboundSchema.parse(environments));
}

export function environmentsFromJSON(
  jsonString: string,
): SafeParseResult<Environments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Environments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Environments' from JSON`,
  );
}

/** @internal */
export const PutV1RunbooksRunbookIdAttachmentRule$inboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdAttachmentRule,
  z.ZodTypeDef,
  unknown
> = z.object({
  logic: z.string(),
  user_data: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_data": "userData",
  });
});

/** @internal */
export type PutV1RunbooksRunbookIdAttachmentRule$Outbound = {
  logic: string;
  user_data?: string | undefined;
};

/** @internal */
export const PutV1RunbooksRunbookIdAttachmentRule$outboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdAttachmentRule$Outbound,
  z.ZodTypeDef,
  PutV1RunbooksRunbookIdAttachmentRule
> = z.object({
  logic: z.string(),
  userData: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    userData: "user_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1RunbooksRunbookIdAttachmentRule$ {
  /** @deprecated use `PutV1RunbooksRunbookIdAttachmentRule$inboundSchema` instead. */
  export const inboundSchema =
    PutV1RunbooksRunbookIdAttachmentRule$inboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdAttachmentRule$outboundSchema` instead. */
  export const outboundSchema =
    PutV1RunbooksRunbookIdAttachmentRule$outboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdAttachmentRule$Outbound` instead. */
  export type Outbound = PutV1RunbooksRunbookIdAttachmentRule$Outbound;
}

export function putV1RunbooksRunbookIdAttachmentRuleToJSON(
  putV1RunbooksRunbookIdAttachmentRule: PutV1RunbooksRunbookIdAttachmentRule,
): string {
  return JSON.stringify(
    PutV1RunbooksRunbookIdAttachmentRule$outboundSchema.parse(
      putV1RunbooksRunbookIdAttachmentRule,
    ),
  );
}

export function putV1RunbooksRunbookIdAttachmentRuleFromJSON(
  jsonString: string,
): SafeParseResult<PutV1RunbooksRunbookIdAttachmentRule, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PutV1RunbooksRunbookIdAttachmentRule$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1RunbooksRunbookIdAttachmentRule' from JSON`,
  );
}

/** @internal */
export const PutV1RunbooksRunbookIdRule$inboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdRule,
  z.ZodTypeDef,
  unknown
> = z.object({
  logic: z.string(),
  user_data: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_data": "userData",
  });
});

/** @internal */
export type PutV1RunbooksRunbookIdRule$Outbound = {
  logic: string;
  user_data?: string | undefined;
};

/** @internal */
export const PutV1RunbooksRunbookIdRule$outboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdRule$Outbound,
  z.ZodTypeDef,
  PutV1RunbooksRunbookIdRule
> = z.object({
  logic: z.string(),
  userData: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    userData: "user_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1RunbooksRunbookIdRule$ {
  /** @deprecated use `PutV1RunbooksRunbookIdRule$inboundSchema` instead. */
  export const inboundSchema = PutV1RunbooksRunbookIdRule$inboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdRule$outboundSchema` instead. */
  export const outboundSchema = PutV1RunbooksRunbookIdRule$outboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdRule$Outbound` instead. */
  export type Outbound = PutV1RunbooksRunbookIdRule$Outbound;
}

export function putV1RunbooksRunbookIdRuleToJSON(
  putV1RunbooksRunbookIdRule: PutV1RunbooksRunbookIdRule,
): string {
  return JSON.stringify(
    PutV1RunbooksRunbookIdRule$outboundSchema.parse(putV1RunbooksRunbookIdRule),
  );
}

export function putV1RunbooksRunbookIdRuleFromJSON(
  jsonString: string,
): SafeParseResult<PutV1RunbooksRunbookIdRule, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1RunbooksRunbookIdRule$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1RunbooksRunbookIdRule' from JSON`,
  );
}

/** @internal */
export const PutV1RunbooksRunbookIdSteps$inboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdSteps,
  z.ZodTypeDef,
  unknown
> = z.object({
  step_id: z.string().optional(),
  name: z.string(),
  action_id: z.string(),
  rule: z.lazy(() => PutV1RunbooksRunbookIdRule$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "step_id": "stepId",
    "action_id": "actionId",
  });
});

/** @internal */
export type PutV1RunbooksRunbookIdSteps$Outbound = {
  step_id?: string | undefined;
  name: string;
  action_id: string;
  rule?: PutV1RunbooksRunbookIdRule$Outbound | undefined;
};

/** @internal */
export const PutV1RunbooksRunbookIdSteps$outboundSchema: z.ZodType<
  PutV1RunbooksRunbookIdSteps$Outbound,
  z.ZodTypeDef,
  PutV1RunbooksRunbookIdSteps
> = z.object({
  stepId: z.string().optional(),
  name: z.string(),
  actionId: z.string(),
  rule: z.lazy(() => PutV1RunbooksRunbookIdRule$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    stepId: "step_id",
    actionId: "action_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1RunbooksRunbookIdSteps$ {
  /** @deprecated use `PutV1RunbooksRunbookIdSteps$inboundSchema` instead. */
  export const inboundSchema = PutV1RunbooksRunbookIdSteps$inboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdSteps$outboundSchema` instead. */
  export const outboundSchema = PutV1RunbooksRunbookIdSteps$outboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookIdSteps$Outbound` instead. */
  export type Outbound = PutV1RunbooksRunbookIdSteps$Outbound;
}

export function putV1RunbooksRunbookIdStepsToJSON(
  putV1RunbooksRunbookIdSteps: PutV1RunbooksRunbookIdSteps,
): string {
  return JSON.stringify(
    PutV1RunbooksRunbookIdSteps$outboundSchema.parse(
      putV1RunbooksRunbookIdSteps,
    ),
  );
}

export function putV1RunbooksRunbookIdStepsFromJSON(
  jsonString: string,
): SafeParseResult<PutV1RunbooksRunbookIdSteps, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1RunbooksRunbookIdSteps$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1RunbooksRunbookIdSteps' from JSON`,
  );
}

/** @internal */
export const PutV1RunbooksRunbookId$inboundSchema: z.ZodType<
  PutV1RunbooksRunbookId,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  tutorial: z.boolean().optional(),
  owner: z.lazy(() => PutV1RunbooksRunbookIdOwner$inboundSchema).optional(),
  severities: z.array(
    z.lazy(() => PutV1RunbooksRunbookIdSeverities$inboundSchema),
  ).optional(),
  services: z.array(z.lazy(() => PutV1RunbooksRunbookIdServices$inboundSchema))
    .optional(),
  environments: z.array(z.lazy(() => Environments$inboundSchema)).optional(),
  attachment_rule: z.lazy(() =>
    PutV1RunbooksRunbookIdAttachmentRule$inboundSchema
  ).optional(),
  steps: z.array(z.lazy(() => PutV1RunbooksRunbookIdSteps$inboundSchema))
    .optional(),
  auto_attach_to_restricted_incidents: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "attachment_rule": "attachmentRule",
    "auto_attach_to_restricted_incidents": "autoAttachToRestrictedIncidents",
  });
});

/** @internal */
export type PutV1RunbooksRunbookId$Outbound = {
  name?: string | undefined;
  summary?: string | undefined;
  description?: string | undefined;
  tutorial?: boolean | undefined;
  owner?: PutV1RunbooksRunbookIdOwner$Outbound | undefined;
  severities?: Array<PutV1RunbooksRunbookIdSeverities$Outbound> | undefined;
  services?: Array<PutV1RunbooksRunbookIdServices$Outbound> | undefined;
  environments?: Array<Environments$Outbound> | undefined;
  attachment_rule?: PutV1RunbooksRunbookIdAttachmentRule$Outbound | undefined;
  steps?: Array<PutV1RunbooksRunbookIdSteps$Outbound> | undefined;
  auto_attach_to_restricted_incidents?: boolean | undefined;
};

/** @internal */
export const PutV1RunbooksRunbookId$outboundSchema: z.ZodType<
  PutV1RunbooksRunbookId$Outbound,
  z.ZodTypeDef,
  PutV1RunbooksRunbookId
> = z.object({
  name: z.string().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  tutorial: z.boolean().optional(),
  owner: z.lazy(() => PutV1RunbooksRunbookIdOwner$outboundSchema).optional(),
  severities: z.array(
    z.lazy(() => PutV1RunbooksRunbookIdSeverities$outboundSchema),
  ).optional(),
  services: z.array(z.lazy(() => PutV1RunbooksRunbookIdServices$outboundSchema))
    .optional(),
  environments: z.array(z.lazy(() => Environments$outboundSchema)).optional(),
  attachmentRule: z.lazy(() =>
    PutV1RunbooksRunbookIdAttachmentRule$outboundSchema
  ).optional(),
  steps: z.array(z.lazy(() => PutV1RunbooksRunbookIdSteps$outboundSchema))
    .optional(),
  autoAttachToRestrictedIncidents: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    attachmentRule: "attachment_rule",
    autoAttachToRestrictedIncidents: "auto_attach_to_restricted_incidents",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1RunbooksRunbookId$ {
  /** @deprecated use `PutV1RunbooksRunbookId$inboundSchema` instead. */
  export const inboundSchema = PutV1RunbooksRunbookId$inboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookId$outboundSchema` instead. */
  export const outboundSchema = PutV1RunbooksRunbookId$outboundSchema;
  /** @deprecated use `PutV1RunbooksRunbookId$Outbound` instead. */
  export type Outbound = PutV1RunbooksRunbookId$Outbound;
}

export function putV1RunbooksRunbookIdToJSON(
  putV1RunbooksRunbookId: PutV1RunbooksRunbookId,
): string {
  return JSON.stringify(
    PutV1RunbooksRunbookId$outboundSchema.parse(putV1RunbooksRunbookId),
  );
}

export function putV1RunbooksRunbookIdFromJSON(
  jsonString: string,
): SafeParseResult<PutV1RunbooksRunbookId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1RunbooksRunbookId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1RunbooksRunbookId' from JSON`,
  );
}
