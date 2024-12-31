/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType =
  {
    Caused: "caused",
    Fixed: "fixed",
    Suspect: "suspect",
    Dismissed: "dismissed",
  } as const;
export type PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType =
  ClosedEnum<
    typeof PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType
  >;

/**
 * Update a change attached to an incident
 */
export type PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId =
  {
    type?:
      | PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType
      | undefined;
    /**
     * A short description about why this change event is related
     */
    why?: string | undefined;
  };

/** @internal */
export const PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$inboundSchema:
  z.ZodNativeEnum<
    typeof PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType
  > = z.nativeEnum(
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType,
  );

/** @internal */
export const PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$outboundSchema:
  z.ZodNativeEnum<
    typeof PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType
  > =
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$ {
  /** @deprecated use `PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$inboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$outboundSchema;
}

/** @internal */
export const PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$inboundSchema:
  z.ZodType<
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type:
      PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$inboundSchema
        .optional(),
    why: z.string().optional(),
  });

/** @internal */
export type PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$Outbound =
  {
    type?: string | undefined;
    why?: string | undefined;
  };

/** @internal */
export const PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$outboundSchema:
  z.ZodType<
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$Outbound,
    z.ZodTypeDef,
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId
  > = z.object({
    type:
      PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdType$outboundSchema
        .optional(),
    why: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$ {
  /** @deprecated use `PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$inboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$outboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$Outbound` instead. */
  export type Outbound =
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$Outbound;
}

export function patchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdToJSON(
  patchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId:
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId,
): string {
  return JSON.stringify(
    PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$outboundSchema
      .parse(patchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId),
  );
}

export function patchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventIdFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId' from JSON`,
  );
}
