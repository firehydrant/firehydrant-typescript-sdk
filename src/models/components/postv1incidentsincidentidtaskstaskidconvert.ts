/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Convert a task to a follow-up
 */
export type PostV1IncidentsIncidentIdTasksTaskIdConvert = {
  summary?: string | undefined;
  projectId?: string | undefined;
  description?: string | undefined;
  state?: string | undefined;
  /**
   * List of tags for the ticket
   */
  tagList?: Array<string> | undefined;
};

/** @internal */
export const PostV1IncidentsIncidentIdTasksTaskIdConvert$inboundSchema:
  z.ZodType<
    PostV1IncidentsIncidentIdTasksTaskIdConvert,
    z.ZodTypeDef,
    unknown
  > = z.object({
    summary: z.string().optional(),
    project_id: z.string().optional(),
    description: z.string().optional(),
    state: z.string().optional(),
    tag_list: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "project_id": "projectId",
      "tag_list": "tagList",
    });
  });

/** @internal */
export type PostV1IncidentsIncidentIdTasksTaskIdConvert$Outbound = {
  summary?: string | undefined;
  project_id?: string | undefined;
  description?: string | undefined;
  state?: string | undefined;
  tag_list?: Array<string> | undefined;
};

/** @internal */
export const PostV1IncidentsIncidentIdTasksTaskIdConvert$outboundSchema:
  z.ZodType<
    PostV1IncidentsIncidentIdTasksTaskIdConvert$Outbound,
    z.ZodTypeDef,
    PostV1IncidentsIncidentIdTasksTaskIdConvert
  > = z.object({
    summary: z.string().optional(),
    projectId: z.string().optional(),
    description: z.string().optional(),
    state: z.string().optional(),
    tagList: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      projectId: "project_id",
      tagList: "tag_list",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1IncidentsIncidentIdTasksTaskIdConvert$ {
  /** @deprecated use `PostV1IncidentsIncidentIdTasksTaskIdConvert$inboundSchema` instead. */
  export const inboundSchema =
    PostV1IncidentsIncidentIdTasksTaskIdConvert$inboundSchema;
  /** @deprecated use `PostV1IncidentsIncidentIdTasksTaskIdConvert$outboundSchema` instead. */
  export const outboundSchema =
    PostV1IncidentsIncidentIdTasksTaskIdConvert$outboundSchema;
  /** @deprecated use `PostV1IncidentsIncidentIdTasksTaskIdConvert$Outbound` instead. */
  export type Outbound = PostV1IncidentsIncidentIdTasksTaskIdConvert$Outbound;
}

export function postV1IncidentsIncidentIdTasksTaskIdConvertToJSON(
  postV1IncidentsIncidentIdTasksTaskIdConvert:
    PostV1IncidentsIncidentIdTasksTaskIdConvert,
): string {
  return JSON.stringify(
    PostV1IncidentsIncidentIdTasksTaskIdConvert$outboundSchema.parse(
      postV1IncidentsIncidentIdTasksTaskIdConvert,
    ),
  );
}

export function postV1IncidentsIncidentIdTasksTaskIdConvertFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1IncidentsIncidentIdTasksTaskIdConvert,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1IncidentsIncidentIdTasksTaskIdConvert$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1IncidentsIncidentIdTasksTaskIdConvert' from JSON`,
  );
}
