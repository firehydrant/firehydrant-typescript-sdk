# CreateEnvironment

Creates an environment for the organization

## Example Usage

```typescript
import { CreateEnvironment } from "firehydrant-typescript-sdk/models/components";

let value: CreateEnvironment = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `functionalities`                                                                                        | [components.CreateEnvironmentFunctionality](../../models/components/createenvironmentfunctionality.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `services`                                                                                               | [components.CreateEnvironmentService](../../models/components/createenvironmentservice.md)[]             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |