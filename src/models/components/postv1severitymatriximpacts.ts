/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Create a new impact
 */
export type PostV1SeverityMatrixImpacts = {
  affectsType: string;
  affectsId: string;
  position?: number | undefined;
};

/** @internal */
export const PostV1SeverityMatrixImpacts$inboundSchema: z.ZodType<
  PostV1SeverityMatrixImpacts,
  z.ZodTypeDef,
  unknown
> = z.object({
  affects_type: z.string(),
  affects_id: z.string(),
  position: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "affects_type": "affectsType",
    "affects_id": "affectsId",
  });
});

/** @internal */
export type PostV1SeverityMatrixImpacts$Outbound = {
  affects_type: string;
  affects_id: string;
  position?: number | undefined;
};

/** @internal */
export const PostV1SeverityMatrixImpacts$outboundSchema: z.ZodType<
  PostV1SeverityMatrixImpacts$Outbound,
  z.ZodTypeDef,
  PostV1SeverityMatrixImpacts
> = z.object({
  affectsType: z.string(),
  affectsId: z.string(),
  position: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    affectsType: "affects_type",
    affectsId: "affects_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SeverityMatrixImpacts$ {
  /** @deprecated use `PostV1SeverityMatrixImpacts$inboundSchema` instead. */
  export const inboundSchema = PostV1SeverityMatrixImpacts$inboundSchema;
  /** @deprecated use `PostV1SeverityMatrixImpacts$outboundSchema` instead. */
  export const outboundSchema = PostV1SeverityMatrixImpacts$outboundSchema;
  /** @deprecated use `PostV1SeverityMatrixImpacts$Outbound` instead. */
  export type Outbound = PostV1SeverityMatrixImpacts$Outbound;
}

export function postV1SeverityMatrixImpactsToJSON(
  postV1SeverityMatrixImpacts: PostV1SeverityMatrixImpacts,
): string {
  return JSON.stringify(
    PostV1SeverityMatrixImpacts$outboundSchema.parse(
      postV1SeverityMatrixImpacts,
    ),
  );
}

export function postV1SeverityMatrixImpactsFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SeverityMatrixImpacts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1SeverityMatrixImpacts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SeverityMatrixImpacts' from JSON`,
  );
}
