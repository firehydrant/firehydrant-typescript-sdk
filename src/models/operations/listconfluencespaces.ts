/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListConfluenceSpacesRequest = {
  id: string;
  /**
   * Space Key
   */
  keyword?: string | undefined;
};

/** @internal */
export const ListConfluenceSpacesRequest$inboundSchema: z.ZodType<
  ListConfluenceSpacesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  keyword: z.string().optional(),
});

/** @internal */
export type ListConfluenceSpacesRequest$Outbound = {
  id: string;
  keyword?: string | undefined;
};

/** @internal */
export const ListConfluenceSpacesRequest$outboundSchema: z.ZodType<
  ListConfluenceSpacesRequest$Outbound,
  z.ZodTypeDef,
  ListConfluenceSpacesRequest
> = z.object({
  id: z.string(),
  keyword: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConfluenceSpacesRequest$ {
  /** @deprecated use `ListConfluenceSpacesRequest$inboundSchema` instead. */
  export const inboundSchema = ListConfluenceSpacesRequest$inboundSchema;
  /** @deprecated use `ListConfluenceSpacesRequest$outboundSchema` instead. */
  export const outboundSchema = ListConfluenceSpacesRequest$outboundSchema;
  /** @deprecated use `ListConfluenceSpacesRequest$Outbound` instead. */
  export type Outbound = ListConfluenceSpacesRequest$Outbound;
}

export function listConfluenceSpacesRequestToJSON(
  listConfluenceSpacesRequest: ListConfluenceSpacesRequest,
): string {
  return JSON.stringify(
    ListConfluenceSpacesRequest$outboundSchema.parse(
      listConfluenceSpacesRequest,
    ),
  );
}

export function listConfluenceSpacesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListConfluenceSpacesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListConfluenceSpacesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListConfluenceSpacesRequest' from JSON`,
  );
}
