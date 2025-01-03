/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MetricsMetricsEntitySortEntity,
  MetricsMetricsEntitySortEntity$inboundSchema,
  MetricsMetricsEntitySortEntity$Outbound,
  MetricsMetricsEntitySortEntity$outboundSchema,
} from "./metricsmetricsentitysortentity.js";

export type DisplayInformation = {};

export type Buckets = {};

/**
 * Metrics_MetricsEntity model
 */
export type MetricsMetricsEntity = {
  type?: string | undefined;
  /**
   * The field by which the metrics are grouped. Can be one of: total, severity, priority, functionality, service, environment, or user.
   */
  by?: string | undefined;
  /**
   * The size of returned buckets. Can be one of: day, week, month, or all_time.
   */
  bucketSize?: number | undefined;
  displayInformation?: DisplayInformation | undefined;
  keys?: Array<string> | undefined;
  buckets?: Array<Buckets> | undefined;
  sort?: MetricsMetricsEntitySortEntity | undefined;
};

/** @internal */
export const DisplayInformation$inboundSchema: z.ZodType<
  DisplayInformation,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DisplayInformation$Outbound = {};

/** @internal */
export const DisplayInformation$outboundSchema: z.ZodType<
  DisplayInformation$Outbound,
  z.ZodTypeDef,
  DisplayInformation
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DisplayInformation$ {
  /** @deprecated use `DisplayInformation$inboundSchema` instead. */
  export const inboundSchema = DisplayInformation$inboundSchema;
  /** @deprecated use `DisplayInformation$outboundSchema` instead. */
  export const outboundSchema = DisplayInformation$outboundSchema;
  /** @deprecated use `DisplayInformation$Outbound` instead. */
  export type Outbound = DisplayInformation$Outbound;
}

export function displayInformationToJSON(
  displayInformation: DisplayInformation,
): string {
  return JSON.stringify(
    DisplayInformation$outboundSchema.parse(displayInformation),
  );
}

export function displayInformationFromJSON(
  jsonString: string,
): SafeParseResult<DisplayInformation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DisplayInformation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DisplayInformation' from JSON`,
  );
}

/** @internal */
export const Buckets$inboundSchema: z.ZodType<Buckets, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Buckets$Outbound = {};

/** @internal */
export const Buckets$outboundSchema: z.ZodType<
  Buckets$Outbound,
  z.ZodTypeDef,
  Buckets
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Buckets$ {
  /** @deprecated use `Buckets$inboundSchema` instead. */
  export const inboundSchema = Buckets$inboundSchema;
  /** @deprecated use `Buckets$outboundSchema` instead. */
  export const outboundSchema = Buckets$outboundSchema;
  /** @deprecated use `Buckets$Outbound` instead. */
  export type Outbound = Buckets$Outbound;
}

export function bucketsToJSON(buckets: Buckets): string {
  return JSON.stringify(Buckets$outboundSchema.parse(buckets));
}

export function bucketsFromJSON(
  jsonString: string,
): SafeParseResult<Buckets, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Buckets$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Buckets' from JSON`,
  );
}

/** @internal */
export const MetricsMetricsEntity$inboundSchema: z.ZodType<
  MetricsMetricsEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string().optional(),
  by: z.string().optional(),
  bucket_size: z.number().int().optional(),
  display_information: z.lazy(() => DisplayInformation$inboundSchema)
    .optional(),
  keys: z.array(z.string()).optional(),
  buckets: z.array(z.lazy(() => Buckets$inboundSchema)).optional(),
  sort: MetricsMetricsEntitySortEntity$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "bucket_size": "bucketSize",
    "display_information": "displayInformation",
  });
});

/** @internal */
export type MetricsMetricsEntity$Outbound = {
  type?: string | undefined;
  by?: string | undefined;
  bucket_size?: number | undefined;
  display_information?: DisplayInformation$Outbound | undefined;
  keys?: Array<string> | undefined;
  buckets?: Array<Buckets$Outbound> | undefined;
  sort?: MetricsMetricsEntitySortEntity$Outbound | undefined;
};

/** @internal */
export const MetricsMetricsEntity$outboundSchema: z.ZodType<
  MetricsMetricsEntity$Outbound,
  z.ZodTypeDef,
  MetricsMetricsEntity
> = z.object({
  type: z.string().optional(),
  by: z.string().optional(),
  bucketSize: z.number().int().optional(),
  displayInformation: z.lazy(() => DisplayInformation$outboundSchema)
    .optional(),
  keys: z.array(z.string()).optional(),
  buckets: z.array(z.lazy(() => Buckets$outboundSchema)).optional(),
  sort: MetricsMetricsEntitySortEntity$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    bucketSize: "bucket_size",
    displayInformation: "display_information",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsMetricsEntity$ {
  /** @deprecated use `MetricsMetricsEntity$inboundSchema` instead. */
  export const inboundSchema = MetricsMetricsEntity$inboundSchema;
  /** @deprecated use `MetricsMetricsEntity$outboundSchema` instead. */
  export const outboundSchema = MetricsMetricsEntity$outboundSchema;
  /** @deprecated use `MetricsMetricsEntity$Outbound` instead. */
  export type Outbound = MetricsMetricsEntity$Outbound;
}

export function metricsMetricsEntityToJSON(
  metricsMetricsEntity: MetricsMetricsEntity,
): string {
  return JSON.stringify(
    MetricsMetricsEntity$outboundSchema.parse(metricsMetricsEntity),
  );
}

export function metricsMetricsEntityFromJSON(
  jsonString: string,
): SafeParseResult<MetricsMetricsEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsMetricsEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsMetricsEntity' from JSON`,
  );
}
