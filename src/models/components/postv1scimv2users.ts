/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The components of the user's name
 */
export type Name = {
  /**
   * The family name of the User, or last name in most Western languages
   */
  familyName: string;
  /**
   * The given name of the User, or first name in most Western languages
   */
  givenName: string;
};

export type Emails = {
  /**
   * String that represents an email address for the User
   */
  value: string;
  /**
   * Boolean which signifies if an email is intended as the primary email for the User
   */
  primary: boolean;
};

/**
 * SCIM endpoint to create and provision a new User. This endpoint will provision the User, which allows them to accept their account throught their IDP or via the Forgot Password flow.
 */
export type PostV1ScimV2Users = {
  /**
   * A service provider's unique identifier for the user
   */
  userName: string;
  /**
   * The components of the user's name
   */
  name: Name;
  /**
   * Email addresses for the User
   */
  emails: Array<Emails>;
  /**
   * Roles for the User. Options are owner, member or collaborator
   */
  roles?: Array<string> | undefined;
  /**
   * This attribute is intended to be used as a means to set, replace, or compare (i.e., filter for equality) a password
   */
  password?: string | undefined;
};

/** @internal */
export const Name$inboundSchema: z.ZodType<Name, z.ZodTypeDef, unknown> = z
  .object({
    familyName: z.string(),
    givenName: z.string(),
  });

/** @internal */
export type Name$Outbound = {
  familyName: string;
  givenName: string;
};

/** @internal */
export const Name$outboundSchema: z.ZodType<Name$Outbound, z.ZodTypeDef, Name> =
  z.object({
    familyName: z.string(),
    givenName: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Name$ {
  /** @deprecated use `Name$inboundSchema` instead. */
  export const inboundSchema = Name$inboundSchema;
  /** @deprecated use `Name$outboundSchema` instead. */
  export const outboundSchema = Name$outboundSchema;
  /** @deprecated use `Name$Outbound` instead. */
  export type Outbound = Name$Outbound;
}

export function nameToJSON(name: Name): string {
  return JSON.stringify(Name$outboundSchema.parse(name));
}

export function nameFromJSON(
  jsonString: string,
): SafeParseResult<Name, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Name$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Name' from JSON`,
  );
}

/** @internal */
export const Emails$inboundSchema: z.ZodType<Emails, z.ZodTypeDef, unknown> = z
  .object({
    value: z.string(),
    primary: z.boolean(),
  });

/** @internal */
export type Emails$Outbound = {
  value: string;
  primary: boolean;
};

/** @internal */
export const Emails$outboundSchema: z.ZodType<
  Emails$Outbound,
  z.ZodTypeDef,
  Emails
> = z.object({
  value: z.string(),
  primary: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Emails$ {
  /** @deprecated use `Emails$inboundSchema` instead. */
  export const inboundSchema = Emails$inboundSchema;
  /** @deprecated use `Emails$outboundSchema` instead. */
  export const outboundSchema = Emails$outboundSchema;
  /** @deprecated use `Emails$Outbound` instead. */
  export type Outbound = Emails$Outbound;
}

export function emailsToJSON(emails: Emails): string {
  return JSON.stringify(Emails$outboundSchema.parse(emails));
}

export function emailsFromJSON(
  jsonString: string,
): SafeParseResult<Emails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Emails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Emails' from JSON`,
  );
}

/** @internal */
export const PostV1ScimV2Users$inboundSchema: z.ZodType<
  PostV1ScimV2Users,
  z.ZodTypeDef,
  unknown
> = z.object({
  userName: z.string(),
  name: z.lazy(() => Name$inboundSchema),
  emails: z.array(z.lazy(() => Emails$inboundSchema)),
  roles: z.array(z.string()).optional(),
  password: z.string().optional(),
});

/** @internal */
export type PostV1ScimV2Users$Outbound = {
  userName: string;
  name: Name$Outbound;
  emails: Array<Emails$Outbound>;
  roles?: Array<string> | undefined;
  password?: string | undefined;
};

/** @internal */
export const PostV1ScimV2Users$outboundSchema: z.ZodType<
  PostV1ScimV2Users$Outbound,
  z.ZodTypeDef,
  PostV1ScimV2Users
> = z.object({
  userName: z.string(),
  name: z.lazy(() => Name$outboundSchema),
  emails: z.array(z.lazy(() => Emails$outboundSchema)),
  roles: z.array(z.string()).optional(),
  password: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1ScimV2Users$ {
  /** @deprecated use `PostV1ScimV2Users$inboundSchema` instead. */
  export const inboundSchema = PostV1ScimV2Users$inboundSchema;
  /** @deprecated use `PostV1ScimV2Users$outboundSchema` instead. */
  export const outboundSchema = PostV1ScimV2Users$outboundSchema;
  /** @deprecated use `PostV1ScimV2Users$Outbound` instead. */
  export type Outbound = PostV1ScimV2Users$Outbound;
}

export function postV1ScimV2UsersToJSON(
  postV1ScimV2Users: PostV1ScimV2Users,
): string {
  return JSON.stringify(
    PostV1ScimV2Users$outboundSchema.parse(postV1ScimV2Users),
  );
}

export function postV1ScimV2UsersFromJSON(
  jsonString: string,
): SafeParseResult<PostV1ScimV2Users, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1ScimV2Users$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1ScimV2Users' from JSON`,
  );
}
