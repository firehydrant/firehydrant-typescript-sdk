/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Marks an incident retrospective as published and emails all of the participants in the report the summary
 */
export type PostV1PostMortemsReportsReportIdPublish = {
  /**
   * An array of user IDs with whom to share the report
   */
  userIds?: Array<string> | undefined;
  /**
   * An array of team IDs with whom to share the report
   */
  teamIds?: Array<string> | undefined;
};

/** @internal */
export const PostV1PostMortemsReportsReportIdPublish$inboundSchema: z.ZodType<
  PostV1PostMortemsReportsReportIdPublish,
  z.ZodTypeDef,
  unknown
> = z.object({
  user_ids: z.array(z.string()).optional(),
  team_ids: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "user_ids": "userIds",
    "team_ids": "teamIds",
  });
});

/** @internal */
export type PostV1PostMortemsReportsReportIdPublish$Outbound = {
  user_ids?: Array<string> | undefined;
  team_ids?: Array<string> | undefined;
};

/** @internal */
export const PostV1PostMortemsReportsReportIdPublish$outboundSchema: z.ZodType<
  PostV1PostMortemsReportsReportIdPublish$Outbound,
  z.ZodTypeDef,
  PostV1PostMortemsReportsReportIdPublish
> = z.object({
  userIds: z.array(z.string()).optional(),
  teamIds: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    userIds: "user_ids",
    teamIds: "team_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1PostMortemsReportsReportIdPublish$ {
  /** @deprecated use `PostV1PostMortemsReportsReportIdPublish$inboundSchema` instead. */
  export const inboundSchema =
    PostV1PostMortemsReportsReportIdPublish$inboundSchema;
  /** @deprecated use `PostV1PostMortemsReportsReportIdPublish$outboundSchema` instead. */
  export const outboundSchema =
    PostV1PostMortemsReportsReportIdPublish$outboundSchema;
  /** @deprecated use `PostV1PostMortemsReportsReportIdPublish$Outbound` instead. */
  export type Outbound = PostV1PostMortemsReportsReportIdPublish$Outbound;
}

export function postV1PostMortemsReportsReportIdPublishToJSON(
  postV1PostMortemsReportsReportIdPublish:
    PostV1PostMortemsReportsReportIdPublish,
): string {
  return JSON.stringify(
    PostV1PostMortemsReportsReportIdPublish$outboundSchema.parse(
      postV1PostMortemsReportsReportIdPublish,
    ),
  );
}

export function postV1PostMortemsReportsReportIdPublishFromJSON(
  jsonString: string,
): SafeParseResult<
  PostV1PostMortemsReportsReportIdPublish,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1PostMortemsReportsReportIdPublish$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PostV1PostMortemsReportsReportIdPublish' from JSON`,
  );
}
