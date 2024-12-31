/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * NuncEmailSubscribersEntity model
 */
export type NuncEmailSubscribersEntity = {
  /**
   * UUID of the subscriber
   */
  id?: string | undefined;
  /**
   * Email of the subscriber
   */
  email?: string | undefined;
  /**
   * The time the subscriber was created
   */
  createdAt?: Date | undefined;
};

/** @internal */
export const NuncEmailSubscribersEntity$inboundSchema: z.ZodType<
  NuncEmailSubscribersEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
  });
});

/** @internal */
export type NuncEmailSubscribersEntity$Outbound = {
  id?: string | undefined;
  email?: string | undefined;
  created_at?: string | undefined;
};

/** @internal */
export const NuncEmailSubscribersEntity$outboundSchema: z.ZodType<
  NuncEmailSubscribersEntity$Outbound,
  z.ZodTypeDef,
  NuncEmailSubscribersEntity
> = z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NuncEmailSubscribersEntity$ {
  /** @deprecated use `NuncEmailSubscribersEntity$inboundSchema` instead. */
  export const inboundSchema = NuncEmailSubscribersEntity$inboundSchema;
  /** @deprecated use `NuncEmailSubscribersEntity$outboundSchema` instead. */
  export const outboundSchema = NuncEmailSubscribersEntity$outboundSchema;
  /** @deprecated use `NuncEmailSubscribersEntity$Outbound` instead. */
  export type Outbound = NuncEmailSubscribersEntity$Outbound;
}

export function nuncEmailSubscribersEntityToJSON(
  nuncEmailSubscribersEntity: NuncEmailSubscribersEntity,
): string {
  return JSON.stringify(
    NuncEmailSubscribersEntity$outboundSchema.parse(nuncEmailSubscribersEntity),
  );
}

export function nuncEmailSubscribersEntityFromJSON(
  jsonString: string,
): SafeParseResult<NuncEmailSubscribersEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NuncEmailSubscribersEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NuncEmailSubscribersEntity' from JSON`,
  );
}
