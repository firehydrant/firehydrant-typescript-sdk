/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteServiceLinkRequest = {
  serviceId: string;
  /**
   * The external service ID which can be found in the JSON
   *
   * @remarks
   * from GET services/:service_id endpoint under
   * functionalities > external_resources > remote_id
   */
  remoteId: string;
};

/** @internal */
export const DeleteServiceLinkRequest$inboundSchema: z.ZodType<
  DeleteServiceLinkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  remote_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "remote_id": "remoteId",
  });
});

/** @internal */
export type DeleteServiceLinkRequest$Outbound = {
  service_id: string;
  remote_id: string;
};

/** @internal */
export const DeleteServiceLinkRequest$outboundSchema: z.ZodType<
  DeleteServiceLinkRequest$Outbound,
  z.ZodTypeDef,
  DeleteServiceLinkRequest
> = z.object({
  serviceId: z.string(),
  remoteId: z.string(),
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteServiceLinkRequest$ {
  /** @deprecated use `DeleteServiceLinkRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteServiceLinkRequest$inboundSchema;
  /** @deprecated use `DeleteServiceLinkRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteServiceLinkRequest$outboundSchema;
  /** @deprecated use `DeleteServiceLinkRequest$Outbound` instead. */
  export type Outbound = DeleteServiceLinkRequest$Outbound;
}

export function deleteServiceLinkRequestToJSON(
  deleteServiceLinkRequest: DeleteServiceLinkRequest,
): string {
  return JSON.stringify(
    DeleteServiceLinkRequest$outboundSchema.parse(deleteServiceLinkRequest),
  );
}

export function deleteServiceLinkRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteServiceLinkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteServiceLinkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteServiceLinkRequest' from JSON`,
  );
}
