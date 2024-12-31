# PostV1ServicesServiceLinks

Creates a service with the appropriate integration for each external service ID passed

## Example Usage

```typescript
import { PostV1ServicesServiceLinks } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ServicesServiceLinks = {
  externalServiceIds: "<value>",
  connectionId: "<id>",
  integration: "opsgenie",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `externalServiceIds`                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | ID of the service                                                                       |
| `connectionId`                                                                          | *string*                                                                                | :heavy_check_mark:                                                                      | ID for the integration. This can be found by going to the edit page for the integration |
| `integration`                                                                           | [components.Integration](../../models/components/integration.md)                        | :heavy_check_mark:                                                                      | The name of the service                                                                 |