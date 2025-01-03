/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IncidentRoleEntity,
  IncidentRoleEntity$inboundSchema,
  IncidentRoleEntity$Outbound,
  IncidentRoleEntity$outboundSchema,
} from "./incidentroleentity.js";
import {
  PaginationEntity,
  PaginationEntity$inboundSchema,
  PaginationEntity$Outbound,
  PaginationEntity$outboundSchema,
} from "./paginationentity.js";

/**
 * IncidentRoleEntityPaginated model
 */
export type IncidentRoleEntityPaginated = {
  data?: Array<IncidentRoleEntity> | undefined;
  pagination?: PaginationEntity | undefined;
};

/** @internal */
export const IncidentRoleEntityPaginated$inboundSchema: z.ZodType<
  IncidentRoleEntityPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(IncidentRoleEntity$inboundSchema).optional(),
  pagination: PaginationEntity$inboundSchema.optional(),
});

/** @internal */
export type IncidentRoleEntityPaginated$Outbound = {
  data?: Array<IncidentRoleEntity$Outbound> | undefined;
  pagination?: PaginationEntity$Outbound | undefined;
};

/** @internal */
export const IncidentRoleEntityPaginated$outboundSchema: z.ZodType<
  IncidentRoleEntityPaginated$Outbound,
  z.ZodTypeDef,
  IncidentRoleEntityPaginated
> = z.object({
  data: z.array(IncidentRoleEntity$outboundSchema).optional(),
  pagination: PaginationEntity$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncidentRoleEntityPaginated$ {
  /** @deprecated use `IncidentRoleEntityPaginated$inboundSchema` instead. */
  export const inboundSchema = IncidentRoleEntityPaginated$inboundSchema;
  /** @deprecated use `IncidentRoleEntityPaginated$outboundSchema` instead. */
  export const outboundSchema = IncidentRoleEntityPaginated$outboundSchema;
  /** @deprecated use `IncidentRoleEntityPaginated$Outbound` instead. */
  export type Outbound = IncidentRoleEntityPaginated$Outbound;
}

export function incidentRoleEntityPaginatedToJSON(
  incidentRoleEntityPaginated: IncidentRoleEntityPaginated,
): string {
  return JSON.stringify(
    IncidentRoleEntityPaginated$outboundSchema.parse(
      incidentRoleEntityPaginated,
    ),
  );
}

export function incidentRoleEntityPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<IncidentRoleEntityPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IncidentRoleEntityPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IncidentRoleEntityPaginated' from JSON`,
  );
}
