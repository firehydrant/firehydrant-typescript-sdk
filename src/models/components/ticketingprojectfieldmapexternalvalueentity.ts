/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const TicketingProjectFieldMapExternalValueEntityType = {
  Literal: "literal",
  FhAttribute: "fh-attribute",
  FhType: "fh-type",
} as const;
export type TicketingProjectFieldMapExternalValueEntityType = ClosedEnum<
  typeof TicketingProjectFieldMapExternalValueEntityType
>;

export type TicketingProjectFieldMapExternalValueEntity = {
  type?: TicketingProjectFieldMapExternalValueEntityType | undefined;
  value?: string | undefined;
  attribute?: string | undefined;
  presentation?: string | undefined;
};

/** @internal */
export const TicketingProjectFieldMapExternalValueEntityType$inboundSchema:
  z.ZodNativeEnum<typeof TicketingProjectFieldMapExternalValueEntityType> = z
    .nativeEnum(TicketingProjectFieldMapExternalValueEntityType);

/** @internal */
export const TicketingProjectFieldMapExternalValueEntityType$outboundSchema:
  z.ZodNativeEnum<typeof TicketingProjectFieldMapExternalValueEntityType> =
    TicketingProjectFieldMapExternalValueEntityType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingProjectFieldMapExternalValueEntityType$ {
  /** @deprecated use `TicketingProjectFieldMapExternalValueEntityType$inboundSchema` instead. */
  export const inboundSchema =
    TicketingProjectFieldMapExternalValueEntityType$inboundSchema;
  /** @deprecated use `TicketingProjectFieldMapExternalValueEntityType$outboundSchema` instead. */
  export const outboundSchema =
    TicketingProjectFieldMapExternalValueEntityType$outboundSchema;
}

/** @internal */
export const TicketingProjectFieldMapExternalValueEntity$inboundSchema:
  z.ZodType<
    TicketingProjectFieldMapExternalValueEntity,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: TicketingProjectFieldMapExternalValueEntityType$inboundSchema
      .optional(),
    value: z.string().optional(),
    attribute: z.string().optional(),
    presentation: z.string().optional(),
  });

/** @internal */
export type TicketingProjectFieldMapExternalValueEntity$Outbound = {
  type?: string | undefined;
  value?: string | undefined;
  attribute?: string | undefined;
  presentation?: string | undefined;
};

/** @internal */
export const TicketingProjectFieldMapExternalValueEntity$outboundSchema:
  z.ZodType<
    TicketingProjectFieldMapExternalValueEntity$Outbound,
    z.ZodTypeDef,
    TicketingProjectFieldMapExternalValueEntity
  > = z.object({
    type: TicketingProjectFieldMapExternalValueEntityType$outboundSchema
      .optional(),
    value: z.string().optional(),
    attribute: z.string().optional(),
    presentation: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingProjectFieldMapExternalValueEntity$ {
  /** @deprecated use `TicketingProjectFieldMapExternalValueEntity$inboundSchema` instead. */
  export const inboundSchema =
    TicketingProjectFieldMapExternalValueEntity$inboundSchema;
  /** @deprecated use `TicketingProjectFieldMapExternalValueEntity$outboundSchema` instead. */
  export const outboundSchema =
    TicketingProjectFieldMapExternalValueEntity$outboundSchema;
  /** @deprecated use `TicketingProjectFieldMapExternalValueEntity$Outbound` instead. */
  export type Outbound = TicketingProjectFieldMapExternalValueEntity$Outbound;
}

export function ticketingProjectFieldMapExternalValueEntityToJSON(
  ticketingProjectFieldMapExternalValueEntity:
    TicketingProjectFieldMapExternalValueEntity,
): string {
  return JSON.stringify(
    TicketingProjectFieldMapExternalValueEntity$outboundSchema.parse(
      ticketingProjectFieldMapExternalValueEntity,
    ),
  );
}

export function ticketingProjectFieldMapExternalValueEntityFromJSON(
  jsonString: string,
): SafeParseResult<
  TicketingProjectFieldMapExternalValueEntity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TicketingProjectFieldMapExternalValueEntity$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TicketingProjectFieldMapExternalValueEntity' from JSON`,
  );
}
