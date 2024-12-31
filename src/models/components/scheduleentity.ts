/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ScheduleEntity = {
  id?: string | undefined;
  name?: string | undefined;
  integration?: string | undefined;
  discarded?: boolean | undefined;
};

/** @internal */
export const ScheduleEntity$inboundSchema: z.ZodType<
  ScheduleEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  integration: z.string().optional(),
  discarded: z.boolean().optional(),
});

/** @internal */
export type ScheduleEntity$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  integration?: string | undefined;
  discarded?: boolean | undefined;
};

/** @internal */
export const ScheduleEntity$outboundSchema: z.ZodType<
  ScheduleEntity$Outbound,
  z.ZodTypeDef,
  ScheduleEntity
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  integration: z.string().optional(),
  discarded: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduleEntity$ {
  /** @deprecated use `ScheduleEntity$inboundSchema` instead. */
  export const inboundSchema = ScheduleEntity$inboundSchema;
  /** @deprecated use `ScheduleEntity$outboundSchema` instead. */
  export const outboundSchema = ScheduleEntity$outboundSchema;
  /** @deprecated use `ScheduleEntity$Outbound` instead. */
  export type Outbound = ScheduleEntity$Outbound;
}

export function scheduleEntityToJSON(scheduleEntity: ScheduleEntity): string {
  return JSON.stringify(ScheduleEntity$outboundSchema.parse(scheduleEntity));
}

export function scheduleEntityFromJSON(
  jsonString: string,
): SafeParseResult<ScheduleEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScheduleEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScheduleEntity' from JSON`,
  );
}
