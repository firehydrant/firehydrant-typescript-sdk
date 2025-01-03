/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListIntegrationConnectionsRequest = {
  /**
   * Only return installed integrations with the supplied slugs (types).
   */
  integrationSlug?: string | undefined;
};

/** @internal */
export const ListIntegrationConnectionsRequest$inboundSchema: z.ZodType<
  ListIntegrationConnectionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  integration_slug: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "integration_slug": "integrationSlug",
  });
});

/** @internal */
export type ListIntegrationConnectionsRequest$Outbound = {
  integration_slug?: string | undefined;
};

/** @internal */
export const ListIntegrationConnectionsRequest$outboundSchema: z.ZodType<
  ListIntegrationConnectionsRequest$Outbound,
  z.ZodTypeDef,
  ListIntegrationConnectionsRequest
> = z.object({
  integrationSlug: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    integrationSlug: "integration_slug",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListIntegrationConnectionsRequest$ {
  /** @deprecated use `ListIntegrationConnectionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListIntegrationConnectionsRequest$inboundSchema;
  /** @deprecated use `ListIntegrationConnectionsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListIntegrationConnectionsRequest$outboundSchema;
  /** @deprecated use `ListIntegrationConnectionsRequest$Outbound` instead. */
  export type Outbound = ListIntegrationConnectionsRequest$Outbound;
}

export function listIntegrationConnectionsRequestToJSON(
  listIntegrationConnectionsRequest: ListIntegrationConnectionsRequest,
): string {
  return JSON.stringify(
    ListIntegrationConnectionsRequest$outboundSchema.parse(
      listIntegrationConnectionsRequest,
    ),
  );
}

export function listIntegrationConnectionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListIntegrationConnectionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListIntegrationConnectionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListIntegrationConnectionsRequest' from JSON`,
  );
}
