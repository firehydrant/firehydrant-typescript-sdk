/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IntegrationsConnectionEntity,
  IntegrationsConnectionEntity$inboundSchema,
  IntegrationsConnectionEntity$Outbound,
  IntegrationsConnectionEntity$outboundSchema,
} from "./integrationsconnectionentity.js";
import {
  IntegrationsIntegrationEntityLogoEntity,
  IntegrationsIntegrationEntityLogoEntity$inboundSchema,
  IntegrationsIntegrationEntityLogoEntity$Outbound,
  IntegrationsIntegrationEntityLogoEntity$outboundSchema,
} from "./integrationsintegrationentitylogoentity.js";

/**
 * Integrations_IntegrationEntity model
 */
export type IntegrationsIntegrationEntity = {
  id?: string | undefined;
  slug?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  setupUrl?: string | undefined;
  createdAt?: Date | undefined;
  connections?: IntegrationsConnectionEntity | undefined;
  enabled?: boolean | undefined;
  installed?: boolean | undefined;
  deprecated?: boolean | undefined;
  logo?: IntegrationsIntegrationEntityLogoEntity | undefined;
  natIp?: string | undefined;
};

/** @internal */
export const IntegrationsIntegrationEntity$inboundSchema: z.ZodType<
  IntegrationsIntegrationEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  setup_url: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  connections: IntegrationsConnectionEntity$inboundSchema.optional(),
  enabled: z.boolean().optional(),
  installed: z.boolean().optional(),
  deprecated: z.boolean().optional(),
  logo: IntegrationsIntegrationEntityLogoEntity$inboundSchema.optional(),
  nat_ip: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "setup_url": "setupUrl",
    "created_at": "createdAt",
    "nat_ip": "natIp",
  });
});

/** @internal */
export type IntegrationsIntegrationEntity$Outbound = {
  id?: string | undefined;
  slug?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  setup_url?: string | undefined;
  created_at?: string | undefined;
  connections?: IntegrationsConnectionEntity$Outbound | undefined;
  enabled?: boolean | undefined;
  installed?: boolean | undefined;
  deprecated?: boolean | undefined;
  logo?: IntegrationsIntegrationEntityLogoEntity$Outbound | undefined;
  nat_ip?: string | undefined;
};

/** @internal */
export const IntegrationsIntegrationEntity$outboundSchema: z.ZodType<
  IntegrationsIntegrationEntity$Outbound,
  z.ZodTypeDef,
  IntegrationsIntegrationEntity
> = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  setupUrl: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  connections: IntegrationsConnectionEntity$outboundSchema.optional(),
  enabled: z.boolean().optional(),
  installed: z.boolean().optional(),
  deprecated: z.boolean().optional(),
  logo: IntegrationsIntegrationEntityLogoEntity$outboundSchema.optional(),
  natIp: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    setupUrl: "setup_url",
    createdAt: "created_at",
    natIp: "nat_ip",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsIntegrationEntity$ {
  /** @deprecated use `IntegrationsIntegrationEntity$inboundSchema` instead. */
  export const inboundSchema = IntegrationsIntegrationEntity$inboundSchema;
  /** @deprecated use `IntegrationsIntegrationEntity$outboundSchema` instead. */
  export const outboundSchema = IntegrationsIntegrationEntity$outboundSchema;
  /** @deprecated use `IntegrationsIntegrationEntity$Outbound` instead. */
  export type Outbound = IntegrationsIntegrationEntity$Outbound;
}

export function integrationsIntegrationEntityToJSON(
  integrationsIntegrationEntity: IntegrationsIntegrationEntity,
): string {
  return JSON.stringify(
    IntegrationsIntegrationEntity$outboundSchema.parse(
      integrationsIntegrationEntity,
    ),
  );
}

export function integrationsIntegrationEntityFromJSON(
  jsonString: string,
): SafeParseResult<IntegrationsIntegrationEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IntegrationsIntegrationEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IntegrationsIntegrationEntity' from JSON`,
  );
}
