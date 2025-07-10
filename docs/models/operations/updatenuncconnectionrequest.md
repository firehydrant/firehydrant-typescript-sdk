# UpdateNuncConnectionRequest

## Example Usage

```typescript
import { UpdateNuncConnectionRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateNuncConnectionRequest = {
  nuncConnectionId: "<id>",
  requestBody: {
    conditionsNuncCondition: [],
    conditionsConditionId: [
      "<value 1>",
      "<value 2>",
    ],
    componentsInfrastructureType: [
      "<value 1>",
      "<value 2>",
    ],
    componentsInfrastructureId: [],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `nuncConnectionId`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `requestBody`                                                                                            | [operations.UpdateNuncConnectionRequestBody](../../models/operations/updatenuncconnectionrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |