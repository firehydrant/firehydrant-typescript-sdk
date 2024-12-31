# PatchV1ServicesServiceIdExternalResources

## Example Usage

```typescript
import { PatchV1ServicesServiceIdExternalResources } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1ServicesServiceIdExternalResources = {
  remoteId: "<id>",
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `remoteId`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `connectionType`                                                                                                                                                | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The integration slug for the external resource. Can be one of: github, opsgenie, pager_duty, victorops. Not required if the resource has already been imported. |
| `remove`                                                                                                                                                        | *boolean*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                              | If you are trying to remove an external resource from a service, set this to 'true'.                                                                            |