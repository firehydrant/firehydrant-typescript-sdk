/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * PriorityEntity model
 */
export type PriorityEntity = {
  slug?: string | undefined;
  description?: string | undefined;
  position?: number | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  default?: boolean | undefined;
};

/** @internal */
export const PriorityEntity$inboundSchema: z.ZodType<
  PriorityEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string().optional(),
  description: z.string().optional(),
  position: z.number().int().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  default: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type PriorityEntity$Outbound = {
  slug?: string | undefined;
  description?: string | undefined;
  position?: number | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  default?: boolean | undefined;
};

/** @internal */
export const PriorityEntity$outboundSchema: z.ZodType<
  PriorityEntity$Outbound,
  z.ZodTypeDef,
  PriorityEntity
> = z.object({
  slug: z.string().optional(),
  description: z.string().optional(),
  position: z.number().int().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  default: z.boolean().optional(),
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
export namespace PriorityEntity$ {
  /** @deprecated use `PriorityEntity$inboundSchema` instead. */
  export const inboundSchema = PriorityEntity$inboundSchema;
  /** @deprecated use `PriorityEntity$outboundSchema` instead. */
  export const outboundSchema = PriorityEntity$outboundSchema;
  /** @deprecated use `PriorityEntity$Outbound` instead. */
  export type Outbound = PriorityEntity$Outbound;
}

export function priorityEntityToJSON(priorityEntity: PriorityEntity): string {
  return JSON.stringify(PriorityEntity$outboundSchema.parse(priorityEntity));
}

export function priorityEntityFromJSON(
  jsonString: string,
): SafeParseResult<PriorityEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PriorityEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PriorityEntity' from JSON`,
  );
}
