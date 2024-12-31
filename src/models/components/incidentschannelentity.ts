/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Incidents_ChannelEntity model
 */
export type IncidentsChannelEntity = {
  id?: string | undefined;
  name?: string | undefined;
  source?: string | undefined;
  sourceName?: string | undefined;
  sourceId?: string | undefined;
  url?: string | undefined;
  iconUrl?: string | undefined;
  status?: string | undefined;
};

/** @internal */
export const IncidentsChannelEntity$inboundSchema: z.ZodType<
  IncidentsChannelEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  source: z.string().optional(),
  source_name: z.string().optional(),
  source_id: z.string().optional(),
  url: z.string().optional(),
  icon_url: z.string().optional(),
  status: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "source_name": "sourceName",
    "source_id": "sourceId",
    "icon_url": "iconUrl",
  });
});

/** @internal */
export type IncidentsChannelEntity$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  source?: string | undefined;
  source_name?: string | undefined;
  source_id?: string | undefined;
  url?: string | undefined;
  icon_url?: string | undefined;
  status?: string | undefined;
};

/** @internal */
export const IncidentsChannelEntity$outboundSchema: z.ZodType<
  IncidentsChannelEntity$Outbound,
  z.ZodTypeDef,
  IncidentsChannelEntity
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  source: z.string().optional(),
  sourceName: z.string().optional(),
  sourceId: z.string().optional(),
  url: z.string().optional(),
  iconUrl: z.string().optional(),
  status: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    sourceName: "source_name",
    sourceId: "source_id",
    iconUrl: "icon_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncidentsChannelEntity$ {
  /** @deprecated use `IncidentsChannelEntity$inboundSchema` instead. */
  export const inboundSchema = IncidentsChannelEntity$inboundSchema;
  /** @deprecated use `IncidentsChannelEntity$outboundSchema` instead. */
  export const outboundSchema = IncidentsChannelEntity$outboundSchema;
  /** @deprecated use `IncidentsChannelEntity$Outbound` instead. */
  export type Outbound = IncidentsChannelEntity$Outbound;
}

export function incidentsChannelEntityToJSON(
  incidentsChannelEntity: IncidentsChannelEntity,
): string {
  return JSON.stringify(
    IncidentsChannelEntity$outboundSchema.parse(incidentsChannelEntity),
  );
}

export function incidentsChannelEntityFromJSON(
  jsonString: string,
): SafeParseResult<IncidentsChannelEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IncidentsChannelEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IncidentsChannelEntity' from JSON`,
  );
}
