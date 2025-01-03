/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Returns logs of all levels equal to or above the provided level
 */
export const OfLevel = {
  Unknown: "unknown",
  Debug: "debug",
  Info: "info",
  Warn: "warn",
  Error: "error",
  Fatal: "fatal",
} as const;
/**
 * Returns logs of all levels equal to or above the provided level
 */
export type OfLevel = ClosedEnum<typeof OfLevel>;

/**
 * Returns log entries of all levels equal to the provided level
 */
export const ExactLevel = {
  Unknown: "unknown",
  Debug: "debug",
  Info: "info",
  Warn: "warn",
  Error: "error",
  Fatal: "fatal",
} as const;
/**
 * Returns log entries of all levels equal to the provided level
 */
export type ExactLevel = ClosedEnum<typeof ExactLevel>;

export type ListAlertProcessingLogsRequest = {
  page?: number | undefined;
  perPage?: number | undefined;
  /**
   * Scopes returned log entries to a specific integration ID
   */
  integrationSlug?: string | undefined;
  /**
   * Scopes returned log entries to a specific connection ID
   */
  connectionId?: string | undefined;
  /**
   * Returns logs of all levels equal to or above the provided level
   */
  ofLevel?: OfLevel | undefined;
  /**
   * Returns log entries of all levels equal to the provided level
   */
  exactLevel?: ExactLevel | undefined;
};

/** @internal */
export const OfLevel$inboundSchema: z.ZodNativeEnum<typeof OfLevel> = z
  .nativeEnum(OfLevel);

/** @internal */
export const OfLevel$outboundSchema: z.ZodNativeEnum<typeof OfLevel> =
  OfLevel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OfLevel$ {
  /** @deprecated use `OfLevel$inboundSchema` instead. */
  export const inboundSchema = OfLevel$inboundSchema;
  /** @deprecated use `OfLevel$outboundSchema` instead. */
  export const outboundSchema = OfLevel$outboundSchema;
}

/** @internal */
export const ExactLevel$inboundSchema: z.ZodNativeEnum<typeof ExactLevel> = z
  .nativeEnum(ExactLevel);

/** @internal */
export const ExactLevel$outboundSchema: z.ZodNativeEnum<typeof ExactLevel> =
  ExactLevel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExactLevel$ {
  /** @deprecated use `ExactLevel$inboundSchema` instead. */
  export const inboundSchema = ExactLevel$inboundSchema;
  /** @deprecated use `ExactLevel$outboundSchema` instead. */
  export const outboundSchema = ExactLevel$outboundSchema;
}

/** @internal */
export const ListAlertProcessingLogsRequest$inboundSchema: z.ZodType<
  ListAlertProcessingLogsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().optional(),
  per_page: z.number().int().optional(),
  integration_slug: z.string().optional(),
  connection_id: z.string().optional(),
  of_level: OfLevel$inboundSchema.optional(),
  exact_level: ExactLevel$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "per_page": "perPage",
    "integration_slug": "integrationSlug",
    "connection_id": "connectionId",
    "of_level": "ofLevel",
    "exact_level": "exactLevel",
  });
});

/** @internal */
export type ListAlertProcessingLogsRequest$Outbound = {
  page?: number | undefined;
  per_page?: number | undefined;
  integration_slug?: string | undefined;
  connection_id?: string | undefined;
  of_level?: string | undefined;
  exact_level?: string | undefined;
};

/** @internal */
export const ListAlertProcessingLogsRequest$outboundSchema: z.ZodType<
  ListAlertProcessingLogsRequest$Outbound,
  z.ZodTypeDef,
  ListAlertProcessingLogsRequest
> = z.object({
  page: z.number().int().optional(),
  perPage: z.number().int().optional(),
  integrationSlug: z.string().optional(),
  connectionId: z.string().optional(),
  ofLevel: OfLevel$outboundSchema.optional(),
  exactLevel: ExactLevel$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    perPage: "per_page",
    integrationSlug: "integration_slug",
    connectionId: "connection_id",
    ofLevel: "of_level",
    exactLevel: "exact_level",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAlertProcessingLogsRequest$ {
  /** @deprecated use `ListAlertProcessingLogsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAlertProcessingLogsRequest$inboundSchema;
  /** @deprecated use `ListAlertProcessingLogsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAlertProcessingLogsRequest$outboundSchema;
  /** @deprecated use `ListAlertProcessingLogsRequest$Outbound` instead. */
  export type Outbound = ListAlertProcessingLogsRequest$Outbound;
}

export function listAlertProcessingLogsRequestToJSON(
  listAlertProcessingLogsRequest: ListAlertProcessingLogsRequest,
): string {
  return JSON.stringify(
    ListAlertProcessingLogsRequest$outboundSchema.parse(
      listAlertProcessingLogsRequest,
    ),
  );
}

export function listAlertProcessingLogsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAlertProcessingLogsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAlertProcessingLogsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAlertProcessingLogsRequest' from JSON`,
  );
}
