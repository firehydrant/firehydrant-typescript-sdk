/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PathParamInfraType = {
  Environments: "environments",
  Functionalities: "functionalities",
  Services: "services",
  Customers: "customers",
} as const;
export type PathParamInfraType = ClosedEnum<typeof PathParamInfraType>;

export type GetInfrastructureMetricsRequest = {
  infraType: PathParamInfraType;
  /**
   * Component UUID
   */
  infraId: string;
  /**
   * The start date to return metrics from; defaults to 30 days ago
   */
  startDate?: RFCDate | undefined;
  /**
   * The end date to return metrics from, defaults to today
   */
  endDate?: RFCDate | undefined;
};

/** @internal */
export const PathParamInfraType$inboundSchema: z.ZodNativeEnum<
  typeof PathParamInfraType
> = z.nativeEnum(PathParamInfraType);

/** @internal */
export const PathParamInfraType$outboundSchema: z.ZodNativeEnum<
  typeof PathParamInfraType
> = PathParamInfraType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PathParamInfraType$ {
  /** @deprecated use `PathParamInfraType$inboundSchema` instead. */
  export const inboundSchema = PathParamInfraType$inboundSchema;
  /** @deprecated use `PathParamInfraType$outboundSchema` instead. */
  export const outboundSchema = PathParamInfraType$outboundSchema;
}

/** @internal */
export const GetInfrastructureMetricsRequest$inboundSchema: z.ZodType<
  GetInfrastructureMetricsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  infra_type: PathParamInfraType$inboundSchema,
  infra_id: z.string(),
  start_date: z.string().transform(v => new RFCDate(v)).optional(),
  end_date: z.string().transform(v => new RFCDate(v)).optional(),
}).transform((v) => {
  return remap$(v, {
    "infra_type": "infraType",
    "infra_id": "infraId",
    "start_date": "startDate",
    "end_date": "endDate",
  });
});

/** @internal */
export type GetInfrastructureMetricsRequest$Outbound = {
  infra_type: string;
  infra_id: string;
  start_date?: string | undefined;
  end_date?: string | undefined;
};

/** @internal */
export const GetInfrastructureMetricsRequest$outboundSchema: z.ZodType<
  GetInfrastructureMetricsRequest$Outbound,
  z.ZodTypeDef,
  GetInfrastructureMetricsRequest
> = z.object({
  infraType: PathParamInfraType$outboundSchema,
  infraId: z.string(),
  startDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
  endDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
}).transform((v) => {
  return remap$(v, {
    infraType: "infra_type",
    infraId: "infra_id",
    startDate: "start_date",
    endDate: "end_date",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInfrastructureMetricsRequest$ {
  /** @deprecated use `GetInfrastructureMetricsRequest$inboundSchema` instead. */
  export const inboundSchema = GetInfrastructureMetricsRequest$inboundSchema;
  /** @deprecated use `GetInfrastructureMetricsRequest$outboundSchema` instead. */
  export const outboundSchema = GetInfrastructureMetricsRequest$outboundSchema;
  /** @deprecated use `GetInfrastructureMetricsRequest$Outbound` instead. */
  export type Outbound = GetInfrastructureMetricsRequest$Outbound;
}

export function getInfrastructureMetricsRequestToJSON(
  getInfrastructureMetricsRequest: GetInfrastructureMetricsRequest,
): string {
  return JSON.stringify(
    GetInfrastructureMetricsRequest$outboundSchema.parse(
      getInfrastructureMetricsRequest,
    ),
  );
}

export function getInfrastructureMetricsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetInfrastructureMetricsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInfrastructureMetricsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInfrastructureMetricsRequest' from JSON`,
  );
}
