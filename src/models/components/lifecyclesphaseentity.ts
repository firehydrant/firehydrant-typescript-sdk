/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LifecyclesMilestoneEntity,
  LifecyclesMilestoneEntity$inboundSchema,
  LifecyclesMilestoneEntity$Outbound,
  LifecyclesMilestoneEntity$outboundSchema,
} from "./lifecyclesmilestoneentity.js";

/**
 * Lifecycles_PhaseEntity model
 */
export type LifecyclesPhaseEntity = {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  type?: string | undefined;
  position?: number | undefined;
  milestones?: Array<LifecyclesMilestoneEntity> | undefined;
};

/** @internal */
export const LifecyclesPhaseEntity$inboundSchema: z.ZodType<
  LifecyclesPhaseEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  position: z.number().int().optional(),
  milestones: z.array(LifecyclesMilestoneEntity$inboundSchema).optional(),
});

/** @internal */
export type LifecyclesPhaseEntity$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  type?: string | undefined;
  position?: number | undefined;
  milestones?: Array<LifecyclesMilestoneEntity$Outbound> | undefined;
};

/** @internal */
export const LifecyclesPhaseEntity$outboundSchema: z.ZodType<
  LifecyclesPhaseEntity$Outbound,
  z.ZodTypeDef,
  LifecyclesPhaseEntity
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  position: z.number().int().optional(),
  milestones: z.array(LifecyclesMilestoneEntity$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LifecyclesPhaseEntity$ {
  /** @deprecated use `LifecyclesPhaseEntity$inboundSchema` instead. */
  export const inboundSchema = LifecyclesPhaseEntity$inboundSchema;
  /** @deprecated use `LifecyclesPhaseEntity$outboundSchema` instead. */
  export const outboundSchema = LifecyclesPhaseEntity$outboundSchema;
  /** @deprecated use `LifecyclesPhaseEntity$Outbound` instead. */
  export type Outbound = LifecyclesPhaseEntity$Outbound;
}

export function lifecyclesPhaseEntityToJSON(
  lifecyclesPhaseEntity: LifecyclesPhaseEntity,
): string {
  return JSON.stringify(
    LifecyclesPhaseEntity$outboundSchema.parse(lifecyclesPhaseEntity),
  );
}

export function lifecyclesPhaseEntityFromJSON(
  jsonString: string,
): SafeParseResult<LifecyclesPhaseEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LifecyclesPhaseEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LifecyclesPhaseEntity' from JSON`,
  );
}
