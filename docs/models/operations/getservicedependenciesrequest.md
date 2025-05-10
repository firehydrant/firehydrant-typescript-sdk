# GetServiceDependenciesRequest

## Example Usage

```typescript
import { GetServiceDependenciesRequest } from "firehydrant/models/operations";

let value: GetServiceDependenciesRequest = {
  serviceId: "<id>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                           | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `flatten`                                                                                                                             | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | If true, returns all dependencies in one array. If false, splits dependencies into different arrays for child and parent dependencies |