/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChecklistCheckEntity,
  ChecklistCheckEntity$inboundSchema,
  ChecklistCheckEntity$Outbound,
  ChecklistCheckEntity$outboundSchema,
} from "./checklistcheckentity.js";
import {
  ServiceEntityChecklist,
  ServiceEntityChecklist$inboundSchema,
  ServiceEntityChecklist$Outbound,
  ServiceEntityChecklist$outboundSchema,
} from "./serviceentitychecklist.js";
import {
  TeamEntityLite,
  TeamEntityLite$inboundSchema,
  TeamEntityLite$Outbound,
  TeamEntityLite$outboundSchema,
} from "./teamentitylite.js";

/**
 * ChecklistTemplateEntity model
 */
export type ChecklistTemplateEntity = {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: Date | undefined;
  checks?: Array<ChecklistCheckEntity> | undefined;
  owner?: TeamEntityLite | undefined;
  /**
   * List of services that use this checklist
   */
  connectedServices?: Array<ServiceEntityChecklist> | undefined;
};

/** @internal */
export const ChecklistTemplateEntity$inboundSchema: z.ZodType<
  ChecklistTemplateEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  checks: z.array(ChecklistCheckEntity$inboundSchema).optional(),
  owner: TeamEntityLite$inboundSchema.optional(),
  connected_services: z.array(ServiceEntityChecklist$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "connected_services": "connectedServices",
  });
});

/** @internal */
export type ChecklistTemplateEntity$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  checks?: Array<ChecklistCheckEntity$Outbound> | undefined;
  owner?: TeamEntityLite$Outbound | undefined;
  connected_services?: Array<ServiceEntityChecklist$Outbound> | undefined;
};

/** @internal */
export const ChecklistTemplateEntity$outboundSchema: z.ZodType<
  ChecklistTemplateEntity$Outbound,
  z.ZodTypeDef,
  ChecklistTemplateEntity
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  checks: z.array(ChecklistCheckEntity$outboundSchema).optional(),
  owner: TeamEntityLite$outboundSchema.optional(),
  connectedServices: z.array(ServiceEntityChecklist$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    connectedServices: "connected_services",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChecklistTemplateEntity$ {
  /** @deprecated use `ChecklistTemplateEntity$inboundSchema` instead. */
  export const inboundSchema = ChecklistTemplateEntity$inboundSchema;
  /** @deprecated use `ChecklistTemplateEntity$outboundSchema` instead. */
  export const outboundSchema = ChecklistTemplateEntity$outboundSchema;
  /** @deprecated use `ChecklistTemplateEntity$Outbound` instead. */
  export type Outbound = ChecklistTemplateEntity$Outbound;
}

export function checklistTemplateEntityToJSON(
  checklistTemplateEntity: ChecklistTemplateEntity,
): string {
  return JSON.stringify(
    ChecklistTemplateEntity$outboundSchema.parse(checklistTemplateEntity),
  );
}

export function checklistTemplateEntityFromJSON(
  jsonString: string,
): SafeParseResult<ChecklistTemplateEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChecklistTemplateEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChecklistTemplateEntity' from JSON`,
  );
}
