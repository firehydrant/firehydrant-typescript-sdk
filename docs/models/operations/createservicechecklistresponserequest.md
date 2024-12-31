# CreateServiceChecklistResponseRequest

## Example Usage

```typescript
import { CreateServiceChecklistResponseRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateServiceChecklistResponseRequest = {
  serviceId: "<id>",
  checklistId: "<id>",
  postV1ServicesServiceIdChecklistResponseChecklistId: {
    checkId: "<id>",
    status: false,
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `serviceId`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `checklistId`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `postV1ServicesServiceIdChecklistResponseChecklistId`                                                                                            | [components.PostV1ServicesServiceIdChecklistResponseChecklistId](../../models/components/postv1servicesserviceidchecklistresponsechecklistid.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |