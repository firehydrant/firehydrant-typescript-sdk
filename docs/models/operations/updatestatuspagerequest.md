# UpdateStatusPageRequest

## Example Usage

```typescript
import { UpdateStatusPageRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateStatusPageRequest = {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `nuncConnectionId`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestBody`                                                                                    | [operations.UpdateStatusPageRequestBody](../../models/operations/updatestatuspagerequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |