# CreateLifecycleMilestoneRequestBody

## Example Usage

```typescript
import { CreateLifecycleMilestoneRequestBody } from "firehydrant-typescript-sdk/models/operations";

let value: CreateLifecycleMilestoneRequestBody = {
  name: "<value>",
  description: "geez justly pfft oh delete",
  phaseId: "<id>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The name of the milestone                                                                                                        |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | A long-form description of the milestone's purpose                                                                               |
| `slug`                                                                                                                           | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A unique identifier for the milestone. If not provided, one will be generated from the name.                                     |
| `phaseId`                                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the phase to which the milestone should belong                                                                         |
| `position`                                                                                                                       | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The position of the milestone within the phase. If not provided, the milestone will be added as the last milestone in the phase. |
| `requiredAtMilestoneId`                                                                                                          | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The ID of a later milestone that cannot be started until this milestone has a timestamp populated                                |