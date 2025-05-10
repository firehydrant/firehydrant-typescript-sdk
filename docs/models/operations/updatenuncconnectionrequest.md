# UpdateNuncConnectionRequest

## Example Usage

```typescript
import { UpdateNuncConnectionRequest } from "firehydrant/models/operations";

let value: UpdateNuncConnectionRequest = {
  nuncConnectionId: "<id>",
  requestBody: {
    conditionsNuncCondition: [
      "<value>",
    ],
    conditionsConditionId: [
      "<value>",
    ],
    componentsInfrastructureType: [
      "<value>",
    ],
    componentsInfrastructureId: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `nuncConnectionId`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `requestBody`                                                                                            | [operations.UpdateNuncConnectionRequestBody](../../models/operations/updatenuncconnectionrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |