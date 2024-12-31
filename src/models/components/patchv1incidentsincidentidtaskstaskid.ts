/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Update a task's attributes
 */
export type PatchV1IncidentsIncidentIdTasksTaskId = {
  /**
   * The title of the task.
   */
  title?: string | undefined;
  /**
   * A description of what the task is for.
   */
  description?: string | undefined;
  /**
   * The state of the task. One of: open, in_progress, cancelled, done
   */
  state?: string | undefined;
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
export const PatchV1IncidentsIncidentIdTasksTaskId$inboundSchema: z.ZodType<
  PatchV1IncidentsIncidentIdTasksTaskId,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  state: z.string().optional(),
  assignee_id: z.string().optional(),
  due_at: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "assignee_id": "assigneeId",
    "due_at": "dueAt",
  });
});

/** @internal */
export type PatchV1IncidentsIncidentIdTasksTaskId$Outbound = {
  title?: string | undefined;
  description?: string | undefined;
  state?: string | undefined;
  assignee_id?: string | undefined;
  due_at?: string | undefined;
};

/** @internal */
export const PatchV1IncidentsIncidentIdTasksTaskId$outboundSchema: z.ZodType<
  PatchV1IncidentsIncidentIdTasksTaskId$Outbound,
  z.ZodTypeDef,
  PatchV1IncidentsIncidentIdTasksTaskId
> = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  state: z.string().optional(),
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
export namespace PatchV1IncidentsIncidentIdTasksTaskId$ {
  /** @deprecated use `PatchV1IncidentsIncidentIdTasksTaskId$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1IncidentsIncidentIdTasksTaskId$inboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdTasksTaskId$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1IncidentsIncidentIdTasksTaskId$outboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdTasksTaskId$Outbound` instead. */
  export type Outbound = PatchV1IncidentsIncidentIdTasksTaskId$Outbound;
}

export function patchV1IncidentsIncidentIdTasksTaskIdToJSON(
  patchV1IncidentsIncidentIdTasksTaskId: PatchV1IncidentsIncidentIdTasksTaskId,
): string {
  return JSON.stringify(
    PatchV1IncidentsIncidentIdTasksTaskId$outboundSchema.parse(
      patchV1IncidentsIncidentIdTasksTaskId,
    ),
  );
}

export function patchV1IncidentsIncidentIdTasksTaskIdFromJSON(
  jsonString: string,
): SafeParseResult<PatchV1IncidentsIncidentIdTasksTaskId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1IncidentsIncidentIdTasksTaskId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchV1IncidentsIncidentIdTasksTaskId' from JSON`,
  );
}
