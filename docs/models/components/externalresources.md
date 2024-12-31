# ExternalResources

## Example Usage

```typescript
import { ExternalResources } from "firehydrant-typescript-sdk/models/components";

let value: ExternalResources = {
  remoteId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `remoteId`                                                                                                                                                                  | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `connectionType`                                                                                                                                                            | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | The integration slug for the external resource. Can be one of: github, opsgenie, pager_duty, statuspage, victorops. Not required if the resource has already been imported. |