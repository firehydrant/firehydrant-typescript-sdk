/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ScheduledMaintenancesStatusPageEntity = {
  id?: string | undefined;
  integrationId?: string | undefined;
  integrationSlug?: string | undefined;
  integrationName?: string | undefined;
};

/** @internal */
export const ScheduledMaintenancesStatusPageEntity$inboundSchema: z.ZodType<
  ScheduledMaintenancesStatusPageEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  integration_id: z.string().optional(),
  integration_slug: z.string().optional(),
  integration_name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "integration_id": "integrationId",
    "integration_slug": "integrationSlug",
    "integration_name": "integrationName",
  });
});

/** @internal */
export type ScheduledMaintenancesStatusPageEntity$Outbound = {
  id?: string | undefined;
  integration_id?: string | undefined;
  integration_slug?: string | undefined;
  integration_name?: string | undefined;
};

/** @internal */
export const ScheduledMaintenancesStatusPageEntity$outboundSchema: z.ZodType<
  ScheduledMaintenancesStatusPageEntity$Outbound,
  z.ZodTypeDef,
  ScheduledMaintenancesStatusPageEntity
> = z.object({
  id: z.string().optional(),
  integrationId: z.string().optional(),
  integrationSlug: z.string().optional(),
  integrationName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    integrationId: "integration_id",
    integrationSlug: "integration_slug",
    integrationName: "integration_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduledMaintenancesStatusPageEntity$ {
  /** @deprecated use `ScheduledMaintenancesStatusPageEntity$inboundSchema` instead. */
  export const inboundSchema =
    ScheduledMaintenancesStatusPageEntity$inboundSchema;
  /** @deprecated use `ScheduledMaintenancesStatusPageEntity$outboundSchema` instead. */
  export const outboundSchema =
    ScheduledMaintenancesStatusPageEntity$outboundSchema;
  /** @deprecated use `ScheduledMaintenancesStatusPageEntity$Outbound` instead. */
  export type Outbound = ScheduledMaintenancesStatusPageEntity$Outbound;
}

export function scheduledMaintenancesStatusPageEntityToJSON(
  scheduledMaintenancesStatusPageEntity: ScheduledMaintenancesStatusPageEntity,
): string {
  return JSON.stringify(
    ScheduledMaintenancesStatusPageEntity$outboundSchema.parse(
      scheduledMaintenancesStatusPageEntity,
    ),
  );
}

export function scheduledMaintenancesStatusPageEntityFromJSON(
  jsonString: string,
): SafeParseResult<ScheduledMaintenancesStatusPageEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ScheduledMaintenancesStatusPageEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScheduledMaintenancesStatusPageEntity' from JSON`,
  );
}
