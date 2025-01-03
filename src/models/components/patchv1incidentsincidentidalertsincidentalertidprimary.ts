/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Setting an alert as primary will overwrite milestone times in the FireHydrant incident with times included in the primary alert. Services attached to the primary alert will also be automatically added to the incident.
 */
export type PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary = {
  primary: boolean;
};

/** @internal */
export const PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$inboundSchema:
  z.ZodType<
    PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary,
    z.ZodTypeDef,
    unknown
  > = z.object({
    primary: z.boolean(),
  });

/** @internal */
export type PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$Outbound = {
  primary: boolean;
};

/** @internal */
export const PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$outboundSchema:
  z.ZodType<
    PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$Outbound,
    z.ZodTypeDef,
    PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary
  > = z.object({
    primary: z.boolean(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$ {
  /** @deprecated use `PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$inboundSchema` instead. */
  export const inboundSchema =
    PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$inboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$outboundSchema` instead. */
  export const outboundSchema =
    PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$outboundSchema;
  /** @deprecated use `PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$Outbound` instead. */
  export type Outbound =
    PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$Outbound;
}

export function patchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimaryToJSON(
  patchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary:
    PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary,
): string {
  return JSON.stringify(
    PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$outboundSchema.parse(
      patchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary,
    ),
  );
}

export function patchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimaryFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary' from JSON`,
  );
}
