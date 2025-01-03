/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Arbitrary key/value pairs of labels.
 */
export type ChangeEntityLabels = {};

/**
 * ChangeEntity model
 */
export type ChangeEntity = {
  /**
   * UUID of the Change
   */
  id?: string | undefined;
  /**
   * Description of the Change
   */
  summary?: string | undefined;
  /**
   * The time the change entry was created
   */
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  /**
   * Arbitrary key/value pairs of labels.
   */
  labels?: ChangeEntityLabels | undefined;
  /**
   * Description of the Change
   */
  description?: string | undefined;
};

/** @internal */
export const ChangeEntityLabels$inboundSchema: z.ZodType<
  ChangeEntityLabels,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ChangeEntityLabels$Outbound = {};

/** @internal */
export const ChangeEntityLabels$outboundSchema: z.ZodType<
  ChangeEntityLabels$Outbound,
  z.ZodTypeDef,
  ChangeEntityLabels
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeEntityLabels$ {
  /** @deprecated use `ChangeEntityLabels$inboundSchema` instead. */
  export const inboundSchema = ChangeEntityLabels$inboundSchema;
  /** @deprecated use `ChangeEntityLabels$outboundSchema` instead. */
  export const outboundSchema = ChangeEntityLabels$outboundSchema;
  /** @deprecated use `ChangeEntityLabels$Outbound` instead. */
  export type Outbound = ChangeEntityLabels$Outbound;
}

export function changeEntityLabelsToJSON(
  changeEntityLabels: ChangeEntityLabels,
): string {
  return JSON.stringify(
    ChangeEntityLabels$outboundSchema.parse(changeEntityLabels),
  );
}

export function changeEntityLabelsFromJSON(
  jsonString: string,
): SafeParseResult<ChangeEntityLabels, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChangeEntityLabels$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChangeEntityLabels' from JSON`,
  );
}

/** @internal */
export const ChangeEntity$inboundSchema: z.ZodType<
  ChangeEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  summary: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  labels: z.lazy(() => ChangeEntityLabels$inboundSchema).optional(),
  description: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type ChangeEntity$Outbound = {
  id?: string | undefined;
  summary?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  labels?: ChangeEntityLabels$Outbound | undefined;
  description?: string | undefined;
};

/** @internal */
export const ChangeEntity$outboundSchema: z.ZodType<
  ChangeEntity$Outbound,
  z.ZodTypeDef,
  ChangeEntity
> = z.object({
  id: z.string().optional(),
  summary: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  labels: z.lazy(() => ChangeEntityLabels$outboundSchema).optional(),
  description: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeEntity$ {
  /** @deprecated use `ChangeEntity$inboundSchema` instead. */
  export const inboundSchema = ChangeEntity$inboundSchema;
  /** @deprecated use `ChangeEntity$outboundSchema` instead. */
  export const outboundSchema = ChangeEntity$outboundSchema;
  /** @deprecated use `ChangeEntity$Outbound` instead. */
  export type Outbound = ChangeEntity$Outbound;
}

export function changeEntityToJSON(changeEntity: ChangeEntity): string {
  return JSON.stringify(ChangeEntity$outboundSchema.parse(changeEntity));
}

export function changeEntityFromJSON(
  jsonString: string,
): SafeParseResult<ChangeEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChangeEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChangeEntity' from JSON`,
  );
}
