/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Create a task
 */
export type PostV1IncidentsIncidentIdTasks = {
  /**
   * The title of the task.
   */
  title: string;
  /**
   * The state of the task. One of: open, in_progress, cancelled, done
   */
  state?: string | undefined;
  /**
   * A description of what the task is for.
   */
  description?: string | undefined;
  /**
   * The ID of the user assigned to the task.
   */
  assigneeId?: string | undefined;
  /**
   * The due date of the task. Relative values are supported such as '5m'
   */
  dueAt?: string | undefined;
};

/** @internal */
export const PostV1IncidentsIncidentIdTasks$inboundSchema: z.ZodType<
  PostV1IncidentsIncidentIdTasks,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string(),
  state: z.string().optional(),
  description: z.string().optional(),
  assignee_id: z.string().optional(),
  due_at: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "assignee_id": "assigneeId",
    "due_at": "dueAt",
  });
});

/** @internal */
export type PostV1IncidentsIncidentIdTasks$Outbound = {
  title: string;
  state?: string | undefined;
  description?: string | undefined;
  assignee_id?: string | undefined;
  due_at?: string | undefined;
};

/** @internal */
export const PostV1IncidentsIncidentIdTasks$outboundSchema: z.ZodType<
  PostV1IncidentsIncidentIdTasks$Outbound,
  z.ZodTypeDef,
  PostV1IncidentsIncidentIdTasks
> = z.object({
  title: z.string(),
  state: z.string().optional(),
  description: z.string().optional(),
  assigneeId: z.string().optional(),
  dueAt: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    assigneeId: "assignee_id",
    dueAt: "due_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1IncidentsIncidentIdTasks$ {
  /** @deprecated use `PostV1IncidentsIncidentIdTasks$inboundSchema` instead. */
  export const inboundSchema = PostV1IncidentsIncidentIdTasks$inboundSchema;
  /** @deprecated use `PostV1IncidentsIncidentIdTasks$outboundSchema` instead. */
  export const outboundSchema = PostV1IncidentsIncidentIdTasks$outboundSchema;
  /** @deprecated use `PostV1IncidentsIncidentIdTasks$Outbound` instead. */
  export type Outbound = PostV1IncidentsIncidentIdTasks$Outbound;
}

export function postV1IncidentsIncidentIdTasksToJSON(
  postV1IncidentsIncidentIdTasks: PostV1IncidentsIncidentIdTasks,
): string {
  return JSON.stringify(
    PostV1IncidentsIncidentIdTasks$outboundSchema.parse(
      postV1IncidentsIncidentIdTasks,
    ),
  );
}

export function postV1IncidentsIncidentIdTasksFromJSON(
  jsonString: string,
): SafeParseResult<PostV1IncidentsIncidentIdTasks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1IncidentsIncidentIdTasks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1IncidentsIncidentIdTasks' from JSON`,
  );
}
