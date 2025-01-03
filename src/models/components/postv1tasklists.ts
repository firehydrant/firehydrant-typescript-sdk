/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TaskListItems = {
  /**
   * A summary of the task
   */
  summary: string;
  /**
   * A long-form description for the task if additional context is helpful
   */
  description?: string | undefined;
};

/**
 * Creates a new task list
 */
export type PostV1TaskLists = {
  name: string;
  description?: string | undefined;
  taskListItems: Array<TaskListItems>;
};

/** @internal */
export const TaskListItems$inboundSchema: z.ZodType<
  TaskListItems,
  z.ZodTypeDef,
  unknown
> = z.object({
  summary: z.string(),
  description: z.string().optional(),
});

/** @internal */
export type TaskListItems$Outbound = {
  summary: string;
  description?: string | undefined;
};

/** @internal */
export const TaskListItems$outboundSchema: z.ZodType<
  TaskListItems$Outbound,
  z.ZodTypeDef,
  TaskListItems
> = z.object({
  summary: z.string(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskListItems$ {
  /** @deprecated use `TaskListItems$inboundSchema` instead. */
  export const inboundSchema = TaskListItems$inboundSchema;
  /** @deprecated use `TaskListItems$outboundSchema` instead. */
  export const outboundSchema = TaskListItems$outboundSchema;
  /** @deprecated use `TaskListItems$Outbound` instead. */
  export type Outbound = TaskListItems$Outbound;
}

export function taskListItemsToJSON(taskListItems: TaskListItems): string {
  return JSON.stringify(TaskListItems$outboundSchema.parse(taskListItems));
}

export function taskListItemsFromJSON(
  jsonString: string,
): SafeParseResult<TaskListItems, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaskListItems$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaskListItems' from JSON`,
  );
}

/** @internal */
export const PostV1TaskLists$inboundSchema: z.ZodType<
  PostV1TaskLists,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  task_list_items: z.array(z.lazy(() => TaskListItems$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "task_list_items": "taskListItems",
  });
});

/** @internal */
export type PostV1TaskLists$Outbound = {
  name: string;
  description?: string | undefined;
  task_list_items: Array<TaskListItems$Outbound>;
};

/** @internal */
export const PostV1TaskLists$outboundSchema: z.ZodType<
  PostV1TaskLists$Outbound,
  z.ZodTypeDef,
  PostV1TaskLists
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  taskListItems: z.array(z.lazy(() => TaskListItems$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    taskListItems: "task_list_items",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1TaskLists$ {
  /** @deprecated use `PostV1TaskLists$inboundSchema` instead. */
  export const inboundSchema = PostV1TaskLists$inboundSchema;
  /** @deprecated use `PostV1TaskLists$outboundSchema` instead. */
  export const outboundSchema = PostV1TaskLists$outboundSchema;
  /** @deprecated use `PostV1TaskLists$Outbound` instead. */
  export type Outbound = PostV1TaskLists$Outbound;
}

export function postV1TaskListsToJSON(
  postV1TaskLists: PostV1TaskLists,
): string {
  return JSON.stringify(PostV1TaskLists$outboundSchema.parse(postV1TaskLists));
}

export function postV1TaskListsFromJSON(
  jsonString: string,
): SafeParseResult<PostV1TaskLists, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1TaskLists$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1TaskLists' from JSON`,
  );
}
