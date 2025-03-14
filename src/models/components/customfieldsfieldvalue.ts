/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomFieldsFieldValue = {
  name?: string | undefined;
  valueType?: string | undefined;
  displayName?: string | undefined;
  description?: string | undefined;
  slug?: string | undefined;
  fieldId?: string | undefined;
  valueArray?: string | undefined;
  valueString?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const CustomFieldsFieldValue$inboundSchema: z.ZodType<
  CustomFieldsFieldValue,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  value_type: z.string().optional(),
  display_name: z.string().optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
  field_id: z.string().optional(),
  value_array: z.string().optional(),
  value_string: z.string().optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "value_type": "valueType",
    "display_name": "displayName",
    "field_id": "fieldId",
    "value_array": "valueArray",
    "value_string": "valueString",
  });
});

/** @internal */
export type CustomFieldsFieldValue$Outbound = {
  name?: string | undefined;
  value_type?: string | undefined;
  display_name?: string | undefined;
  description?: string | undefined;
  slug?: string | undefined;
  field_id?: string | undefined;
  value_array?: string | undefined;
  value_string?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const CustomFieldsFieldValue$outboundSchema: z.ZodType<
  CustomFieldsFieldValue$Outbound,
  z.ZodTypeDef,
  CustomFieldsFieldValue
> = z.object({
  name: z.string().optional(),
  valueType: z.string().optional(),
  displayName: z.string().optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
  fieldId: z.string().optional(),
  valueArray: z.string().optional(),
  valueString: z.string().optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    valueType: "value_type",
    displayName: "display_name",
    fieldId: "field_id",
    valueArray: "value_array",
    valueString: "value_string",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldsFieldValue$ {
  /** @deprecated use `CustomFieldsFieldValue$inboundSchema` instead. */
  export const inboundSchema = CustomFieldsFieldValue$inboundSchema;
  /** @deprecated use `CustomFieldsFieldValue$outboundSchema` instead. */
  export const outboundSchema = CustomFieldsFieldValue$outboundSchema;
  /** @deprecated use `CustomFieldsFieldValue$Outbound` instead. */
  export type Outbound = CustomFieldsFieldValue$Outbound;
}

export function customFieldsFieldValueToJSON(
  customFieldsFieldValue: CustomFieldsFieldValue,
): string {
  return JSON.stringify(
    CustomFieldsFieldValue$outboundSchema.parse(customFieldsFieldValue),
  );
}

export function customFieldsFieldValueFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldsFieldValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldsFieldValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldsFieldValue' from JSON`,
  );
}
