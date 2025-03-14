/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaginationEntity,
  PaginationEntity$inboundSchema,
  PaginationEntity$Outbound,
  PaginationEntity$outboundSchema,
} from "./paginationentity.js";
import {
  TaskEntity,
  TaskEntity$inboundSchema,
  TaskEntity$Outbound,
  TaskEntity$outboundSchema,
} from "./taskentity.js";

/**
 * TaskEntityPaginated model
 */
export type TaskEntityPaginated = {
  data?: Array<TaskEntity> | undefined;
  pagination?: PaginationEntity | undefined;
};

/** @internal */
export const TaskEntityPaginated$inboundSchema: z.ZodType<
  TaskEntityPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(TaskEntity$inboundSchema).optional(),
  pagination: PaginationEntity$inboundSchema.optional(),
});

/** @internal */
export type TaskEntityPaginated$Outbound = {
  data?: Array<TaskEntity$Outbound> | undefined;
  pagination?: PaginationEntity$Outbound | undefined;
};

/** @internal */
export const TaskEntityPaginated$outboundSchema: z.ZodType<
  TaskEntityPaginated$Outbound,
  z.ZodTypeDef,
  TaskEntityPaginated
> = z.object({
  data: z.array(TaskEntity$outboundSchema).optional(),
  pagination: PaginationEntity$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskEntityPaginated$ {
  /** @deprecated use `TaskEntityPaginated$inboundSchema` instead. */
  export const inboundSchema = TaskEntityPaginated$inboundSchema;
  /** @deprecated use `TaskEntityPaginated$outboundSchema` instead. */
  export const outboundSchema = TaskEntityPaginated$outboundSchema;
  /** @deprecated use `TaskEntityPaginated$Outbound` instead. */
  export type Outbound = TaskEntityPaginated$Outbound;
}

export function taskEntityPaginatedToJSON(
  taskEntityPaginated: TaskEntityPaginated,
): string {
  return JSON.stringify(
    TaskEntityPaginated$outboundSchema.parse(taskEntityPaginated),
  );
}

export function taskEntityPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<TaskEntityPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaskEntityPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaskEntityPaginated' from JSON`,
  );
}
