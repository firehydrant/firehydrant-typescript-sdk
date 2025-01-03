/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Services = {
  /**
   * ID of a service
   */
  id: string;
};

export type ExternalResources = {
  remoteId: string;
  /**
   * The integration slug for the external resource. Can be one of: github, opsgenie, pager_duty, statuspage, victorops. Not required if the resource has already been imported.
   */
  connectionType?: string | undefined;
};

export type Links = {
  /**
   * Short name used to display and identify this link
   */
  name: string;
  /**
   * URL
   */
  hrefUrl: string;
  /**
   * An optional URL to an icon representing this link
   */
  iconUrl?: string | undefined;
};

/**
 * An object representing a Team that owns the service
 */
export type Owner = {
  id: string;
};

export type Teams = {
  id: string;
};

/**
 * Creates a functionality for the organization
 */
export type PostV1Functionalities = {
  name: string;
  description?: string | undefined;
  services?: Array<Services> | undefined;
  /**
   * A hash of label keys and values
   */
  labels?: { [k: string]: string } | undefined;
  alertOnAdd?: boolean | undefined;
  autoAddRespondingTeam?: boolean | undefined;
  /**
   * An array of external resources to attach to this service.
   */
  externalResources?: Array<ExternalResources> | undefined;
  /**
   * An array of links to associate with this service
   */
  links?: Array<Links> | undefined;
  /**
   * An object representing a Team that owns the service
   */
  owner?: Owner | undefined;
  /**
   * An array of teams to attach to this service.
   */
  teams?: Array<Teams> | undefined;
};

/** @internal */
export const Services$inboundSchema: z.ZodType<
  Services,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type Services$Outbound = {
  id: string;
};

/** @internal */
export const Services$outboundSchema: z.ZodType<
  Services$Outbound,
  z.ZodTypeDef,
  Services
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Services$ {
  /** @deprecated use `Services$inboundSchema` instead. */
  export const inboundSchema = Services$inboundSchema;
  /** @deprecated use `Services$outboundSchema` instead. */
  export const outboundSchema = Services$outboundSchema;
  /** @deprecated use `Services$Outbound` instead. */
  export type Outbound = Services$Outbound;
}

export function servicesToJSON(services: Services): string {
  return JSON.stringify(Services$outboundSchema.parse(services));
}

export function servicesFromJSON(
  jsonString: string,
): SafeParseResult<Services, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Services$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Services' from JSON`,
  );
}

/** @internal */
export const ExternalResources$inboundSchema: z.ZodType<
  ExternalResources,
  z.ZodTypeDef,
  unknown
> = z.object({
  remote_id: z.string(),
  connection_type: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
    "connection_type": "connectionType",
  });
});

/** @internal */
export type ExternalResources$Outbound = {
  remote_id: string;
  connection_type?: string | undefined;
};

/** @internal */
export const ExternalResources$outboundSchema: z.ZodType<
  ExternalResources$Outbound,
  z.ZodTypeDef,
  ExternalResources
> = z.object({
  remoteId: z.string(),
  connectionType: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
    connectionType: "connection_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalResources$ {
  /** @deprecated use `ExternalResources$inboundSchema` instead. */
  export const inboundSchema = ExternalResources$inboundSchema;
  /** @deprecated use `ExternalResources$outboundSchema` instead. */
  export const outboundSchema = ExternalResources$outboundSchema;
  /** @deprecated use `ExternalResources$Outbound` instead. */
  export type Outbound = ExternalResources$Outbound;
}

export function externalResourcesToJSON(
  externalResources: ExternalResources,
): string {
  return JSON.stringify(
    ExternalResources$outboundSchema.parse(externalResources),
  );
}

export function externalResourcesFromJSON(
  jsonString: string,
): SafeParseResult<ExternalResources, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExternalResources$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExternalResources' from JSON`,
  );
}

/** @internal */
export const Links$inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown> = z
  .object({
    name: z.string(),
    href_url: z.string(),
    icon_url: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "href_url": "hrefUrl",
      "icon_url": "iconUrl",
    });
  });

/** @internal */
export type Links$Outbound = {
  name: string;
  href_url: string;
  icon_url?: string | undefined;
};

/** @internal */
export const Links$outboundSchema: z.ZodType<
  Links$Outbound,
  z.ZodTypeDef,
  Links
> = z.object({
  name: z.string(),
  hrefUrl: z.string(),
  iconUrl: z.string().optional(),
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
export namespace Links$ {
  /** @deprecated use `Links$inboundSchema` instead. */
  export const inboundSchema = Links$inboundSchema;
  /** @deprecated use `Links$outboundSchema` instead. */
  export const outboundSchema = Links$outboundSchema;
  /** @deprecated use `Links$Outbound` instead. */
  export type Outbound = Links$Outbound;
}

export function linksToJSON(links: Links): string {
  return JSON.stringify(Links$outboundSchema.parse(links));
}

export function linksFromJSON(
  jsonString: string,
): SafeParseResult<Links, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Links$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Links' from JSON`,
  );
}

/** @internal */
export const Owner$inboundSchema: z.ZodType<Owner, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
  });

/** @internal */
export type Owner$Outbound = {
  id: string;
};

/** @internal */
export const Owner$outboundSchema: z.ZodType<
  Owner$Outbound,
  z.ZodTypeDef,
  Owner
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Owner$ {
  /** @deprecated use `Owner$inboundSchema` instead. */
  export const inboundSchema = Owner$inboundSchema;
  /** @deprecated use `Owner$outboundSchema` instead. */
  export const outboundSchema = Owner$outboundSchema;
  /** @deprecated use `Owner$Outbound` instead. */
  export type Outbound = Owner$Outbound;
}

export function ownerToJSON(owner: Owner): string {
  return JSON.stringify(Owner$outboundSchema.parse(owner));
}

export function ownerFromJSON(
  jsonString: string,
): SafeParseResult<Owner, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Owner$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Owner' from JSON`,
  );
}

/** @internal */
export const Teams$inboundSchema: z.ZodType<Teams, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
  });

/** @internal */
export type Teams$Outbound = {
  id: string;
};

/** @internal */
export const Teams$outboundSchema: z.ZodType<
  Teams$Outbound,
  z.ZodTypeDef,
  Teams
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Teams$ {
  /** @deprecated use `Teams$inboundSchema` instead. */
  export const inboundSchema = Teams$inboundSchema;
  /** @deprecated use `Teams$outboundSchema` instead. */
  export const outboundSchema = Teams$outboundSchema;
  /** @deprecated use `Teams$Outbound` instead. */
  export type Outbound = Teams$Outbound;
}

export function teamsToJSON(teams: Teams): string {
  return JSON.stringify(Teams$outboundSchema.parse(teams));
}

export function teamsFromJSON(
  jsonString: string,
): SafeParseResult<Teams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Teams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Teams' from JSON`,
  );
}

/** @internal */
export const PostV1Functionalities$inboundSchema: z.ZodType<
  PostV1Functionalities,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  services: z.array(z.lazy(() => Services$inboundSchema)).optional(),
  labels: z.record(z.string()).optional(),
  alert_on_add: z.boolean().optional(),
  auto_add_responding_team: z.boolean().optional(),
  external_resources: z.array(z.lazy(() => ExternalResources$inboundSchema))
    .optional(),
  links: z.array(z.lazy(() => Links$inboundSchema)).optional(),
  owner: z.lazy(() => Owner$inboundSchema).optional(),
  teams: z.array(z.lazy(() => Teams$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "alert_on_add": "alertOnAdd",
    "auto_add_responding_team": "autoAddRespondingTeam",
    "external_resources": "externalResources",
  });
});

/** @internal */
export type PostV1Functionalities$Outbound = {
  name: string;
  description?: string | undefined;
  services?: Array<Services$Outbound> | undefined;
  labels?: { [k: string]: string } | undefined;
  alert_on_add?: boolean | undefined;
  auto_add_responding_team?: boolean | undefined;
  external_resources?: Array<ExternalResources$Outbound> | undefined;
  links?: Array<Links$Outbound> | undefined;
  owner?: Owner$Outbound | undefined;
  teams?: Array<Teams$Outbound> | undefined;
};

/** @internal */
export const PostV1Functionalities$outboundSchema: z.ZodType<
  PostV1Functionalities$Outbound,
  z.ZodTypeDef,
  PostV1Functionalities
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  services: z.array(z.lazy(() => Services$outboundSchema)).optional(),
  labels: z.record(z.string()).optional(),
  alertOnAdd: z.boolean().optional(),
  autoAddRespondingTeam: z.boolean().optional(),
  externalResources: z.array(z.lazy(() => ExternalResources$outboundSchema))
    .optional(),
  links: z.array(z.lazy(() => Links$outboundSchema)).optional(),
  owner: z.lazy(() => Owner$outboundSchema).optional(),
  teams: z.array(z.lazy(() => Teams$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    alertOnAdd: "alert_on_add",
    autoAddRespondingTeam: "auto_add_responding_team",
    externalResources: "external_resources",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1Functionalities$ {
  /** @deprecated use `PostV1Functionalities$inboundSchema` instead. */
  export const inboundSchema = PostV1Functionalities$inboundSchema;
  /** @deprecated use `PostV1Functionalities$outboundSchema` instead. */
  export const outboundSchema = PostV1Functionalities$outboundSchema;
  /** @deprecated use `PostV1Functionalities$Outbound` instead. */
  export type Outbound = PostV1Functionalities$Outbound;
}

export function postV1FunctionalitiesToJSON(
  postV1Functionalities: PostV1Functionalities,
): string {
  return JSON.stringify(
    PostV1Functionalities$outboundSchema.parse(postV1Functionalities),
  );
}

export function postV1FunctionalitiesFromJSON(
  jsonString: string,
): SafeParseResult<PostV1Functionalities, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1Functionalities$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1Functionalities' from JSON`,
  );
}
