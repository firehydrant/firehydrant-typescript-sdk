/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TicketingProjectFieldMapExternalValueEntity,
  TicketingProjectFieldMapExternalValueEntity$inboundSchema,
  TicketingProjectFieldMapExternalValueEntity$Outbound,
  TicketingProjectFieldMapExternalValueEntity$outboundSchema,
} from "./ticketingprojectfieldmapexternalvalueentity.js";

/**
 * An unstructured object of key/value pairs describing the logic for applying the rule.
 */
export type TicketingProjectFieldMapCasesEntityLogic = {};

export type TicketingProjectFieldMapCasesEntity = {
  /**
   * An unstructured object of key/value pairs describing the logic for applying the rule.
   */
  logic?: TicketingProjectFieldMapCasesEntityLogic | undefined;
  externalValue?: TicketingProjectFieldMapExternalValueEntity | undefined;
};

/** @internal */
export const TicketingProjectFieldMapCasesEntityLogic$inboundSchema: z.ZodType<
  TicketingProjectFieldMapCasesEntityLogic,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type TicketingProjectFieldMapCasesEntityLogic$Outbound = {};

/** @internal */
export const TicketingProjectFieldMapCasesEntityLogic$outboundSchema: z.ZodType<
  TicketingProjectFieldMapCasesEntityLogic$Outbound,
  z.ZodTypeDef,
  TicketingProjectFieldMapCasesEntityLogic
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingProjectFieldMapCasesEntityLogic$ {
  /** @deprecated use `TicketingProjectFieldMapCasesEntityLogic$inboundSchema` instead. */
  export const inboundSchema =
    TicketingProjectFieldMapCasesEntityLogic$inboundSchema;
  /** @deprecated use `TicketingProjectFieldMapCasesEntityLogic$outboundSchema` instead. */
  export const outboundSchema =
    TicketingProjectFieldMapCasesEntityLogic$outboundSchema;
  /** @deprecated use `TicketingProjectFieldMapCasesEntityLogic$Outbound` instead. */
  export type Outbound = TicketingProjectFieldMapCasesEntityLogic$Outbound;
}

export function ticketingProjectFieldMapCasesEntityLogicToJSON(
  ticketingProjectFieldMapCasesEntityLogic:
    TicketingProjectFieldMapCasesEntityLogic,
): string {
  return JSON.stringify(
    TicketingProjectFieldMapCasesEntityLogic$outboundSchema.parse(
      ticketingProjectFieldMapCasesEntityLogic,
    ),
  );
}

export function ticketingProjectFieldMapCasesEntityLogicFromJSON(
  jsonString: string,
): SafeParseResult<
  TicketingProjectFieldMapCasesEntityLogic,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TicketingProjectFieldMapCasesEntityLogic$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TicketingProjectFieldMapCasesEntityLogic' from JSON`,
  );
}

/** @internal */
export const TicketingProjectFieldMapCasesEntity$inboundSchema: z.ZodType<
  TicketingProjectFieldMapCasesEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  logic: z.lazy(() => TicketingProjectFieldMapCasesEntityLogic$inboundSchema)
    .optional(),
  external_value: TicketingProjectFieldMapExternalValueEntity$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "external_value": "externalValue",
  });
});

/** @internal */
export type TicketingProjectFieldMapCasesEntity$Outbound = {
  logic?: TicketingProjectFieldMapCasesEntityLogic$Outbound | undefined;
  external_value?:
    | TicketingProjectFieldMapExternalValueEntity$Outbound
    | undefined;
};

/** @internal */
export const TicketingProjectFieldMapCasesEntity$outboundSchema: z.ZodType<
  TicketingProjectFieldMapCasesEntity$Outbound,
  z.ZodTypeDef,
  TicketingProjectFieldMapCasesEntity
> = z.object({
  logic: z.lazy(() => TicketingProjectFieldMapCasesEntityLogic$outboundSchema)
    .optional(),
  externalValue: TicketingProjectFieldMapExternalValueEntity$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    externalValue: "external_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingProjectFieldMapCasesEntity$ {
  /** @deprecated use `TicketingProjectFieldMapCasesEntity$inboundSchema` instead. */
  export const inboundSchema =
    TicketingProjectFieldMapCasesEntity$inboundSchema;
  /** @deprecated use `TicketingProjectFieldMapCasesEntity$outboundSchema` instead. */
  export const outboundSchema =
    TicketingProjectFieldMapCasesEntity$outboundSchema;
  /** @deprecated use `TicketingProjectFieldMapCasesEntity$Outbound` instead. */
  export type Outbound = TicketingProjectFieldMapCasesEntity$Outbound;
}

export function ticketingProjectFieldMapCasesEntityToJSON(
  ticketingProjectFieldMapCasesEntity: TicketingProjectFieldMapCasesEntity,
): string {
  return JSON.stringify(
    TicketingProjectFieldMapCasesEntity$outboundSchema.parse(
      ticketingProjectFieldMapCasesEntity,
    ),
  );
}

export function ticketingProjectFieldMapCasesEntityFromJSON(
  jsonString: string,
): SafeParseResult<TicketingProjectFieldMapCasesEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TicketingProjectFieldMapCasesEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingProjectFieldMapCasesEntity' from JSON`,
  );
}
