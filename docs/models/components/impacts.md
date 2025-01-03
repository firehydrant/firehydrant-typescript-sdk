# Impacts

## Example Usage

```typescript
import { Impacts } from "firehydrant-typescript-sdk/models/components";

let value: Impacts = {
  type: "<value>",
  id: "<id>",
  conditionId: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `type`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | The type of impacted infrastructure. One of: environment, functionality, or service |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | The ID of the impacted infrastructure                                               |
| `conditionId`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | The ID of the impact condition. Find these at /v1/severity_matrix/conditions        |