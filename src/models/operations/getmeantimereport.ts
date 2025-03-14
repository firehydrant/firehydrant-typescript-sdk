/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMeanTimeReportRequest = {
  /**
   * A comma separated list of environment IDs
   */
  environments?: string | undefined;
  /**
   * A comma separated list of team IDs
   */
  teams?: string | undefined;
  /**
   * A comma separated list of service IDs
   */
  services?: string | undefined;
  /**
   * Incident status
   */
  status?: string | undefined;
  /**
   * The start date to return incidents from
   */
  startDate?: RFCDate | undefined;
  /**
   * The end date to return incidents from
   */
  endDate?: RFCDate | undefined;
  /**
   * A text query for an incident that searches on name, summary, and desciption
   */
  query?: string | undefined;
  /**
   * The id of a previously saved search.
   */
  savedSearchId?: string | undefined;
  /**
   * A comma separated list of priorities
   */
  priorities?: string | undefined;
  /**
   * Flag for including incidents where priority has not been set
   */
  priorityNotSet?: boolean | undefined;
  /**
   * A comma separated list of severities
   */
  severities?: string | undefined;
  /**
   * Flag for including incidents where severity has not been set
   */
  severityNotSet?: boolean | undefined;
  /**
   * A comma separated list of current milestones
   */
  currentMilestones?: string | undefined;
};

/** @internal */
export const GetMeanTimeReportRequest$inboundSchema: z.ZodType<
  GetMeanTimeReportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  environments: z.string().optional(),
  teams: z.string().optional(),
  services: z.string().optional(),
  status: z.string().optional(),
  start_date: z.string().transform(v => new RFCDate(v)).optional(),
  end_date: z.string().transform(v => new RFCDate(v)).optional(),
  query: z.string().optional(),
  saved_search_id: z.string().optional(),
  priorities: z.string().optional(),
  priority_not_set: z.boolean().optional(),
  severities: z.string().optional(),
  severity_not_set: z.boolean().optional(),
  current_milestones: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "start_date": "startDate",
    "end_date": "endDate",
    "saved_search_id": "savedSearchId",
    "priority_not_set": "priorityNotSet",
    "severity_not_set": "severityNotSet",
    "current_milestones": "currentMilestones",
  });
});

/** @internal */
export type GetMeanTimeReportRequest$Outbound = {
  environments?: string | undefined;
  teams?: string | undefined;
  services?: string | undefined;
  status?: string | undefined;
  start_date?: string | undefined;
  end_date?: string | undefined;
  query?: string | undefined;
  saved_search_id?: string | undefined;
  priorities?: string | undefined;
  priority_not_set?: boolean | undefined;
  severities?: string | undefined;
  severity_not_set?: boolean | undefined;
  current_milestones?: string | undefined;
};

/** @internal */
export const GetMeanTimeReportRequest$outboundSchema: z.ZodType<
  GetMeanTimeReportRequest$Outbound,
  z.ZodTypeDef,
  GetMeanTimeReportRequest
> = z.object({
  environments: z.string().optional(),
  teams: z.string().optional(),
  services: z.string().optional(),
  status: z.string().optional(),
  startDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
  endDate: z.instanceof(RFCDate).transform(v => v.toString()).optional(),
  query: z.string().optional(),
  savedSearchId: z.string().optional(),
  priorities: z.string().optional(),
  priorityNotSet: z.boolean().optional(),
  severities: z.string().optional(),
  severityNotSet: z.boolean().optional(),
  currentMilestones: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    startDate: "start_date",
    endDate: "end_date",
    savedSearchId: "saved_search_id",
    priorityNotSet: "priority_not_set",
    severityNotSet: "severity_not_set",
    currentMilestones: "current_milestones",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMeanTimeReportRequest$ {
  /** @deprecated use `GetMeanTimeReportRequest$inboundSchema` instead. */
  export const inboundSchema = GetMeanTimeReportRequest$inboundSchema;
  /** @deprecated use `GetMeanTimeReportRequest$outboundSchema` instead. */
  export const outboundSchema = GetMeanTimeReportRequest$outboundSchema;
  /** @deprecated use `GetMeanTimeReportRequest$Outbound` instead. */
  export type Outbound = GetMeanTimeReportRequest$Outbound;
}

export function getMeanTimeReportRequestToJSON(
  getMeanTimeReportRequest: GetMeanTimeReportRequest,
): string {
  return JSON.stringify(
    GetMeanTimeReportRequest$outboundSchema.parse(getMeanTimeReportRequest),
  );
}

export function getMeanTimeReportRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMeanTimeReportRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMeanTimeReportRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMeanTimeReportRequest' from JSON`,
  );
}
