/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateWebhookRequest = {
  webhookId: string;
  patchV1WebhooksWebhookId: components.PatchV1WebhooksWebhookId;
};

/** @internal */
export const UpdateWebhookRequest$inboundSchema: z.ZodType<
  UpdateWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_id: z.string(),
  patchV1WebhooksWebhookId: components.PatchV1WebhooksWebhookId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "webhook_id": "webhookId",
  });
});

/** @internal */
export type UpdateWebhookRequest$Outbound = {
  webhook_id: string;
  patchV1WebhooksWebhookId: components.PatchV1WebhooksWebhookId$Outbound;
};

/** @internal */
export const UpdateWebhookRequest$outboundSchema: z.ZodType<
  UpdateWebhookRequest$Outbound,
  z.ZodTypeDef,
  UpdateWebhookRequest
> = z.object({
  webhookId: z.string(),
  patchV1WebhooksWebhookId: components.PatchV1WebhooksWebhookId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    webhookId: "webhook_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookRequest$ {
  /** @deprecated use `UpdateWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookRequest$inboundSchema;
  /** @deprecated use `UpdateWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookRequest$outboundSchema;
  /** @deprecated use `UpdateWebhookRequest$Outbound` instead. */
  export type Outbound = UpdateWebhookRequest$Outbound;
}

export function updateWebhookRequestToJSON(
  updateWebhookRequest: UpdateWebhookRequest,
): string {
  return JSON.stringify(
    UpdateWebhookRequest$outboundSchema.parse(updateWebhookRequest),
  );
}

export function updateWebhookRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWebhookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWebhookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWebhookRequest' from JSON`,
  );
}
