/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ServiceEntity,
  ServiceEntity$inboundSchema,
  ServiceEntity$Outbound,
  ServiceEntity$outboundSchema,
} from "./serviceentity.js";

export type ServiceParentDependencyEntity = {
  id?: string | undefined;
  notes?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  /**
   * ServiceEntity model
   */
  service?: ServiceEntity | undefined;
  type?: string | undefined;
};

/** @internal */
export const ServiceParentDependencyEntity$inboundSchema: z.ZodType<
  ServiceParentDependencyEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  notes: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  service: ServiceEntity$inboundSchema.optional(),
  type: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type ServiceParentDependencyEntity$Outbound = {
  id?: string | undefined;
  notes?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  service?: ServiceEntity$Outbound | undefined;
  type?: string | undefined;
};

/** @internal */
export const ServiceParentDependencyEntity$outboundSchema: z.ZodType<
  ServiceParentDependencyEntity$Outbound,
  z.ZodTypeDef,
  ServiceParentDependencyEntity
> = z.object({
  id: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  service: ServiceEntity$outboundSchema.optional(),
  type: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceParentDependencyEntity$ {
  /** @deprecated use `ServiceParentDependencyEntity$inboundSchema` instead. */
  export const inboundSchema = ServiceParentDependencyEntity$inboundSchema;
  /** @deprecated use `ServiceParentDependencyEntity$outboundSchema` instead. */
  export const outboundSchema = ServiceParentDependencyEntity$outboundSchema;
  /** @deprecated use `ServiceParentDependencyEntity$Outbound` instead. */
  export type Outbound = ServiceParentDependencyEntity$Outbound;
}

export function serviceParentDependencyEntityToJSON(
  serviceParentDependencyEntity: ServiceParentDependencyEntity,
): string {
  return JSON.stringify(
    ServiceParentDependencyEntity$outboundSchema.parse(
      serviceParentDependencyEntity,
    ),
  );
}

export function serviceParentDependencyEntityFromJSON(
  jsonString: string,
): SafeParseResult<ServiceParentDependencyEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ServiceParentDependencyEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ServiceParentDependencyEntity' from JSON`,
  );
}
