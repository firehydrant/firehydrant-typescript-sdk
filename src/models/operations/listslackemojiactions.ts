/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListSlackEmojiActionsRequest = {
  /**
   * Slack Connection UUID
   */
  connectionId: string;
  page?: number | undefined;
  perPage?: number | undefined;
};

/** @internal */
export const ListSlackEmojiActionsRequest$inboundSchema: z.ZodType<
  ListSlackEmojiActionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  connection_id: z.string(),
  page: z.number().int().optional(),
  per_page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
    "per_page": "perPage",
  });
});

/** @internal */
export type ListSlackEmojiActionsRequest$Outbound = {
  connection_id: string;
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const ListSlackEmojiActionsRequest$outboundSchema: z.ZodType<
  ListSlackEmojiActionsRequest$Outbound,
  z.ZodTypeDef,
  ListSlackEmojiActionsRequest
> = z.object({
  connectionId: z.string(),
  page: z.number().int().optional(),
  perPage: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
    perPage: "per_page",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSlackEmojiActionsRequest$ {
  /** @deprecated use `ListSlackEmojiActionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListSlackEmojiActionsRequest$inboundSchema;
  /** @deprecated use `ListSlackEmojiActionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListSlackEmojiActionsRequest$outboundSchema;
  /** @deprecated use `ListSlackEmojiActionsRequest$Outbound` instead. */
  export type Outbound = ListSlackEmojiActionsRequest$Outbound;
}

export function listSlackEmojiActionsRequestToJSON(
  listSlackEmojiActionsRequest: ListSlackEmojiActionsRequest,
): string {
  return JSON.stringify(
    ListSlackEmojiActionsRequest$outboundSchema.parse(
      listSlackEmojiActionsRequest,
    ),
  );
}

export function listSlackEmojiActionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListSlackEmojiActionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListSlackEmojiActionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListSlackEmojiActionsRequest' from JSON`,
  );
}
