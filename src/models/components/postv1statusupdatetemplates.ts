/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Create a status update template for your organization
 */
export type PostV1StatusUpdateTemplates = {
  name: string;
  body: string;
};

/** @internal */
export const PostV1StatusUpdateTemplates$inboundSchema: z.ZodType<
  PostV1StatusUpdateTemplates,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  body: z.string(),
});

/** @internal */
export type PostV1StatusUpdateTemplates$Outbound = {
  name: string;
  body: string;
};

/** @internal */
export const PostV1StatusUpdateTemplates$outboundSchema: z.ZodType<
  PostV1StatusUpdateTemplates$Outbound,
  z.ZodTypeDef,
  PostV1StatusUpdateTemplates
> = z.object({
  name: z.string(),
  body: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1StatusUpdateTemplates$ {
  /** @deprecated use `PostV1StatusUpdateTemplates$inboundSchema` instead. */
  export const inboundSchema = PostV1StatusUpdateTemplates$inboundSchema;
  /** @deprecated use `PostV1StatusUpdateTemplates$outboundSchema` instead. */
  export const outboundSchema = PostV1StatusUpdateTemplates$outboundSchema;
  /** @deprecated use `PostV1StatusUpdateTemplates$Outbound` instead. */
  export type Outbound = PostV1StatusUpdateTemplates$Outbound;
}

export function postV1StatusUpdateTemplatesToJSON(
  postV1StatusUpdateTemplates: PostV1StatusUpdateTemplates,
): string {
  return JSON.stringify(
    PostV1StatusUpdateTemplates$outboundSchema.parse(
      postV1StatusUpdateTemplates,
    ),
  );
}

export function postV1StatusUpdateTemplatesFromJSON(
  jsonString: string,
): SafeParseResult<PostV1StatusUpdateTemplates, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1StatusUpdateTemplates$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1StatusUpdateTemplates' from JSON`,
  );
}
