/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListWebhookDeliveriesRequest = {
  /**
   * ID of a webhook
   */
  webhookId: string;
};

/** @internal */
export const ListWebhookDeliveriesRequest$inboundSchema: z.ZodType<
  ListWebhookDeliveriesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "webhook_id": "webhookId",
  });
});

/** @internal */
export type ListWebhookDeliveriesRequest$Outbound = {
  webhook_id: string;
};

/** @internal */
export const ListWebhookDeliveriesRequest$outboundSchema: z.ZodType<
  ListWebhookDeliveriesRequest$Outbound,
  z.ZodTypeDef,
  ListWebhookDeliveriesRequest
> = z.object({
  webhookId: z.string(),
}).transform((v) => {
  return remap$(v, {
    webhookId: "webhook_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhookDeliveriesRequest$ {
  /** @deprecated use `ListWebhookDeliveriesRequest$inboundSchema` instead. */
  export const inboundSchema = ListWebhookDeliveriesRequest$inboundSchema;
  /** @deprecated use `ListWebhookDeliveriesRequest$outboundSchema` instead. */
  export const outboundSchema = ListWebhookDeliveriesRequest$outboundSchema;
  /** @deprecated use `ListWebhookDeliveriesRequest$Outbound` instead. */
  export type Outbound = ListWebhookDeliveriesRequest$Outbound;
}

export function listWebhookDeliveriesRequestToJSON(
  listWebhookDeliveriesRequest: ListWebhookDeliveriesRequest,
): string {
  return JSON.stringify(
    ListWebhookDeliveriesRequest$outboundSchema.parse(
      listWebhookDeliveriesRequest,
    ),
  );
}

export function listWebhookDeliveriesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhookDeliveriesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhookDeliveriesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhookDeliveriesRequest' from JSON`,
  );
}
