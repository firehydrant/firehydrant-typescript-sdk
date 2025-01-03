/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ReportsBucketEntity,
  ReportsBucketEntity$inboundSchema,
  ReportsBucketEntity$Outbound,
  ReportsBucketEntity$outboundSchema,
} from "./reportsbucketentity.js";

/**
 * ReportEntity model
 */
export type ReportEntity = {
  data?: Array<ReportsBucketEntity> | undefined;
  startDate?: RFCDate | undefined;
  endDate?: RFCDate | undefined;
  bucketPeriod?: string | undefined;
};

/** @internal */
export const ReportEntity$inboundSchema: z.ZodType<
  ReportEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(ReportsBucketEntity$inboundSchema).optional(),
  start_date: z.string().transform(v => new RFCDate(v)).optional(),
  end_date: z.string().transform(v => new RFCDate(v)).optional(),
  bucket_period: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "start_date": "startDate",
    "end_date": "endDate",
    "bucket_period": "bucketPeriod",
  });
});

/** @internal */
export type ReportEntity$Outbound = {
  data?: Array<ReportsBucketEntity$Outbound> | undefined;
  start_date?: string | undefined;
  end_date?: string | undefined;
  bucket_period?: string | undefined;
};

/** @internal */
export const ReportEntity$outboundSchema: z.ZodType<
  ReportEntity$Outbound,
  z.ZodTypeDef,
  ReportEntity
> = z.object({
  data: z.array(ReportsBucketEntity$outboundSchema).optional(),
  startDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
  endDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
  bucketPeriod: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    startDate: "start_date",
    endDate: "end_date",
    bucketPeriod: "bucket_period",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReportEntity$ {
  /** @deprecated use `ReportEntity$inboundSchema` instead. */
  export const inboundSchema = ReportEntity$inboundSchema;
  /** @deprecated use `ReportEntity$outboundSchema` instead. */
  export const outboundSchema = ReportEntity$outboundSchema;
  /** @deprecated use `ReportEntity$Outbound` instead. */
  export type Outbound = ReportEntity$Outbound;
}

export function reportEntityToJSON(reportEntity: ReportEntity): string {
  return JSON.stringify(ReportEntity$outboundSchema.parse(reportEntity));
}

export function reportEntityFromJSON(
  jsonString: string,
): SafeParseResult<ReportEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReportEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReportEntity' from JSON`,
  );
}
