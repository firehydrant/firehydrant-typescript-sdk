/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Questions = {
  /**
   * ID of a question
   */
  id?: string | undefined;
  /**
   * title of a question
   */
  title?: string | undefined;
  /**
   * tooltip of a question
   */
  tooltip?: string | undefined;
};

/**
 * Update the questions configured to be provided and filled out on future retrospective reports.
 */
export type PutV1PostMortemsQuestions = {
  makeSwaggerWork?: string | undefined;
  questions?: Array<Questions> | undefined;
};

/** @internal */
export const Questions$inboundSchema: z.ZodType<
  Questions,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  tooltip: z.string().optional(),
});

/** @internal */
export type Questions$Outbound = {
  id?: string | undefined;
  title?: string | undefined;
  tooltip?: string | undefined;
};

/** @internal */
export const Questions$outboundSchema: z.ZodType<
  Questions$Outbound,
  z.ZodTypeDef,
  Questions
> = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  tooltip: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Questions$ {
  /** @deprecated use `Questions$inboundSchema` instead. */
  export const inboundSchema = Questions$inboundSchema;
  /** @deprecated use `Questions$outboundSchema` instead. */
  export const outboundSchema = Questions$outboundSchema;
  /** @deprecated use `Questions$Outbound` instead. */
  export type Outbound = Questions$Outbound;
}

export function questionsToJSON(questions: Questions): string {
  return JSON.stringify(Questions$outboundSchema.parse(questions));
}

export function questionsFromJSON(
  jsonString: string,
): SafeParseResult<Questions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Questions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Questions' from JSON`,
  );
}

/** @internal */
export const PutV1PostMortemsQuestions$inboundSchema: z.ZodType<
  PutV1PostMortemsQuestions,
  z.ZodTypeDef,
  unknown
> = z.object({
  _make_swagger_work_: z.string().optional(),
  questions: z.array(z.lazy(() => Questions$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "_make_swagger_work_": "makeSwaggerWork",
  });
});

/** @internal */
export type PutV1PostMortemsQuestions$Outbound = {
  _make_swagger_work_?: string | undefined;
  questions?: Array<Questions$Outbound> | undefined;
};

/** @internal */
export const PutV1PostMortemsQuestions$outboundSchema: z.ZodType<
  PutV1PostMortemsQuestions$Outbound,
  z.ZodTypeDef,
  PutV1PostMortemsQuestions
> = z.object({
  makeSwaggerWork: z.string().optional(),
  questions: z.array(z.lazy(() => Questions$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    makeSwaggerWork: "_make_swagger_work_",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PutV1PostMortemsQuestions$ {
  /** @deprecated use `PutV1PostMortemsQuestions$inboundSchema` instead. */
  export const inboundSchema = PutV1PostMortemsQuestions$inboundSchema;
  /** @deprecated use `PutV1PostMortemsQuestions$outboundSchema` instead. */
  export const outboundSchema = PutV1PostMortemsQuestions$outboundSchema;
  /** @deprecated use `PutV1PostMortemsQuestions$Outbound` instead. */
  export type Outbound = PutV1PostMortemsQuestions$Outbound;
}

export function putV1PostMortemsQuestionsToJSON(
  putV1PostMortemsQuestions: PutV1PostMortemsQuestions,
): string {
  return JSON.stringify(
    PutV1PostMortemsQuestions$outboundSchema.parse(putV1PostMortemsQuestions),
  );
}

export function putV1PostMortemsQuestionsFromJSON(
  jsonString: string,
): SafeParseResult<PutV1PostMortemsQuestions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PutV1PostMortemsQuestions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PutV1PostMortemsQuestions' from JSON`,
  );
}
