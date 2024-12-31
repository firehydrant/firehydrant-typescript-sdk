/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TeamEntityLite,
  TeamEntityLite$inboundSchema,
  TeamEntityLite$Outbound,
  TeamEntityLite$outboundSchema,
} from "./teamentitylite.js";

export type IncidentsTeamAssignmentEntityLite = {
  id?: string | undefined;
  status?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  team?: TeamEntityLite | undefined;
};

/** @internal */
export const IncidentsTeamAssignmentEntityLite$inboundSchema: z.ZodType<
  IncidentsTeamAssignmentEntityLite,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  team: TeamEntityLite$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type IncidentsTeamAssignmentEntityLite$Outbound = {
  id?: string | undefined;
  status?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  team?: TeamEntityLite$Outbound | undefined;
};

/** @internal */
export const IncidentsTeamAssignmentEntityLite$outboundSchema: z.ZodType<
  IncidentsTeamAssignmentEntityLite$Outbound,
  z.ZodTypeDef,
  IncidentsTeamAssignmentEntityLite
> = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  team: TeamEntityLite$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncidentsTeamAssignmentEntityLite$ {
  /** @deprecated use `IncidentsTeamAssignmentEntityLite$inboundSchema` instead. */
  export const inboundSchema = IncidentsTeamAssignmentEntityLite$inboundSchema;
  /** @deprecated use `IncidentsTeamAssignmentEntityLite$outboundSchema` instead. */
  export const outboundSchema =
    IncidentsTeamAssignmentEntityLite$outboundSchema;
  /** @deprecated use `IncidentsTeamAssignmentEntityLite$Outbound` instead. */
  export type Outbound = IncidentsTeamAssignmentEntityLite$Outbound;
}

export function incidentsTeamAssignmentEntityLiteToJSON(
  incidentsTeamAssignmentEntityLite: IncidentsTeamAssignmentEntityLite,
): string {
  return JSON.stringify(
    IncidentsTeamAssignmentEntityLite$outboundSchema.parse(
      incidentsTeamAssignmentEntityLite,
    ),
  );
}

export function incidentsTeamAssignmentEntityLiteFromJSON(
  jsonString: string,
): SafeParseResult<IncidentsTeamAssignmentEntityLite, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IncidentsTeamAssignmentEntityLite$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IncidentsTeamAssignmentEntityLite' from JSON`,
  );
}
