/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LinksEntity = {
  id?: string | undefined;
  hrefUrl?: string | undefined;
  iconUrl?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const LinksEntity$inboundSchema: z.ZodType<
  LinksEntity,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  href_url: z.string().optional(),
  icon_url: z.string().optional(),
  name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "href_url": "hrefUrl",
    "icon_url": "iconUrl",
  });
});

/** @internal */
export type LinksEntity$Outbound = {
  id?: string | undefined;
  href_url?: string | undefined;
  icon_url?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const LinksEntity$outboundSchema: z.ZodType<
  LinksEntity$Outbound,
  z.ZodTypeDef,
  LinksEntity
> = z.object({
  id: z.string().optional(),
  hrefUrl: z.string().optional(),
  iconUrl: z.string().optional(),
  name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    hrefUrl: "href_url",
    iconUrl: "icon_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinksEntity$ {
  /** @deprecated use `LinksEntity$inboundSchema` instead. */
  export const inboundSchema = LinksEntity$inboundSchema;
  /** @deprecated use `LinksEntity$outboundSchema` instead. */
  export const outboundSchema = LinksEntity$outboundSchema;
  /** @deprecated use `LinksEntity$Outbound` instead. */
  export type Outbound = LinksEntity$Outbound;
}

export function linksEntityToJSON(linksEntity: LinksEntity): string {
  return JSON.stringify(LinksEntity$outboundSchema.parse(linksEntity));
}

export function linksEntityFromJSON(
  jsonString: string,
): SafeParseResult<LinksEntity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinksEntity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinksEntity' from JSON`,
  );
}
