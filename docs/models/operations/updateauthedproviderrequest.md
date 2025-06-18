# UpdateAuthedProviderRequest

## Example Usage

```typescript
import { UpdateAuthedProviderRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateAuthedProviderRequest = {
  integrationSlug: "<value>",
  connectionId: "<id>",
  authedProviderId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `integrationSlug`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Integration slug                                                                                         |
| `connectionId`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Connection ID                                                                                            |
| `authedProviderId`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Authed provider ID                                                                                       |
| `requestBody`                                                                                            | [operations.UpdateAuthedProviderRequestBody](../../models/operations/updateauthedproviderrequestbody.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |