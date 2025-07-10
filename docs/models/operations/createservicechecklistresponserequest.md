# CreateServiceChecklistResponseRequest

## Example Usage

```typescript
import { CreateServiceChecklistResponseRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateServiceChecklistResponseRequest = {
  serviceId: "<id>",
  checklistId: "<id>",
  createServiceChecklistResponse: {
    checkId: "<id>",
    status: false,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `serviceId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `checklistId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createServiceChecklistResponse`                                                                       | [components.CreateServiceChecklistResponse](../../models/components/createservicechecklistresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |