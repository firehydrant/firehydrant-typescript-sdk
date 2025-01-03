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
export const PatchV1RunbooksExecutionsExecutionIdVotesDirection = {
  Up: "up",
  Down: "down",
  Dig: "dig",
} as const;
/**
 * The direction you would like to vote, or if you dig it
 */
export type PatchV1RunbooksExecutionsExecutionIdVotesDirection = ClosedEnum<
  typeof PatchV1RunbooksExecutionsExecutionIdVotesDirection
>;

/**
 * Allows for upvoting or downvoting an event
 */
export type PatchV1RunbooksExecutionsExecutionIdVotes = {
  /**
   * The direction you would like to vote, or if you dig it
   */
  direction: PatchV1RunbooksExecutionsExecutionIdVotesDirection;
};

/** @internal */
export const PatchV1RunbooksExecutionsExecutionIdVotesDirection$inboundSchema:
  z.ZodNativeEnum<typeof PatchV1RunbooksExecutionsExecutionIdVotesDirection> = z
    .nativeEnum(PatchV1RunbooksExecutionsExecutionIdVotesDirection);

/** @internal */
export const PatchV1RunbooksExecutionsExecutionIdVotesDirection$outboundSchema:
  z.ZodNativeEnum<typeof PatchV1RunbooksExecutionsExecutionIdVotesDirection> =
    PatchV1RunbooksExecutionsExecutionIdVotesDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1RunbooksExecutionsExecutionIdVotesDirection$ {
  /** @deprecated use `PatchV1RunbooksExecutionsExecutionIdVotesDirection$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1RunbooksExecutionsExecutionIdVotesDirection$inboundSchema;
  /** @deprecated use `PatchV1RunbooksExecutionsExecutionIdVotesDirection$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1RunbooksExecutionsExecutionIdVotesDirection$outboundSchema;
}

/** @internal */
export const PatchV1RunbooksExecutionsExecutionIdVotes$inboundSchema: z.ZodType<
  PatchV1RunbooksExecutionsExecutionIdVotes,
  z.ZodTypeDef,
  unknown
> = z.object({
  direction: PatchV1RunbooksExecutionsExecutionIdVotesDirection$inboundSchema,
});

/** @internal */
export type PatchV1RunbooksExecutionsExecutionIdVotes$Outbound = {
  direction: string;
};

/** @internal */
export const PatchV1RunbooksExecutionsExecutionIdVotes$outboundSchema:
  z.ZodType<
    PatchV1RunbooksExecutionsExecutionIdVotes$Outbound,
    z.ZodTypeDef,
    PatchV1RunbooksExecutionsExecutionIdVotes
  > = z.object({
    direction:
      PatchV1RunbooksExecutionsExecutionIdVotesDirection$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1RunbooksExecutionsExecutionIdVotes$ {
  /** @deprecated use `PatchV1RunbooksExecutionsExecutionIdVotes$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1RunbooksExecutionsExecutionIdVotes$inboundSchema;
  /** @deprecated use `PatchV1RunbooksExecutionsExecutionIdVotes$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1RunbooksExecutionsExecutionIdVotes$outboundSchema;
  /** @deprecated use `PatchV1RunbooksExecutionsExecutionIdVotes$Outbound` instead. */
  export type Outbound = PatchV1RunbooksExecutionsExecutionIdVotes$Outbound;
}

export function patchV1RunbooksExecutionsExecutionIdVotesToJSON(
  patchV1RunbooksExecutionsExecutionIdVotes:
    PatchV1RunbooksExecutionsExecutionIdVotes,
): string {
  return JSON.stringify(
    PatchV1RunbooksExecutionsExecutionIdVotes$outboundSchema.parse(
      patchV1RunbooksExecutionsExecutionIdVotes,
    ),
  );
}

export function patchV1RunbooksExecutionsExecutionIdVotesFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchV1RunbooksExecutionsExecutionIdVotes,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1RunbooksExecutionsExecutionIdVotes$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchV1RunbooksExecutionsExecutionIdVotes' from JSON`,
  );
}
