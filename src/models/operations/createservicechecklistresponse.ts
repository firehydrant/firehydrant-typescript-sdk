/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateServiceChecklistResponseRequest = {
  serviceId: string;
  checklistId: string;
  postV1ServicesServiceIdChecklistResponseChecklistId:
    components.PostV1ServicesServiceIdChecklistResponseChecklistId;
};

/** @internal */
export const CreateServiceChecklistResponseRequest$inboundSchema: z.ZodType<
  CreateServiceChecklistResponseRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  checklist_id: z.string(),
  postV1ServicesServiceIdChecklistResponseChecklistId:
    components
      .PostV1ServicesServiceIdChecklistResponseChecklistId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "checklist_id": "checklistId",
  });
});

/** @internal */
export type CreateServiceChecklistResponseRequest$Outbound = {
  service_id: string;
  checklist_id: string;
  postV1ServicesServiceIdChecklistResponseChecklistId:
    components.PostV1ServicesServiceIdChecklistResponseChecklistId$Outbound;
};

/** @internal */
export const CreateServiceChecklistResponseRequest$outboundSchema: z.ZodType<
  CreateServiceChecklistResponseRequest$Outbound,
  z.ZodTypeDef,
  CreateServiceChecklistResponseRequest
> = z.object({
  serviceId: z.string(),
  checklistId: z.string(),
  postV1ServicesServiceIdChecklistResponseChecklistId:
    components
      .PostV1ServicesServiceIdChecklistResponseChecklistId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    checklistId: "checklist_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateServiceChecklistResponseRequest$ {
  /** @deprecated use `CreateServiceChecklistResponseRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateServiceChecklistResponseRequest$inboundSchema;
  /** @deprecated use `CreateServiceChecklistResponseRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateServiceChecklistResponseRequest$outboundSchema;
  /** @deprecated use `CreateServiceChecklistResponseRequest$Outbound` instead. */
  export type Outbound = CreateServiceChecklistResponseRequest$Outbound;
}

export function createServiceChecklistResponseRequestToJSON(
  createServiceChecklistResponseRequest: CreateServiceChecklistResponseRequest,
): string {
  return JSON.stringify(
    CreateServiceChecklistResponseRequest$outboundSchema.parse(
      createServiceChecklistResponseRequest,
    ),
  );
}

export function createServiceChecklistResponseRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateServiceChecklistResponseRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateServiceChecklistResponseRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateServiceChecklistResponseRequest' from JSON`,
  );
}
