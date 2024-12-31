/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileT = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

export const VoteDirection = {
  Up: "up",
  Down: "down",
} as const;
export type VoteDirection = ClosedEnum<typeof VoteDirection>;

export type CreateIncidentAttachmentRequestBody = {
  file: FileT | Blob;
  description?: string | undefined;
  occurredAt?: Date | undefined;
  voteDirection?: VoteDirection | undefined;
};

export type CreateIncidentAttachmentRequest = {
  incidentId: string;
  requestBody: CreateIncidentAttachmentRequestBody;
};

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    fileName: z.string(),
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
  });

/** @internal */
export type FileT$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

export function fileToJSON(fileT: FileT): string {
  return JSON.stringify(FileT$outboundSchema.parse(fileT));
}

export function fileFromJSON(
  jsonString: string,
): SafeParseResult<FileT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileT' from JSON`,
  );
}

/** @internal */
export const VoteDirection$inboundSchema: z.ZodNativeEnum<
  typeof VoteDirection
> = z.nativeEnum(VoteDirection);

/** @internal */
export const VoteDirection$outboundSchema: z.ZodNativeEnum<
  typeof VoteDirection
> = VoteDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VoteDirection$ {
  /** @deprecated use `VoteDirection$inboundSchema` instead. */
  export const inboundSchema = VoteDirection$inboundSchema;
  /** @deprecated use `VoteDirection$outboundSchema` instead. */
  export const outboundSchema = VoteDirection$outboundSchema;
}

/** @internal */
export const CreateIncidentAttachmentRequestBody$inboundSchema: z.ZodType<
  CreateIncidentAttachmentRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => FileT$inboundSchema),
  description: z.string().optional(),
  occurred_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  vote_direction: VoteDirection$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "occurred_at": "occurredAt",
    "vote_direction": "voteDirection",
  });
});

/** @internal */
export type CreateIncidentAttachmentRequestBody$Outbound = {
  file: FileT$Outbound | Blob;
  description?: string | undefined;
  occurred_at?: string | undefined;
  vote_direction?: string | undefined;
};

/** @internal */
export const CreateIncidentAttachmentRequestBody$outboundSchema: z.ZodType<
  CreateIncidentAttachmentRequestBody$Outbound,
  z.ZodTypeDef,
  CreateIncidentAttachmentRequestBody
> = z.object({
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema),
  description: z.string().optional(),
  occurredAt: z.date().transform(v => v.toISOString()).optional(),
  voteDirection: VoteDirection$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    occurredAt: "occurred_at",
    voteDirection: "vote_direction",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIncidentAttachmentRequestBody$ {
  /** @deprecated use `CreateIncidentAttachmentRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateIncidentAttachmentRequestBody$inboundSchema;
  /** @deprecated use `CreateIncidentAttachmentRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateIncidentAttachmentRequestBody$outboundSchema;
  /** @deprecated use `CreateIncidentAttachmentRequestBody$Outbound` instead. */
  export type Outbound = CreateIncidentAttachmentRequestBody$Outbound;
}

export function createIncidentAttachmentRequestBodyToJSON(
  createIncidentAttachmentRequestBody: CreateIncidentAttachmentRequestBody,
): string {
  return JSON.stringify(
    CreateIncidentAttachmentRequestBody$outboundSchema.parse(
      createIncidentAttachmentRequestBody,
    ),
  );
}

export function createIncidentAttachmentRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateIncidentAttachmentRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateIncidentAttachmentRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIncidentAttachmentRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateIncidentAttachmentRequest$inboundSchema: z.ZodType<
  CreateIncidentAttachmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  incident_id: z.string(),
  RequestBody: z.lazy(() => CreateIncidentAttachmentRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "incident_id": "incidentId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateIncidentAttachmentRequest$Outbound = {
  incident_id: string;
  RequestBody: CreateIncidentAttachmentRequestBody$Outbound;
};

/** @internal */
export const CreateIncidentAttachmentRequest$outboundSchema: z.ZodType<
  CreateIncidentAttachmentRequest$Outbound,
  z.ZodTypeDef,
  CreateIncidentAttachmentRequest
> = z.object({
  incidentId: z.string(),
  requestBody: z.lazy(() => CreateIncidentAttachmentRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    incidentId: "incident_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIncidentAttachmentRequest$ {
  /** @deprecated use `CreateIncidentAttachmentRequest$inboundSchema` instead. */
  export const inboundSchema = CreateIncidentAttachmentRequest$inboundSchema;
  /** @deprecated use `CreateIncidentAttachmentRequest$outboundSchema` instead. */
  export const outboundSchema = CreateIncidentAttachmentRequest$outboundSchema;
  /** @deprecated use `CreateIncidentAttachmentRequest$Outbound` instead. */
  export type Outbound = CreateIncidentAttachmentRequest$Outbound;
}

export function createIncidentAttachmentRequestToJSON(
  createIncidentAttachmentRequest: CreateIncidentAttachmentRequest,
): string {
  return JSON.stringify(
    CreateIncidentAttachmentRequest$outboundSchema.parse(
      createIncidentAttachmentRequest,
    ),
  );
}

export function createIncidentAttachmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateIncidentAttachmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateIncidentAttachmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIncidentAttachmentRequest' from JSON`,
  );
}
