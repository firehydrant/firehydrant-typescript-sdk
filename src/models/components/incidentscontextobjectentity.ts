/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IncidentsContextObjectEntity = {
  objectType?: string | undefined;
  objectId?: string | undefined;
  contextTag?: string | undefined;
  contextDescription?: string | undefined;
};

/** @internal */
export const IncidentsContextObjectEntity$inboundSchema: z.ZodType<
  IncidentsContextObjectEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  object_type: z.string().optional(),
  object_id: z.string().optional(),
  context_tag: z.string().optional(),
  context_description: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "object_type": "objectType",
    "object_id": "objectId",
    "context_tag": "contextTag",
    "context_description": "contextDescription",
  });
});

/** @internal */
export type IncidentsContextObjectEntity$Outbound = {
  object_type?: string | undefined;
  object_id?: string | undefined;
  context_tag?: string | undefined;
  context_description?: string | undefined;
};

/** @internal */
export const IncidentsContextObjectEntity$outboundSchema: z.ZodType<
  IncidentsContextObjectEntity$Outbound,
  z.ZodTypeDef,
  IncidentsContextObjectEntity
> = z.object({
  objectType: z.string().optional(),
  objectId: z.string().optional(),
  contextTag: z.string().optional(),
  contextDescription: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    objectType: "object_type",
    objectId: "object_id",
    contextTag: "context_tag",
    contextDescription: "context_description",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncidentsContextObjectEntity$ {
  /** @deprecated use `IncidentsContextObjectEntity$inboundSchema` instead. */
  export const inboundSchema = IncidentsContextObjectEntity$inboundSchema;
  /** @deprecated use `IncidentsContextObjectEntity$outboundSchema` instead. */
  export const outboundSchema = IncidentsContextObjectEntity$outboundSchema;
  /** @deprecated use `IncidentsContextObjectEntity$Outbound` instead. */
  export type Outbound = IncidentsContextObjectEntity$Outbound;
}

export function incidentsContextObjectEntityToJSON(
  incidentsContextObjectEntity: IncidentsContextObjectEntity,
): string {
  return JSON.stringify(
    IncidentsContextObjectEntity$outboundSchema.parse(
      incidentsContextObjectEntity,
    ),
  );
}

export function incidentsContextObjectEntityFromJSON(
  jsonString: string,
): SafeParseResult<IncidentsContextObjectEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IncidentsContextObjectEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IncidentsContextObjectEntity' from JSON`,
  );
}
