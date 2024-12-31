/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateConversationCommentReactionRequest = {
  conversationId: string;
  commentId: string;
  postV1ConversationsConversationIdCommentsCommentIdReactions:
    components.PostV1ConversationsConversationIdCommentsCommentIdReactions;
};

/** @internal */
export const CreateConversationCommentReactionRequest$inboundSchema: z.ZodType<
  CreateConversationCommentReactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  conversation_id: z.string(),
  comment_id: z.string(),
  postV1ConversationsConversationIdCommentsCommentIdReactions:
    components
      .PostV1ConversationsConversationIdCommentsCommentIdReactions$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "conversation_id": "conversationId",
    "comment_id": "commentId",
  });
});

/** @internal */
export type CreateConversationCommentReactionRequest$Outbound = {
  conversation_id: string;
  comment_id: string;
  postV1ConversationsConversationIdCommentsCommentIdReactions:
    components.PostV1ConversationsConversationIdCommentsCommentIdReactions$Outbound;
};

/** @internal */
export const CreateConversationCommentReactionRequest$outboundSchema: z.ZodType<
  CreateConversationCommentReactionRequest$Outbound,
  z.ZodTypeDef,
  CreateConversationCommentReactionRequest
> = z.object({
  conversationId: z.string(),
  commentId: z.string(),
  postV1ConversationsConversationIdCommentsCommentIdReactions:
    components
      .PostV1ConversationsConversationIdCommentsCommentIdReactions$outboundSchema,
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
export namespace CreateConversationCommentReactionRequest$ {
  /** @deprecated use `CreateConversationCommentReactionRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateConversationCommentReactionRequest$inboundSchema;
  /** @deprecated use `CreateConversationCommentReactionRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateConversationCommentReactionRequest$outboundSchema;
  /** @deprecated use `CreateConversationCommentReactionRequest$Outbound` instead. */
  export type Outbound = CreateConversationCommentReactionRequest$Outbound;
}

export function createConversationCommentReactionRequestToJSON(
  createConversationCommentReactionRequest:
    CreateConversationCommentReactionRequest,
): string {
  return JSON.stringify(
    CreateConversationCommentReactionRequest$outboundSchema.parse(
      createConversationCommentReactionRequest,
    ),
  );
}

export function createConversationCommentReactionRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateConversationCommentReactionRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateConversationCommentReactionRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateConversationCommentReactionRequest' from JSON`,
  );
}
