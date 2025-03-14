/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IntegrationsAwsConnectionEntity,
  IntegrationsAwsConnectionEntity$inboundSchema,
  IntegrationsAwsConnectionEntity$Outbound,
  IntegrationsAwsConnectionEntity$outboundSchema,
} from "./integrationsawsconnectionentity.js";

export const IntegrationsAwsCloudtrailBatchEntityStatus = {
  InProgress: "in_progress",
  Failed: "failed",
  Successful: "successful",
  Pending: "pending",
  Retried: "retried",
} as const;
export type IntegrationsAwsCloudtrailBatchEntityStatus = ClosedEnum<
  typeof IntegrationsAwsCloudtrailBatchEntityStatus
>;

/**
 * Integrations_Aws_CloudtrailBatchEntity model
 */
export type IntegrationsAwsCloudtrailBatchEntity = {
  id?: string | undefined;
  eventsCreated?: number | undefined;
  status?: IntegrationsAwsCloudtrailBatchEntityStatus | undefined;
  startsAt?: Date | undefined;
  endsAt?: Date | undefined;
  /**
   * Integrations_Aws_ConnectionEntity model
   */
  connection?: IntegrationsAwsConnectionEntity | undefined;
  createdAt?: Date | undefined;
};

/** @internal */
export const IntegrationsAwsCloudtrailBatchEntityStatus$inboundSchema:
  z.ZodNativeEnum<typeof IntegrationsAwsCloudtrailBatchEntityStatus> = z
    .nativeEnum(IntegrationsAwsCloudtrailBatchEntityStatus);

/** @internal */
export const IntegrationsAwsCloudtrailBatchEntityStatus$outboundSchema:
  z.ZodNativeEnum<typeof IntegrationsAwsCloudtrailBatchEntityStatus> =
    IntegrationsAwsCloudtrailBatchEntityStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsAwsCloudtrailBatchEntityStatus$ {
  /** @deprecated use `IntegrationsAwsCloudtrailBatchEntityStatus$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsAwsCloudtrailBatchEntityStatus$inboundSchema;
  /** @deprecated use `IntegrationsAwsCloudtrailBatchEntityStatus$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsAwsCloudtrailBatchEntityStatus$outboundSchema;
}

/** @internal */
export const IntegrationsAwsCloudtrailBatchEntity$inboundSchema: z.ZodType<
  IntegrationsAwsCloudtrailBatchEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  events_created: z.number().int().optional(),
  status: IntegrationsAwsCloudtrailBatchEntityStatus$inboundSchema.optional(),
  starts_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  ends_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  connection: IntegrationsAwsConnectionEntity$inboundSchema.optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "events_created": "eventsCreated",
    "starts_at": "startsAt",
    "ends_at": "endsAt",
    "created_at": "createdAt",
  });
});

/** @internal */
export type IntegrationsAwsCloudtrailBatchEntity$Outbound = {
  id?: string | undefined;
  events_created?: number | undefined;
  status?: string | undefined;
  starts_at?: string | undefined;
  ends_at?: string | undefined;
  connection?: IntegrationsAwsConnectionEntity$Outbound | undefined;
  created_at?: string | undefined;
};

/** @internal */
export const IntegrationsAwsCloudtrailBatchEntity$outboundSchema: z.ZodType<
  IntegrationsAwsCloudtrailBatchEntity$Outbound,
  z.ZodTypeDef,
  IntegrationsAwsCloudtrailBatchEntity
> = z.object({
  id: z.string().optional(),
  eventsCreated: z.number().int().optional(),
  status: IntegrationsAwsCloudtrailBatchEntityStatus$outboundSchema.optional(),
  startsAt: z.date().transform(v => v.toISOString()).optional(),
  endsAt: z.date().transform(v => v.toISOString()).optional(),
  connection: IntegrationsAwsConnectionEntity$outboundSchema.optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    eventsCreated: "events_created",
    startsAt: "starts_at",
    endsAt: "ends_at",
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsAwsCloudtrailBatchEntity$ {
  /** @deprecated use `IntegrationsAwsCloudtrailBatchEntity$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsAwsCloudtrailBatchEntity$inboundSchema;
  /** @deprecated use `IntegrationsAwsCloudtrailBatchEntity$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsAwsCloudtrailBatchEntity$outboundSchema;
  /** @deprecated use `IntegrationsAwsCloudtrailBatchEntity$Outbound` instead. */
  export type Outbound = IntegrationsAwsCloudtrailBatchEntity$Outbound;
}

export function integrationsAwsCloudtrailBatchEntityToJSON(
  integrationsAwsCloudtrailBatchEntity: IntegrationsAwsCloudtrailBatchEntity,
): string {
  return JSON.stringify(
    IntegrationsAwsCloudtrailBatchEntity$outboundSchema.parse(
      integrationsAwsCloudtrailBatchEntity,
    ),
  );
}

export function integrationsAwsCloudtrailBatchEntityFromJSON(
  jsonString: string,
): SafeParseResult<IntegrationsAwsCloudtrailBatchEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      IntegrationsAwsCloudtrailBatchEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IntegrationsAwsCloudtrailBatchEntity' from JSON`,
  );
}
