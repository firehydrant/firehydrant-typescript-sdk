/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Update the notes of the service dependency
 */
export type PatchV1ServiceDependenciesServiceDependencyId = {
  /**
   * A note to describe the service dependency relationship
   */
  notes?: string | undefined;
};

/** @internal */
export const PatchV1ServiceDependenciesServiceDependencyId$inboundSchema:
  z.ZodType<
    PatchV1ServiceDependenciesServiceDependencyId,
    z.ZodTypeDef,
    unknown
  > = z.object({
    notes: z.string().optional(),
  });

/** @internal */
export type PatchV1ServiceDependenciesServiceDependencyId$Outbound = {
  notes?: string | undefined;
};

/** @internal */
export const PatchV1ServiceDependenciesServiceDependencyId$outboundSchema:
  z.ZodType<
    PatchV1ServiceDependenciesServiceDependencyId$Outbound,
    z.ZodTypeDef,
    PatchV1ServiceDependenciesServiceDependencyId
  > = z.object({
    notes: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1ServiceDependenciesServiceDependencyId$ {
  /** @deprecated use `PatchV1ServiceDependenciesServiceDependencyId$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1ServiceDependenciesServiceDependencyId$inboundSchema;
  /** @deprecated use `PatchV1ServiceDependenciesServiceDependencyId$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1ServiceDependenciesServiceDependencyId$outboundSchema;
  /** @deprecated use `PatchV1ServiceDependenciesServiceDependencyId$Outbound` instead. */
  export type Outbound = PatchV1ServiceDependenciesServiceDependencyId$Outbound;
}

export function patchV1ServiceDependenciesServiceDependencyIdToJSON(
  patchV1ServiceDependenciesServiceDependencyId:
    PatchV1ServiceDependenciesServiceDependencyId,
): string {
  return JSON.stringify(
    PatchV1ServiceDependenciesServiceDependencyId$outboundSchema.parse(
      patchV1ServiceDependenciesServiceDependencyId,
    ),
  );
}

export function patchV1ServiceDependenciesServiceDependencyIdFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchV1ServiceDependenciesServiceDependencyId,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1ServiceDependenciesServiceDependencyId$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchV1ServiceDependenciesServiceDependencyId' from JSON`,
  );
}
