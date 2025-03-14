/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * PostMortems_QuestionTypeEntity model
 */
export type PostMortemsQuestionTypeEntity = {
  id?: string | undefined;
  title?: string | undefined;
  tooltip?: string | undefined;
  kind?: string | undefined;
  isRequired?: boolean | undefined;
  availableOptions?: Array<string> | undefined;
};

/** @internal */
export const PostMortemsQuestionTypeEntity$inboundSchema: z.ZodType<
  PostMortemsQuestionTypeEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  tooltip: z.string().optional(),
  kind: z.string().optional(),
  is_required: z.boolean().optional(),
  available_options: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "is_required": "isRequired",
    "available_options": "availableOptions",
  });
});

/** @internal */
export type PostMortemsQuestionTypeEntity$Outbound = {
  id?: string | undefined;
  title?: string | undefined;
  tooltip?: string | undefined;
  kind?: string | undefined;
  is_required?: boolean | undefined;
  available_options?: Array<string> | undefined;
};

/** @internal */
export const PostMortemsQuestionTypeEntity$outboundSchema: z.ZodType<
  PostMortemsQuestionTypeEntity$Outbound,
  z.ZodTypeDef,
  PostMortemsQuestionTypeEntity
> = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  tooltip: z.string().optional(),
  kind: z.string().optional(),
  isRequired: z.boolean().optional(),
  availableOptions: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    isRequired: "is_required",
    availableOptions: "available_options",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostMortemsQuestionTypeEntity$ {
  /** @deprecated use `PostMortemsQuestionTypeEntity$inboundSchema` instead. */
  export const inboundSchema = PostMortemsQuestionTypeEntity$inboundSchema;
  /** @deprecated use `PostMortemsQuestionTypeEntity$outboundSchema` instead. */
  export const outboundSchema = PostMortemsQuestionTypeEntity$outboundSchema;
  /** @deprecated use `PostMortemsQuestionTypeEntity$Outbound` instead. */
  export type Outbound = PostMortemsQuestionTypeEntity$Outbound;
}

export function postMortemsQuestionTypeEntityToJSON(
  postMortemsQuestionTypeEntity: PostMortemsQuestionTypeEntity,
): string {
  return JSON.stringify(
    PostMortemsQuestionTypeEntity$outboundSchema.parse(
      postMortemsQuestionTypeEntity,
    ),
  );
}

export function postMortemsQuestionTypeEntityFromJSON(
  jsonString: string,
): SafeParseResult<PostMortemsQuestionTypeEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostMortemsQuestionTypeEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostMortemsQuestionTypeEntity' from JSON`,
  );
}
