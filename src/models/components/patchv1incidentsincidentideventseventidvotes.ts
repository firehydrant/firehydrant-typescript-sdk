/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The direction you would like to vote, or if you dig it
 */
export const Direction = {
  Up: "up",
  Down: "down",
  Dig: "dig",
} as const;
/**
 * The direction you would like to vote, or if you dig it
 */
export type Direction = ClosedEnum<typeof Direction>;

/**
 * Allows for upvoting or downvoting an event
 */
export type PatchV1IncidentsIncidentIdEventsEventIdVotes = {
  /**
   * The direction you would like to vote, or if you dig it
   */
  direction: Direction;
};

/** @internal */
export const Direction$inboundSchema: z.ZodNativeEnum<typeof Direction> = z
  .nativeEnum(Direction);

/** @internal */
export const Direction$outboundSchema: z.ZodNativeEnum<typeof Direction> =
  Direction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Direction$ {
  /** @deprecated use `Direction$inboundSchema` instead. */
  export const inboundSchema = Direction$inboundSchema;
  /** @deprecated use `Direction$outboundSchema` instead. */
  export const outboundSchema = Direction$outboundSchema;
}

/** @internal */
export const PatchV1IncidentsIncidentIdEventsEventIdVotes$inboundSchema:
  z.ZodType<
    PatchV1IncidentsIncidentIdEventsEventIdVotes,
    z.ZodTypeDef,
    unknown
  > = z.object({
    direction: Direction$inboundSchema,
  });

/** @internal */
export type PatchV1IncidentsIncidentIdEventsEventIdVotes$Outbound = {
  direction: string;
};

/** @internal */
export const PatchV1IncidentsIncidentIdEventsEventIdVotes$outboundSchema:
  z.ZodType<
    PatchV1IncidentsIncidentIdEventsEventIdVotes$Outbound,
    z.ZodTypeDef,
    PatchV1IncidentsIncidentIdEventsEventIdVotes
  > = z.object({
    direction: Direction$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1IncidentsIncidentIdEventsEventIdVotes$ {
  /** @deprecated use `PatchV1IncidentsIncidentIdEventsEventIdVotes$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1IncidentsIncidentIdEventsEventIdVotes$inboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdEventsEventIdVotes$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1IncidentsIncidentIdEventsEventIdVotes$outboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdEventsEventIdVotes$Outbound` instead. */
  export type Outbound = PatchV1IncidentsIncidentIdEventsEventIdVotes$Outbound;
}

export function patchV1IncidentsIncidentIdEventsEventIdVotesToJSON(
  patchV1IncidentsIncidentIdEventsEventIdVotes:
    PatchV1IncidentsIncidentIdEventsEventIdVotes,
): string {
  return JSON.stringify(
    PatchV1IncidentsIncidentIdEventsEventIdVotes$outboundSchema.parse(
      patchV1IncidentsIncidentIdEventsEventIdVotes,
    ),
  );
}

export function patchV1IncidentsIncidentIdEventsEventIdVotesFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchV1IncidentsIncidentIdEventsEventIdVotes,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1IncidentsIncidentIdEventsEventIdVotes$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchV1IncidentsIncidentIdEventsEventIdVotes' from JSON`,
  );
}
