/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ImportsImportErrorEntityResourceEntity,
  ImportsImportErrorEntityResourceEntity$inboundSchema,
  ImportsImportErrorEntityResourceEntity$Outbound,
  ImportsImportErrorEntityResourceEntity$outboundSchema,
} from "./importsimporterrorentityresourceentity.js";

/**
 * Additional error data
 */
export type ImportsImportErrorEntityData = {};

export type ImportsImportErrorEntity = {
  id?: string | undefined;
  message?: string | undefined;
  createdAt?: Date | undefined;
  /**
   * Additional error data
   */
  data?: ImportsImportErrorEntityData | undefined;
  resource?: ImportsImportErrorEntityResourceEntity | undefined;
};

/** @internal */
export const ImportsImportErrorEntityData$inboundSchema: z.ZodType<
  ImportsImportErrorEntityData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ImportsImportErrorEntityData$Outbound = {};

/** @internal */
export const ImportsImportErrorEntityData$outboundSchema: z.ZodType<
  ImportsImportErrorEntityData$Outbound,
  z.ZodTypeDef,
  ImportsImportErrorEntityData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportsImportErrorEntityData$ {
  /** @deprecated use `ImportsImportErrorEntityData$inboundSchema` instead. */
  export const inboundSchema = ImportsImportErrorEntityData$inboundSchema;
  /** @deprecated use `ImportsImportErrorEntityData$outboundSchema` instead. */
  export const outboundSchema = ImportsImportErrorEntityData$outboundSchema;
  /** @deprecated use `ImportsImportErrorEntityData$Outbound` instead. */
  export type Outbound = ImportsImportErrorEntityData$Outbound;
}

export function importsImportErrorEntityDataToJSON(
  importsImportErrorEntityData: ImportsImportErrorEntityData,
): string {
  return JSON.stringify(
    ImportsImportErrorEntityData$outboundSchema.parse(
      importsImportErrorEntityData,
    ),
  );
}

export function importsImportErrorEntityDataFromJSON(
  jsonString: string,
): SafeParseResult<ImportsImportErrorEntityData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ImportsImportErrorEntityData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ImportsImportErrorEntityData' from JSON`,
  );
}

/** @internal */
export const ImportsImportErrorEntity$inboundSchema: z.ZodType<
  ImportsImportErrorEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  message: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  data: z.lazy(() => ImportsImportErrorEntityData$inboundSchema).optional(),
  resource: ImportsImportErrorEntityResourceEntity$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
  });
});

/** @internal */
export type ImportsImportErrorEntity$Outbound = {
  id?: string | undefined;
  message?: string | undefined;
  created_at?: string | undefined;
  data?: ImportsImportErrorEntityData$Outbound | undefined;
  resource?: ImportsImportErrorEntityResourceEntity$Outbound | undefined;
};

/** @internal */
export const ImportsImportErrorEntity$outboundSchema: z.ZodType<
  ImportsImportErrorEntity$Outbound,
  z.ZodTypeDef,
  ImportsImportErrorEntity
> = z.object({
  id: z.string().optional(),
  message: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  data: z.lazy(() => ImportsImportErrorEntityData$outboundSchema).optional(),
  resource: ImportsImportErrorEntityResourceEntity$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportsImportErrorEntity$ {
  /** @deprecated use `ImportsImportErrorEntity$inboundSchema` instead. */
  export const inboundSchema = ImportsImportErrorEntity$inboundSchema;
  /** @deprecated use `ImportsImportErrorEntity$outboundSchema` instead. */
  export const outboundSchema = ImportsImportErrorEntity$outboundSchema;
  /** @deprecated use `ImportsImportErrorEntity$Outbound` instead. */
  export type Outbound = ImportsImportErrorEntity$Outbound;
}

export function importsImportErrorEntityToJSON(
  importsImportErrorEntity: ImportsImportErrorEntity,
): string {
  return JSON.stringify(
    ImportsImportErrorEntity$outboundSchema.parse(importsImportErrorEntity),
  );
}

export function importsImportErrorEntityFromJSON(
  jsonString: string,
): SafeParseResult<ImportsImportErrorEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ImportsImportErrorEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ImportsImportErrorEntity' from JSON`,
  );
}
