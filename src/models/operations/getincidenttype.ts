/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetIncidentTypeRequest = {
  id: string;
};

/** @internal */
export const GetIncidentTypeRequest$inboundSchema: z.ZodType<
  GetIncidentTypeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetIncidentTypeRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetIncidentTypeRequest$outboundSchema: z.ZodType<
  GetIncidentTypeRequest$Outbound,
  z.ZodTypeDef,
  GetIncidentTypeRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetIncidentTypeRequest$ {
  /** @deprecated use `GetIncidentTypeRequest$inboundSchema` instead. */
  export const inboundSchema = GetIncidentTypeRequest$inboundSchema;
  /** @deprecated use `GetIncidentTypeRequest$outboundSchema` instead. */
  export const outboundSchema = GetIncidentTypeRequest$outboundSchema;
  /** @deprecated use `GetIncidentTypeRequest$Outbound` instead. */
  export type Outbound = GetIncidentTypeRequest$Outbound;
}

export function getIncidentTypeRequestToJSON(
  getIncidentTypeRequest: GetIncidentTypeRequest,
): string {
  return JSON.stringify(
    GetIncidentTypeRequest$outboundSchema.parse(getIncidentTypeRequest),
  );
}

export function getIncidentTypeRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetIncidentTypeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetIncidentTypeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetIncidentTypeRequest' from JSON`,
  );
}
