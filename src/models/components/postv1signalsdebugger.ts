/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Images = {
  src?: string | undefined;
  alt?: string | undefined;
};

export type PostV1SignalsDebuggerLinks = {
  href?: string | undefined;
  text?: string | undefined;
};

export type Signals = {
  summary?: string | undefined;
  body?: string | undefined;
  level?: string | undefined;
  images?: Array<Images> | undefined;
  links?: Array<PostV1SignalsDebuggerLinks> | undefined;
};

export type PostV1SignalsDebugger = {
  /**
   * CEL expression
   */
  expression: string;
  /**
   * List of signals to evaluate rule expression against
   */
  signals: Array<Signals>;
};

/** @internal */
export const Images$inboundSchema: z.ZodType<Images, z.ZodTypeDef, unknown> = z
  .object({
    src: z.string().optional(),
    alt: z.string().optional(),
  });

/** @internal */
export type Images$Outbound = {
  src?: string | undefined;
  alt?: string | undefined;
};

/** @internal */
export const Images$outboundSchema: z.ZodType<
  Images$Outbound,
  z.ZodTypeDef,
  Images
> = z.object({
  src: z.string().optional(),
  alt: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Images$ {
  /** @deprecated use `Images$inboundSchema` instead. */
  export const inboundSchema = Images$inboundSchema;
  /** @deprecated use `Images$outboundSchema` instead. */
  export const outboundSchema = Images$outboundSchema;
  /** @deprecated use `Images$Outbound` instead. */
  export type Outbound = Images$Outbound;
}

export function imagesToJSON(images: Images): string {
  return JSON.stringify(Images$outboundSchema.parse(images));
}

export function imagesFromJSON(
  jsonString: string,
): SafeParseResult<Images, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Images$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Images' from JSON`,
  );
}

/** @internal */
export const PostV1SignalsDebuggerLinks$inboundSchema: z.ZodType<
  PostV1SignalsDebuggerLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  text: z.string().optional(),
});

/** @internal */
export type PostV1SignalsDebuggerLinks$Outbound = {
  href?: string | undefined;
  text?: string | undefined;
};

/** @internal */
export const PostV1SignalsDebuggerLinks$outboundSchema: z.ZodType<
  PostV1SignalsDebuggerLinks$Outbound,
  z.ZodTypeDef,
  PostV1SignalsDebuggerLinks
> = z.object({
  href: z.string().optional(),
  text: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SignalsDebuggerLinks$ {
  /** @deprecated use `PostV1SignalsDebuggerLinks$inboundSchema` instead. */
  export const inboundSchema = PostV1SignalsDebuggerLinks$inboundSchema;
  /** @deprecated use `PostV1SignalsDebuggerLinks$outboundSchema` instead. */
  export const outboundSchema = PostV1SignalsDebuggerLinks$outboundSchema;
  /** @deprecated use `PostV1SignalsDebuggerLinks$Outbound` instead. */
  export type Outbound = PostV1SignalsDebuggerLinks$Outbound;
}

export function postV1SignalsDebuggerLinksToJSON(
  postV1SignalsDebuggerLinks: PostV1SignalsDebuggerLinks,
): string {
  return JSON.stringify(
    PostV1SignalsDebuggerLinks$outboundSchema.parse(postV1SignalsDebuggerLinks),
  );
}

export function postV1SignalsDebuggerLinksFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SignalsDebuggerLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1SignalsDebuggerLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SignalsDebuggerLinks' from JSON`,
  );
}

/** @internal */
export const Signals$inboundSchema: z.ZodType<Signals, z.ZodTypeDef, unknown> =
  z.object({
    summary: z.string().optional(),
    body: z.string().optional(),
    level: z.string().optional(),
    images: z.array(z.lazy(() => Images$inboundSchema)).optional(),
    links: z.array(z.lazy(() => PostV1SignalsDebuggerLinks$inboundSchema))
      .optional(),
  });

/** @internal */
export type Signals$Outbound = {
  summary?: string | undefined;
  body?: string | undefined;
  level?: string | undefined;
  images?: Array<Images$Outbound> | undefined;
  links?: Array<PostV1SignalsDebuggerLinks$Outbound> | undefined;
};

/** @internal */
export const Signals$outboundSchema: z.ZodType<
  Signals$Outbound,
  z.ZodTypeDef,
  Signals
> = z.object({
  summary: z.string().optional(),
  body: z.string().optional(),
  level: z.string().optional(),
  images: z.array(z.lazy(() => Images$outboundSchema)).optional(),
  links: z.array(z.lazy(() => PostV1SignalsDebuggerLinks$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Signals$ {
  /** @deprecated use `Signals$inboundSchema` instead. */
  export const inboundSchema = Signals$inboundSchema;
  /** @deprecated use `Signals$outboundSchema` instead. */
  export const outboundSchema = Signals$outboundSchema;
  /** @deprecated use `Signals$Outbound` instead. */
  export type Outbound = Signals$Outbound;
}

export function signalsToJSON(signals: Signals): string {
  return JSON.stringify(Signals$outboundSchema.parse(signals));
}

export function signalsFromJSON(
  jsonString: string,
): SafeParseResult<Signals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Signals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Signals' from JSON`,
  );
}

/** @internal */
export const PostV1SignalsDebugger$inboundSchema: z.ZodType<
  PostV1SignalsDebugger,
  z.ZodTypeDef,
  unknown
> = z.object({
  expression: z.string(),
  signals: z.array(z.lazy(() => Signals$inboundSchema)),
});

/** @internal */
export type PostV1SignalsDebugger$Outbound = {
  expression: string;
  signals: Array<Signals$Outbound>;
};

/** @internal */
export const PostV1SignalsDebugger$outboundSchema: z.ZodType<
  PostV1SignalsDebugger$Outbound,
  z.ZodTypeDef,
  PostV1SignalsDebugger
> = z.object({
  expression: z.string(),
  signals: z.array(z.lazy(() => Signals$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1SignalsDebugger$ {
  /** @deprecated use `PostV1SignalsDebugger$inboundSchema` instead. */
  export const inboundSchema = PostV1SignalsDebugger$inboundSchema;
  /** @deprecated use `PostV1SignalsDebugger$outboundSchema` instead. */
  export const outboundSchema = PostV1SignalsDebugger$outboundSchema;
  /** @deprecated use `PostV1SignalsDebugger$Outbound` instead. */
  export type Outbound = PostV1SignalsDebugger$Outbound;
}

export function postV1SignalsDebuggerToJSON(
  postV1SignalsDebugger: PostV1SignalsDebugger,
): string {
  return JSON.stringify(
    PostV1SignalsDebugger$outboundSchema.parse(postV1SignalsDebugger),
  );
}

export function postV1SignalsDebuggerFromJSON(
  jsonString: string,
): SafeParseResult<PostV1SignalsDebugger, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1SignalsDebugger$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1SignalsDebugger' from JSON`,
  );
}
