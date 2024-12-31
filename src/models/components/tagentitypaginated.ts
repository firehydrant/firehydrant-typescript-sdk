/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaginationEntity,
  PaginationEntity$inboundSchema,
  PaginationEntity$Outbound,
  PaginationEntity$outboundSchema,
} from "./paginationentity.js";
import {
  TagEntity,
  TagEntity$inboundSchema,
  TagEntity$Outbound,
  TagEntity$outboundSchema,
} from "./tagentity.js";

/**
 * TagEntityPaginated model
 */
export type TagEntityPaginated = {
  data?: Array<TagEntity> | undefined;
  pagination?: PaginationEntity | undefined;
};

/** @internal */
export const TagEntityPaginated$inboundSchema: z.ZodType<
  TagEntityPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(TagEntity$inboundSchema).optional(),
  pagination: PaginationEntity$inboundSchema.optional(),
});

/** @internal */
export type TagEntityPaginated$Outbound = {
  data?: Array<TagEntity$Outbound> | undefined;
  pagination?: PaginationEntity$Outbound | undefined;
};

/** @internal */
export const TagEntityPaginated$outboundSchema: z.ZodType<
  TagEntityPaginated$Outbound,
  z.ZodTypeDef,
  TagEntityPaginated
> = z.object({
  data: z.array(TagEntity$outboundSchema).optional(),
  pagination: PaginationEntity$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TagEntityPaginated$ {
  /** @deprecated use `TagEntityPaginated$inboundSchema` instead. */
  export const inboundSchema = TagEntityPaginated$inboundSchema;
  /** @deprecated use `TagEntityPaginated$outboundSchema` instead. */
  export const outboundSchema = TagEntityPaginated$outboundSchema;
  /** @deprecated use `TagEntityPaginated$Outbound` instead. */
  export type Outbound = TagEntityPaginated$Outbound;
}

export function tagEntityPaginatedToJSON(
  tagEntityPaginated: TagEntityPaginated,
): string {
  return JSON.stringify(
    TagEntityPaginated$outboundSchema.parse(tagEntityPaginated),
  );
}

export function tagEntityPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<TagEntityPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TagEntityPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TagEntityPaginated' from JSON`,
  );
}
