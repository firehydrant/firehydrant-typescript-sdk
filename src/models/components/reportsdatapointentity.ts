/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ReportsDataPointEntity = {
  key?: string | undefined;
  value?: number | undefined;
};

/** @internal */
export const ReportsDataPointEntity$inboundSchema: z.ZodType<
  ReportsDataPointEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
  value: z.number().int().optional(),
});

/** @internal */
export type ReportsDataPointEntity$Outbound = {
  key?: string | undefined;
  value?: number | undefined;
};

/** @internal */
export const ReportsDataPointEntity$outboundSchema: z.ZodType<
  ReportsDataPointEntity$Outbound,
  z.ZodTypeDef,
  ReportsDataPointEntity
> = z.object({
  key: z.string().optional(),
  value: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReportsDataPointEntity$ {
  /** @deprecated use `ReportsDataPointEntity$inboundSchema` instead. */
  export const inboundSchema = ReportsDataPointEntity$inboundSchema;
  /** @deprecated use `ReportsDataPointEntity$outboundSchema` instead. */
  export const outboundSchema = ReportsDataPointEntity$outboundSchema;
  /** @deprecated use `ReportsDataPointEntity$Outbound` instead. */
  export type Outbound = ReportsDataPointEntity$Outbound;
}

export function reportsDataPointEntityToJSON(
  reportsDataPointEntity: ReportsDataPointEntity,
): string {
  return JSON.stringify(
    ReportsDataPointEntity$outboundSchema.parse(reportsDataPointEntity),
  );
}

export function reportsDataPointEntityFromJSON(
  jsonString: string,
): SafeParseResult<ReportsDataPointEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReportsDataPointEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReportsDataPointEntity' from JSON`,
  );
}
