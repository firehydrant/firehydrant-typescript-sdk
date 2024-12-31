/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Create a Signals webhook target.
 */
export type PostV1SignalsWebhookTargets = {
  /**
   * The webhook target's name.
   */
  name: string;
  /**
   * An optional detailed description of the webhook target.
   */
  description?: string | undefined;
  /**
   * The URL that the webhook target will notify.
   */
  url: string;
  /**
   * An optional secret we will provide in the `FH-Signature` header
   *
   * @remarks
   * when sending a payload to the webhook target. This key will not be
   * shown in any response once configured.
   */
  signingKey?: string | undefined;
};

/** @internal */
export const PostV1SignalsWebhookTargets$inboundSchema: z.ZodType<
  PostV1SignalsWebhookTargets,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.string(),
  signing_key: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "signing_key": "signingKey",
  });
});

/** @internal */
export type PostV1SignalsWebhookTargets$Outbound = {
  name: string;
  description?: string | undefined;
  url: string;
  signing_key?: string | undefined;
};

/** @internal */
export const PostV1SignalsWebhookTargets$outboundSchema: z.ZodType<
  PostV1SignalsWebhookTargets$Outbound,
  z.ZodTypeDef,
  PostV1SignalsWebhookTargets
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.string(),
  signingKey: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    signingKey: "signing_key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SignalsWebhookTargets$ {
  /** @deprecated use `PostV1SignalsWebhookTargets$inboundSchema` instead. */
  export const inboundSchema = PostV1SignalsWebhookTargets$inboundSchema;
  /** @deprecated use `PostV1SignalsWebhookTargets$outboundSchema` instead. */
  export const outboundSchema = PostV1SignalsWebhookTargets$outboundSchema;
  /** @deprecated use `PostV1SignalsWebhookTargets$Outbound` instead. */
  export type Outbound = PostV1SignalsWebhookTargets$Outbound;
}

export function postV1SignalsWebhookTargetsToJSON(
  postV1SignalsWebhookTargets: PostV1SignalsWebhookTargets,
): string {
  return JSON.stringify(
    PostV1SignalsWebhookTargets$outboundSchema.parse(
      postV1SignalsWebhookTargets,
    ),
  );
}

export function postV1SignalsWebhookTargetsFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SignalsWebhookTargets, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1SignalsWebhookTargets$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SignalsWebhookTargets' from JSON`,
  );
}
