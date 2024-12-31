/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IntegrationsSlackSlackChannelEntity = {
  id?: string | undefined;
  name?: string | undefined;
  slackChannelId?: string | undefined;
};

/** @internal */
export const IntegrationsSlackSlackChannelEntity$inboundSchema: z.ZodType<
  IntegrationsSlackSlackChannelEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  slack_channel_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "slack_channel_id": "slackChannelId",
  });
});

/** @internal */
export type IntegrationsSlackSlackChannelEntity$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  slack_channel_id?: string | undefined;
};

/** @internal */
export const IntegrationsSlackSlackChannelEntity$outboundSchema: z.ZodType<
  IntegrationsSlackSlackChannelEntity$Outbound,
  z.ZodTypeDef,
  IntegrationsSlackSlackChannelEntity
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  slackChannelId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    slackChannelId: "slack_channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsSlackSlackChannelEntity$ {
  /** @deprecated use `IntegrationsSlackSlackChannelEntity$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsSlackSlackChannelEntity$inboundSchema;
  /** @deprecated use `IntegrationsSlackSlackChannelEntity$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsSlackSlackChannelEntity$outboundSchema;
  /** @deprecated use `IntegrationsSlackSlackChannelEntity$Outbound` instead. */
  export type Outbound = IntegrationsSlackSlackChannelEntity$Outbound;
}

export function integrationsSlackSlackChannelEntityToJSON(
  integrationsSlackSlackChannelEntity: IntegrationsSlackSlackChannelEntity,
): string {
  return JSON.stringify(
    IntegrationsSlackSlackChannelEntity$outboundSchema.parse(
      integrationsSlackSlackChannelEntity,
    ),
  );
}

export function integrationsSlackSlackChannelEntityFromJSON(
  jsonString: string,
): SafeParseResult<IntegrationsSlackSlackChannelEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      IntegrationsSlackSlackChannelEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IntegrationsSlackSlackChannelEntity' from JSON`,
  );
}
