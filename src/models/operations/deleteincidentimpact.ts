/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const DeleteIncidentImpactPathParamType = {
  Environments: "environments",
  Functionalities: "functionalities",
  Services: "services",
  Customers: "customers",
} as const;
export type DeleteIncidentImpactPathParamType = ClosedEnum<
  typeof DeleteIncidentImpactPathParamType
>;

export type DeleteIncidentImpactRequest = {
  incidentId: string;
  type: DeleteIncidentImpactPathParamType;
  id: string;
};

/** @internal */
export const DeleteIncidentImpactPathParamType$inboundSchema: z.ZodNativeEnum<
  typeof DeleteIncidentImpactPathParamType
> = z.nativeEnum(DeleteIncidentImpactPathParamType);

/** @internal */
export const DeleteIncidentImpactPathParamType$outboundSchema: z.ZodNativeEnum<
  typeof DeleteIncidentImpactPathParamType
> = DeleteIncidentImpactPathParamType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteIncidentImpactPathParamType$ {
  /** @deprecated use `DeleteIncidentImpactPathParamType$inboundSchema` instead. */
  export const inboundSchema = DeleteIncidentImpactPathParamType$inboundSchema;
  /** @deprecated use `DeleteIncidentImpactPathParamType$outboundSchema` instead. */
  export const outboundSchema =
    DeleteIncidentImpactPathParamType$outboundSchema;
}

/** @internal */
export const DeleteIncidentImpactRequest$inboundSchema: z.ZodType<
  DeleteIncidentImpactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_id: z.string(),
  type: DeleteIncidentImpactPathParamType$inboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "incident_id": "incidentId",
  });
});

/** @internal */
export type DeleteIncidentImpactRequest$Outbound = {
  incident_id: string;
  type: string;
  id: string;
};

/** @internal */
export const DeleteIncidentImpactRequest$outboundSchema: z.ZodType<
  DeleteIncidentImpactRequest$Outbound,
  z.ZodTypeDef,
  DeleteIncidentImpactRequest
> = z.object({
  incidentId: z.string(),
  type: DeleteIncidentImpactPathParamType$outboundSchema,
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    incidentId: "incident_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteIncidentImpactRequest$ {
  /** @deprecated use `DeleteIncidentImpactRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteIncidentImpactRequest$inboundSchema;
  /** @deprecated use `DeleteIncidentImpactRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteIncidentImpactRequest$outboundSchema;
  /** @deprecated use `DeleteIncidentImpactRequest$Outbound` instead. */
  export type Outbound = DeleteIncidentImpactRequest$Outbound;
}

export function deleteIncidentImpactRequestToJSON(
  deleteIncidentImpactRequest: DeleteIncidentImpactRequest,
): string {
  return JSON.stringify(
    DeleteIncidentImpactRequest$outboundSchema.parse(
      deleteIncidentImpactRequest,
    ),
  );
}

export function deleteIncidentImpactRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteIncidentImpactRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteIncidentImpactRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteIncidentImpactRequest' from JSON`,
  );
}
