/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateStatusPageRequestBody = {
  companyName?: string | undefined;
  companyWebsite?: string | undefined;
  companyTosUrl?: string | undefined;
  greetingTitle?: string | undefined;
  greetingBody?: string | undefined;
  operationalMessage?: string | undefined;
  title?: string | undefined;
  /**
   * Status page condition to map your severity matrix condition to
   */
  conditionsNuncCondition: Array<string>;
  /**
   * Severity matrix condition id
   */
  conditionsConditionId: Array<string>;
  componentsInfrastructureType: Array<string>;
  componentsInfrastructureId: Array<string>;
  primaryColor?: string | undefined;
  secondaryColor?: string | undefined;
  exposedFields?: Array<string> | undefined;
  enableHistogram?: boolean | undefined;
  uiVersion?: number | undefined;
};

export type UpdateStatusPageRequest = {
  nuncConnectionId: string;
  requestBody: UpdateStatusPageRequestBody;
};

/** @internal */
export const UpdateStatusPageRequestBody$inboundSchema: z.ZodType<
  UpdateStatusPageRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_name: z.string().optional(),
  company_website: z.string().optional(),
  company_tos_url: z.string().optional(),
  greeting_title: z.string().optional(),
  greeting_body: z.string().optional(),
  operational_message: z.string().optional(),
  title: z.string().optional(),
  "conditions[nunc_condition]": z.array(z.string()),
  "conditions[condition_id]": z.array(z.string()),
  "components[infrastructure_type]": z.array(z.string()),
  "components[infrastructure_id]": z.array(z.string()),
  primary_color: z.string().optional(),
  secondary_color: z.string().optional(),
  exposed_fields: z.array(z.string()).optional(),
  enable_histogram: z.boolean().optional(),
  ui_version: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "company_name": "companyName",
    "company_website": "companyWebsite",
    "company_tos_url": "companyTosUrl",
    "greeting_title": "greetingTitle",
    "greeting_body": "greetingBody",
    "operational_message": "operationalMessage",
    "conditions[nunc_condition]": "conditionsNuncCondition",
    "conditions[condition_id]": "conditionsConditionId",
    "components[infrastructure_type]": "componentsInfrastructureType",
    "components[infrastructure_id]": "componentsInfrastructureId",
    "primary_color": "primaryColor",
    "secondary_color": "secondaryColor",
    "exposed_fields": "exposedFields",
    "enable_histogram": "enableHistogram",
    "ui_version": "uiVersion",
  });
});

/** @internal */
export type UpdateStatusPageRequestBody$Outbound = {
  company_name?: string | undefined;
  company_website?: string | undefined;
  company_tos_url?: string | undefined;
  greeting_title?: string | undefined;
  greeting_body?: string | undefined;
  operational_message?: string | undefined;
  title?: string | undefined;
  "conditions[nunc_condition]": Array<string>;
  "conditions[condition_id]": Array<string>;
  "components[infrastructure_type]": Array<string>;
  "components[infrastructure_id]": Array<string>;
  primary_color?: string | undefined;
  secondary_color?: string | undefined;
  exposed_fields?: Array<string> | undefined;
  enable_histogram?: boolean | undefined;
  ui_version?: number | undefined;
};

/** @internal */
export const UpdateStatusPageRequestBody$outboundSchema: z.ZodType<
  UpdateStatusPageRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateStatusPageRequestBody
> = z.object({
  companyName: z.string().optional(),
  companyWebsite: z.string().optional(),
  companyTosUrl: z.string().optional(),
  greetingTitle: z.string().optional(),
  greetingBody: z.string().optional(),
  operationalMessage: z.string().optional(),
  title: z.string().optional(),
  conditionsNuncCondition: z.array(z.string()),
  conditionsConditionId: z.array(z.string()),
  componentsInfrastructureType: z.array(z.string()),
  componentsInfrastructureId: z.array(z.string()),
  primaryColor: z.string().optional(),
  secondaryColor: z.string().optional(),
  exposedFields: z.array(z.string()).optional(),
  enableHistogram: z.boolean().optional(),
  uiVersion: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    companyName: "company_name",
    companyWebsite: "company_website",
    companyTosUrl: "company_tos_url",
    greetingTitle: "greeting_title",
    greetingBody: "greeting_body",
    operationalMessage: "operational_message",
    conditionsNuncCondition: "conditions[nunc_condition]",
    conditionsConditionId: "conditions[condition_id]",
    componentsInfrastructureType: "components[infrastructure_type]",
    componentsInfrastructureId: "components[infrastructure_id]",
    primaryColor: "primary_color",
    secondaryColor: "secondary_color",
    exposedFields: "exposed_fields",
    enableHistogram: "enable_histogram",
    uiVersion: "ui_version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStatusPageRequestBody$ {
  /** @deprecated use `UpdateStatusPageRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateStatusPageRequestBody$inboundSchema;
  /** @deprecated use `UpdateStatusPageRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateStatusPageRequestBody$outboundSchema;
  /** @deprecated use `UpdateStatusPageRequestBody$Outbound` instead. */
  export type Outbound = UpdateStatusPageRequestBody$Outbound;
}

export function updateStatusPageRequestBodyToJSON(
  updateStatusPageRequestBody: UpdateStatusPageRequestBody,
): string {
  return JSON.stringify(
    UpdateStatusPageRequestBody$outboundSchema.parse(
      updateStatusPageRequestBody,
    ),
  );
}

export function updateStatusPageRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateStatusPageRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateStatusPageRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateStatusPageRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateStatusPageRequest$inboundSchema: z.ZodType<
  UpdateStatusPageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  nunc_connection_id: z.string(),
  RequestBody: z.lazy(() => UpdateStatusPageRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "nunc_connection_id": "nuncConnectionId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateStatusPageRequest$Outbound = {
  nunc_connection_id: string;
  RequestBody: UpdateStatusPageRequestBody$Outbound;
};

/** @internal */
export const UpdateStatusPageRequest$outboundSchema: z.ZodType<
  UpdateStatusPageRequest$Outbound,
  z.ZodTypeDef,
  UpdateStatusPageRequest
> = z.object({
  nuncConnectionId: z.string(),
  requestBody: z.lazy(() => UpdateStatusPageRequestBody$outboundSchema),
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
export namespace UpdateStatusPageRequest$ {
  /** @deprecated use `UpdateStatusPageRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateStatusPageRequest$inboundSchema;
  /** @deprecated use `UpdateStatusPageRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateStatusPageRequest$outboundSchema;
  /** @deprecated use `UpdateStatusPageRequest$Outbound` instead. */
  export type Outbound = UpdateStatusPageRequest$Outbound;
}

export function updateStatusPageRequestToJSON(
  updateStatusPageRequest: UpdateStatusPageRequest,
): string {
  return JSON.stringify(
    UpdateStatusPageRequest$outboundSchema.parse(updateStatusPageRequest),
  );
}

export function updateStatusPageRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateStatusPageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateStatusPageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateStatusPageRequest' from JSON`,
  );
}
