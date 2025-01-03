/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetServiceRequest = {
  serviceId: string;
};

/** @internal */
export const GetServiceRequest$inboundSchema: z.ZodType<
  GetServiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
  });
});

/** @internal */
export type GetServiceRequest$Outbound = {
  service_id: string;
};

/** @internal */
export const GetServiceRequest$outboundSchema: z.ZodType<
  GetServiceRequest$Outbound,
  z.ZodTypeDef,
  GetServiceRequest
> = z.object({
  serviceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServiceRequest$ {
  /** @deprecated use `GetServiceRequest$inboundSchema` instead. */
  export const inboundSchema = GetServiceRequest$inboundSchema;
  /** @deprecated use `GetServiceRequest$outboundSchema` instead. */
  export const outboundSchema = GetServiceRequest$outboundSchema;
  /** @deprecated use `GetServiceRequest$Outbound` instead. */
  export type Outbound = GetServiceRequest$Outbound;
}

export function getServiceRequestToJSON(
  getServiceRequest: GetServiceRequest,
): string {
  return JSON.stringify(
    GetServiceRequest$outboundSchema.parse(getServiceRequest),
  );
}

export function getServiceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetServiceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetServiceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetServiceRequest' from JSON`,
  );
}
