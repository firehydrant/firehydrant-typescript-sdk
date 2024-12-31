/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateStatusPageSubscribersRequestBody = {
  /**
   * A comma-separated list of emails to subscribe.
   */
  emails: string;
};

export type CreateStatusPageSubscribersRequest = {
  nuncConnectionId: string;
  requestBody: CreateStatusPageSubscribersRequestBody;
};

/** @internal */
export const CreateStatusPageSubscribersRequestBody$inboundSchema: z.ZodType<
  CreateStatusPageSubscribersRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  emails: z.string(),
});

/** @internal */
export type CreateStatusPageSubscribersRequestBody$Outbound = {
  emails: string;
};

/** @internal */
export const CreateStatusPageSubscribersRequestBody$outboundSchema: z.ZodType<
  CreateStatusPageSubscribersRequestBody$Outbound,
  z.ZodTypeDef,
  CreateStatusPageSubscribersRequestBody
> = z.object({
  emails: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateStatusPageSubscribersRequestBody$ {
  /** @deprecated use `CreateStatusPageSubscribersRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateStatusPageSubscribersRequestBody$inboundSchema;
  /** @deprecated use `CreateStatusPageSubscribersRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateStatusPageSubscribersRequestBody$outboundSchema;
  /** @deprecated use `CreateStatusPageSubscribersRequestBody$Outbound` instead. */
  export type Outbound = CreateStatusPageSubscribersRequestBody$Outbound;
}

export function createStatusPageSubscribersRequestBodyToJSON(
  createStatusPageSubscribersRequestBody:
    CreateStatusPageSubscribersRequestBody,
): string {
  return JSON.stringify(
    CreateStatusPageSubscribersRequestBody$outboundSchema.parse(
      createStatusPageSubscribersRequestBody,
    ),
  );
}

export function createStatusPageSubscribersRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateStatusPageSubscribersRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateStatusPageSubscribersRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateStatusPageSubscribersRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateStatusPageSubscribersRequest$inboundSchema: z.ZodType<
  CreateStatusPageSubscribersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  nunc_connection_id: z.string(),
  RequestBody: z.lazy(() =>
    CreateStatusPageSubscribersRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "nunc_connection_id": "nuncConnectionId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateStatusPageSubscribersRequest$Outbound = {
  nunc_connection_id: string;
  RequestBody: CreateStatusPageSubscribersRequestBody$Outbound;
};

/** @internal */
export const CreateStatusPageSubscribersRequest$outboundSchema: z.ZodType<
  CreateStatusPageSubscribersRequest$Outbound,
  z.ZodTypeDef,
  CreateStatusPageSubscribersRequest
> = z.object({
  nuncConnectionId: z.string(),
  requestBody: z.lazy(() =>
    CreateStatusPageSubscribersRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    nuncConnectionId: "nunc_connection_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateStatusPageSubscribersRequest$ {
  /** @deprecated use `CreateStatusPageSubscribersRequest$inboundSchema` instead. */
  export const inboundSchema = CreateStatusPageSubscribersRequest$inboundSchema;
  /** @deprecated use `CreateStatusPageSubscribersRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateStatusPageSubscribersRequest$outboundSchema;
  /** @deprecated use `CreateStatusPageSubscribersRequest$Outbound` instead. */
  export type Outbound = CreateStatusPageSubscribersRequest$Outbound;
}

export function createStatusPageSubscribersRequestToJSON(
  createStatusPageSubscribersRequest: CreateStatusPageSubscribersRequest,
): string {
  return JSON.stringify(
    CreateStatusPageSubscribersRequest$outboundSchema.parse(
      createStatusPageSubscribersRequest,
    ),
  );
}

export function createStatusPageSubscribersRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateStatusPageSubscribersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateStatusPageSubscribersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateStatusPageSubscribersRequest' from JSON`,
  );
}
