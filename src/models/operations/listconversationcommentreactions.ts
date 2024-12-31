/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListConversationCommentReactionsRequest = {
  conversationId: string;
  commentId: string;
};

/** @internal */
export const ListConversationCommentReactionsRequest$inboundSchema: z.ZodType<
  ListConversationCommentReactionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  conversation_id: z.string(),
  comment_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "conversation_id": "conversationId",
    "comment_id": "commentId",
  });
});

/** @internal */
export type ListConversationCommentReactionsRequest$Outbound = {
  conversation_id: string;
  comment_id: string;
};

/** @internal */
export const ListConversationCommentReactionsRequest$outboundSchema: z.ZodType<
  ListConversationCommentReactionsRequest$Outbound,
  z.ZodTypeDef,
  ListConversationCommentReactionsRequest
> = z.object({
  conversationId: z.string(),
  commentId: z.string(),
}).transform((v) => {
  return remap$(v, {
    conversationId: "conversation_id",
    commentId: "comment_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConversationCommentReactionsRequest$ {
  /** @deprecated use `ListConversationCommentReactionsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListConversationCommentReactionsRequest$inboundSchema;
  /** @deprecated use `ListConversationCommentReactionsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListConversationCommentReactionsRequest$outboundSchema;
  /** @deprecated use `ListConversationCommentReactionsRequest$Outbound` instead. */
  export type Outbound = ListConversationCommentReactionsRequest$Outbound;
}

export function listConversationCommentReactionsRequestToJSON(
  listConversationCommentReactionsRequest:
    ListConversationCommentReactionsRequest,
): string {
  return JSON.stringify(
    ListConversationCommentReactionsRequest$outboundSchema.parse(
      listConversationCommentReactionsRequest,
    ),
  );
}

export function listConversationCommentReactionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ListConversationCommentReactionsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListConversationCommentReactionsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListConversationCommentReactionsRequest' from JSON`,
  );
}
