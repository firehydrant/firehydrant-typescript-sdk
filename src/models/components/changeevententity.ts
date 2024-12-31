/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AuthorEntity,
  AuthorEntity$inboundSchema,
  AuthorEntity$Outbound,
  AuthorEntity$outboundSchema,
} from "./authorentity.js";
import {
  ChangeEntity,
  ChangeEntity$inboundSchema,
  ChangeEntity$Outbound,
  ChangeEntity$outboundSchema,
} from "./changeentity.js";
import {
  ChangeIdentityEntity,
  ChangeIdentityEntity$inboundSchema,
  ChangeIdentityEntity$Outbound,
  ChangeIdentityEntity$outboundSchema,
} from "./changeidentityentity.js";
import {
  EnvironmentEntryEntity,
  EnvironmentEntryEntity$inboundSchema,
  EnvironmentEntryEntity$Outbound,
  EnvironmentEntryEntity$outboundSchema,
} from "./environmententryentity.js";
import {
  ServiceEntityLite,
  ServiceEntityLite$inboundSchema,
  ServiceEntityLite$Outbound,
  ServiceEntityLite$outboundSchema,
} from "./serviceentitylite.js";

export type ChangeEventEntityAttachments = {};

/**
 * An object of label key and values
 */
export type ChangeEventEntityLabels = {};

/**
 * ChangeEventEntity model
 */
export type ChangeEventEntity = {
  id?: string | undefined;
  summary?: string | undefined;
  description?: string | undefined;
  externalId?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  startsAt?: Date | undefined;
  endsAt?: Date | null | undefined;
  durationMs?: number | null | undefined;
  durationIso8601?: string | null | undefined;
  environments?: Array<EnvironmentEntryEntity> | undefined;
  relatedChanges?: Array<ChangeEntity> | undefined;
  identities?: Array<ChangeIdentityEntity> | undefined;
  authors?: Array<AuthorEntity> | undefined;
  /**
   * A list of objects attached to this item. Can be one of: LinkEntity, CustomerSupportIssueEntity, or GenericAttachmentEntity
   */
  attachments?: Array<ChangeEventEntityAttachments> | undefined;
  /**
   * An object of label key and values
   */
  labels?: ChangeEventEntityLabels | undefined;
  services?: Array<ServiceEntityLite> | undefined;
};

/** @internal */
export const ChangeEventEntityAttachments$inboundSchema: z.ZodType<
  ChangeEventEntityAttachments,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ChangeEventEntityAttachments$Outbound = {};

/** @internal */
export const ChangeEventEntityAttachments$outboundSchema: z.ZodType<
  ChangeEventEntityAttachments$Outbound,
  z.ZodTypeDef,
  ChangeEventEntityAttachments
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeEventEntityAttachments$ {
  /** @deprecated use `ChangeEventEntityAttachments$inboundSchema` instead. */
  export const inboundSchema = ChangeEventEntityAttachments$inboundSchema;
  /** @deprecated use `ChangeEventEntityAttachments$outboundSchema` instead. */
  export const outboundSchema = ChangeEventEntityAttachments$outboundSchema;
  /** @deprecated use `ChangeEventEntityAttachments$Outbound` instead. */
  export type Outbound = ChangeEventEntityAttachments$Outbound;
}

export function changeEventEntityAttachmentsToJSON(
  changeEventEntityAttachments: ChangeEventEntityAttachments,
): string {
  return JSON.stringify(
    ChangeEventEntityAttachments$outboundSchema.parse(
      changeEventEntityAttachments,
    ),
  );
}

export function changeEventEntityAttachmentsFromJSON(
  jsonString: string,
): SafeParseResult<ChangeEventEntityAttachments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChangeEventEntityAttachments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChangeEventEntityAttachments' from JSON`,
  );
}

/** @internal */
export const ChangeEventEntityLabels$inboundSchema: z.ZodType<
  ChangeEventEntityLabels,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ChangeEventEntityLabels$Outbound = {};

/** @internal */
export const ChangeEventEntityLabels$outboundSchema: z.ZodType<
  ChangeEventEntityLabels$Outbound,
  z.ZodTypeDef,
  ChangeEventEntityLabels
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeEventEntityLabels$ {
  /** @deprecated use `ChangeEventEntityLabels$inboundSchema` instead. */
  export const inboundSchema = ChangeEventEntityLabels$inboundSchema;
  /** @deprecated use `ChangeEventEntityLabels$outboundSchema` instead. */
  export const outboundSchema = ChangeEventEntityLabels$outboundSchema;
  /** @deprecated use `ChangeEventEntityLabels$Outbound` instead. */
  export type Outbound = ChangeEventEntityLabels$Outbound;
}

export function changeEventEntityLabelsToJSON(
  changeEventEntityLabels: ChangeEventEntityLabels,
): string {
  return JSON.stringify(
    ChangeEventEntityLabels$outboundSchema.parse(changeEventEntityLabels),
  );
}

export function changeEventEntityLabelsFromJSON(
  jsonString: string,
): SafeParseResult<ChangeEventEntityLabels, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChangeEventEntityLabels$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChangeEventEntityLabels' from JSON`,
  );
}

/** @internal */
export const ChangeEventEntity$inboundSchema: z.ZodType<
  ChangeEventEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  external_id: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  starts_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  ends_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  duration_ms: z.nullable(z.number().int()).optional(),
  duration_iso8601: z.nullable(z.string()).optional(),
  environments: z.array(EnvironmentEntryEntity$inboundSchema).optional(),
  related_changes: z.array(ChangeEntity$inboundSchema).optional(),
  identities: z.array(ChangeIdentityEntity$inboundSchema).optional(),
  authors: z.array(AuthorEntity$inboundSchema).optional(),
  attachments: z.array(z.lazy(() => ChangeEventEntityAttachments$inboundSchema))
    .optional(),
  labels: z.lazy(() => ChangeEventEntityLabels$inboundSchema).optional(),
  services: z.array(ServiceEntityLite$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "starts_at": "startsAt",
    "ends_at": "endsAt",
    "duration_ms": "durationMs",
    "duration_iso8601": "durationIso8601",
    "related_changes": "relatedChanges",
  });
});

/** @internal */
export type ChangeEventEntity$Outbound = {
  id?: string | undefined;
  summary?: string | undefined;
  description?: string | undefined;
  external_id?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  starts_at?: string | undefined;
  ends_at?: string | null | undefined;
  duration_ms?: number | null | undefined;
  duration_iso8601?: string | null | undefined;
  environments?: Array<EnvironmentEntryEntity$Outbound> | undefined;
  related_changes?: Array<ChangeEntity$Outbound> | undefined;
  identities?: Array<ChangeIdentityEntity$Outbound> | undefined;
  authors?: Array<AuthorEntity$Outbound> | undefined;
  attachments?: Array<ChangeEventEntityAttachments$Outbound> | undefined;
  labels?: ChangeEventEntityLabels$Outbound | undefined;
  services?: Array<ServiceEntityLite$Outbound> | undefined;
};

/** @internal */
export const ChangeEventEntity$outboundSchema: z.ZodType<
  ChangeEventEntity$Outbound,
  z.ZodTypeDef,
  ChangeEventEntity
> = z.object({
  id: z.string().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  externalId: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()).optional(),
  startsAt: z.date().transform(v => v.toISOString()).optional(),
  endsAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  durationMs: z.nullable(z.number().int()).optional(),
  durationIso8601: z.nullable(z.string()).optional(),
  environments: z.array(EnvironmentEntryEntity$outboundSchema).optional(),
  relatedChanges: z.array(ChangeEntity$outboundSchema).optional(),
  identities: z.array(ChangeIdentityEntity$outboundSchema).optional(),
  authors: z.array(AuthorEntity$outboundSchema).optional(),
  attachments: z.array(
    z.lazy(() => ChangeEventEntityAttachments$outboundSchema),
  ).optional(),
  labels: z.lazy(() => ChangeEventEntityLabels$outboundSchema).optional(),
  services: z.array(ServiceEntityLite$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    startsAt: "starts_at",
    endsAt: "ends_at",
    durationMs: "duration_ms",
    durationIso8601: "duration_iso8601",
    relatedChanges: "related_changes",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeEventEntity$ {
  /** @deprecated use `ChangeEventEntity$inboundSchema` instead. */
  export const inboundSchema = ChangeEventEntity$inboundSchema;
  /** @deprecated use `ChangeEventEntity$outboundSchema` instead. */
  export const outboundSchema = ChangeEventEntity$outboundSchema;
  /** @deprecated use `ChangeEventEntity$Outbound` instead. */
  export type Outbound = ChangeEventEntity$Outbound;
}

export function changeEventEntityToJSON(
  changeEventEntity: ChangeEventEntity,
): string {
  return JSON.stringify(
    ChangeEventEntity$outboundSchema.parse(changeEventEntity),
  );
}

export function changeEventEntityFromJSON(
  jsonString: string,
): SafeParseResult<ChangeEventEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChangeEventEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChangeEventEntity' from JSON`,
  );
}
