/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ActorEntity,
  ActorEntity$inboundSchema,
  ActorEntity$Outbound,
  ActorEntity$outboundSchema,
} from "./actorentity.js";
import {
  OrganizationEntity,
  OrganizationEntity$inboundSchema,
  OrganizationEntity$Outbound,
  OrganizationEntity$outboundSchema,
} from "./organizationentity.js";

/**
 * PongEntity model
 */
export type PongEntity = {
  response?: string | undefined;
  actor?: ActorEntity | undefined;
  organization?: OrganizationEntity | undefined;
};

/** @internal */
export const PongEntity$inboundSchema: z.ZodType<
  PongEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  response: z.string().optional(),
  actor: ActorEntity$inboundSchema.optional(),
  organization: OrganizationEntity$inboundSchema.optional(),
});

/** @internal */
export type PongEntity$Outbound = {
  response?: string | undefined;
  actor?: ActorEntity$Outbound | undefined;
  organization?: OrganizationEntity$Outbound | undefined;
};

/** @internal */
export const PongEntity$outboundSchema: z.ZodType<
  PongEntity$Outbound,
  z.ZodTypeDef,
  PongEntity
> = z.object({
  response: z.string().optional(),
  actor: ActorEntity$outboundSchema.optional(),
  organization: OrganizationEntity$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PongEntity$ {
  /** @deprecated use `PongEntity$inboundSchema` instead. */
  export const inboundSchema = PongEntity$inboundSchema;
  /** @deprecated use `PongEntity$outboundSchema` instead. */
  export const outboundSchema = PongEntity$outboundSchema;
  /** @deprecated use `PongEntity$Outbound` instead. */
  export type Outbound = PongEntity$Outbound;
}

export function pongEntityToJSON(pongEntity: PongEntity): string {
  return JSON.stringify(PongEntity$outboundSchema.parse(pongEntity));
}

export function pongEntityFromJSON(
  jsonString: string,
): SafeParseResult<PongEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PongEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PongEntity' from JSON`,
  );
}
