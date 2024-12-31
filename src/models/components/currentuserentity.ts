/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SuccinctEntity,
  SuccinctEntity$inboundSchema,
  SuccinctEntity$Outbound,
  SuccinctEntity$outboundSchema,
} from "./succinctentity.js";

/**
 * CurrentUserEntity model
 */
export type CurrentUserEntity = {
  id?: string | undefined;
  name?: string | undefined;
  source?: string | undefined;
  email?: string | undefined;
  role?: string | undefined;
  teams?: Array<SuccinctEntity> | undefined;
  organizationId?: string | undefined;
  organizationName?: string | undefined;
  accountId?: number | undefined;
};

/** @internal */
export const CurrentUserEntity$inboundSchema: z.ZodType<
  CurrentUserEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  source: z.string().optional(),
  email: z.string().optional(),
  role: z.string().optional(),
  teams: z.array(SuccinctEntity$inboundSchema).optional(),
  organization_id: z.string().optional(),
  organization_name: z.string().optional(),
  account_id: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "organization_name": "organizationName",
    "account_id": "accountId",
  });
});

/** @internal */
export type CurrentUserEntity$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  source?: string | undefined;
  email?: string | undefined;
  role?: string | undefined;
  teams?: Array<SuccinctEntity$Outbound> | undefined;
  organization_id?: string | undefined;
  organization_name?: string | undefined;
  account_id?: number | undefined;
};

/** @internal */
export const CurrentUserEntity$outboundSchema: z.ZodType<
  CurrentUserEntity$Outbound,
  z.ZodTypeDef,
  CurrentUserEntity
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  source: z.string().optional(),
  email: z.string().optional(),
  role: z.string().optional(),
  teams: z.array(SuccinctEntity$outboundSchema).optional(),
  organizationId: z.string().optional(),
  organizationName: z.string().optional(),
  accountId: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    organizationName: "organization_name",
    accountId: "account_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CurrentUserEntity$ {
  /** @deprecated use `CurrentUserEntity$inboundSchema` instead. */
  export const inboundSchema = CurrentUserEntity$inboundSchema;
  /** @deprecated use `CurrentUserEntity$outboundSchema` instead. */
  export const outboundSchema = CurrentUserEntity$outboundSchema;
  /** @deprecated use `CurrentUserEntity$Outbound` instead. */
  export type Outbound = CurrentUserEntity$Outbound;
}

export function currentUserEntityToJSON(
  currentUserEntity: CurrentUserEntity,
): string {
  return JSON.stringify(
    CurrentUserEntity$outboundSchema.parse(currentUserEntity),
  );
}

export function currentUserEntityFromJSON(
  jsonString: string,
): SafeParseResult<CurrentUserEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CurrentUserEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CurrentUserEntity' from JSON`,
  );
}
