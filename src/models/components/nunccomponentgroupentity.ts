/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NuncComponentGroupEntity = {
  id?: string | undefined;
  componentGroupId?: string | undefined;
  name?: string | undefined;
  position?: number | undefined;
};

/** @internal */
export const NuncComponentGroupEntity$inboundSchema: z.ZodType<
  NuncComponentGroupEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  component_group_id: z.string().optional(),
  name: z.string().optional(),
  position: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "component_group_id": "componentGroupId",
  });
});

/** @internal */
export type NuncComponentGroupEntity$Outbound = {
  id?: string | undefined;
  component_group_id?: string | undefined;
  name?: string | undefined;
  position?: number | undefined;
};

/** @internal */
export const NuncComponentGroupEntity$outboundSchema: z.ZodType<
  NuncComponentGroupEntity$Outbound,
  z.ZodTypeDef,
  NuncComponentGroupEntity
> = z.object({
  id: z.string().optional(),
  componentGroupId: z.string().optional(),
  name: z.string().optional(),
  position: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    componentGroupId: "component_group_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NuncComponentGroupEntity$ {
  /** @deprecated use `NuncComponentGroupEntity$inboundSchema` instead. */
  export const inboundSchema = NuncComponentGroupEntity$inboundSchema;
  /** @deprecated use `NuncComponentGroupEntity$outboundSchema` instead. */
  export const outboundSchema = NuncComponentGroupEntity$outboundSchema;
  /** @deprecated use `NuncComponentGroupEntity$Outbound` instead. */
  export type Outbound = NuncComponentGroupEntity$Outbound;
}

export function nuncComponentGroupEntityToJSON(
  nuncComponentGroupEntity: NuncComponentGroupEntity,
): string {
  return JSON.stringify(
    NuncComponentGroupEntity$outboundSchema.parse(nuncComponentGroupEntity),
  );
}

export function nuncComponentGroupEntityFromJSON(
  jsonString: string,
): SafeParseResult<NuncComponentGroupEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NuncComponentGroupEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NuncComponentGroupEntity' from JSON`,
  );
}
