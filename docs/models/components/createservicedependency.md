# CreateServiceDependency

Creates a service dependency relationship between two services

## Example Usage

```typescript
import { CreateServiceDependency } from "firehydrant/models/components";

let value: CreateServiceDependency = {
  serviceId: "<id>",
  connectedServiceId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `serviceId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `connectedServiceId`                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `notes`                                                | *string*                                               | :heavy_minus_sign:                                     | A note to describe the service dependency relationship |