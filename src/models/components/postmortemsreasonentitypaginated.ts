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
  PostMortemsReasonEntity,
  PostMortemsReasonEntity$inboundSchema,
  PostMortemsReasonEntity$Outbound,
  PostMortemsReasonEntity$outboundSchema,
} from "./postmortemsreasonentity.js";

/**
 * PostMortems_ReasonEntityPaginated model
 */
export type PostMortemsReasonEntityPaginated = {
  data?: Array<PostMortemsReasonEntity> | undefined;
  pagination?: PaginationEntity | undefined;
};

/** @internal */
export const PostMortemsReasonEntityPaginated$inboundSchema: z.ZodType<
  PostMortemsReasonEntityPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(PostMortemsReasonEntity$inboundSchema).optional(),
  pagination: PaginationEntity$inboundSchema.optional(),
});

/** @internal */
export type PostMortemsReasonEntityPaginated$Outbound = {
  data?: Array<PostMortemsReasonEntity$Outbound> | undefined;
  pagination?: PaginationEntity$Outbound | undefined;
};

/** @internal */
export const PostMortemsReasonEntityPaginated$outboundSchema: z.ZodType<
  PostMortemsReasonEntityPaginated$Outbound,
  z.ZodTypeDef,
  PostMortemsReasonEntityPaginated
> = z.object({
  data: z.array(PostMortemsReasonEntity$outboundSchema).optional(),
  pagination: PaginationEntity$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostMortemsReasonEntityPaginated$ {
  /** @deprecated use `PostMortemsReasonEntityPaginated$inboundSchema` instead. */
  export const inboundSchema = PostMortemsReasonEntityPaginated$inboundSchema;
  /** @deprecated use `PostMortemsReasonEntityPaginated$outboundSchema` instead. */
  export const outboundSchema = PostMortemsReasonEntityPaginated$outboundSchema;
  /** @deprecated use `PostMortemsReasonEntityPaginated$Outbound` instead. */
  export type Outbound = PostMortemsReasonEntityPaginated$Outbound;
}

export function postMortemsReasonEntityPaginatedToJSON(
  postMortemsReasonEntityPaginated: PostMortemsReasonEntityPaginated,
): string {
  return JSON.stringify(
    PostMortemsReasonEntityPaginated$outboundSchema.parse(
      postMortemsReasonEntityPaginated,
    ),
  );
}

export function postMortemsReasonEntityPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<PostMortemsReasonEntityPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostMortemsReasonEntityPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostMortemsReasonEntityPaginated' from JSON`,
  );
}
