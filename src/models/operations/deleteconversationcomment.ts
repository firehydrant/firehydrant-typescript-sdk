/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteConversationCommentRequest = {
  commentId: string;
  conversationId: string;
};

/** @internal */
export const DeleteConversationCommentRequest$inboundSchema: z.ZodType<
  DeleteConversationCommentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  comment_id: z.string(),
  conversation_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "comment_id": "commentId",
    "conversation_id": "conversationId",
  });
});

/** @internal */
export type DeleteConversationCommentRequest$Outbound = {
  comment_id: string;
  conversation_id: string;
};

/** @internal */
export const DeleteConversationCommentRequest$outboundSchema: z.ZodType<
  DeleteConversationCommentRequest$Outbound,
  z.ZodTypeDef,
  DeleteConversationCommentRequest
> = z.object({
  commentId: z.string(),
  conversationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    commentId: "comment_id",
    conversationId: "conversation_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteConversationCommentRequest$ {
  /** @deprecated use `DeleteConversationCommentRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteConversationCommentRequest$inboundSchema;
  /** @deprecated use `DeleteConversationCommentRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteConversationCommentRequest$outboundSchema;
  /** @deprecated use `DeleteConversationCommentRequest$Outbound` instead. */
  export type Outbound = DeleteConversationCommentRequest$Outbound;
}

export function deleteConversationCommentRequestToJSON(
  deleteConversationCommentRequest: DeleteConversationCommentRequest,
): string {
  return JSON.stringify(
    DeleteConversationCommentRequest$outboundSchema.parse(
      deleteConversationCommentRequest,
    ),
  );
}

export function deleteConversationCommentRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteConversationCommentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteConversationCommentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteConversationCommentRequest' from JSON`,
  );
}
