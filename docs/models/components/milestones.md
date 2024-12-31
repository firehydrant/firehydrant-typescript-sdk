# Milestones

## Example Usage

```typescript
import { Milestones } from "firehydrant-typescript-sdk/models/components";

let value: Milestones = {
  type: "<value>",
  occurredAt: new Date("2023-04-25T14:17:38.418Z"),
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                        | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The type/slug of the milestone. Must be one of the currently configured milestones.                                                           |
| `occurredAt`                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_check_mark:                                                                                                                            | An ISO8601 formatted string for when this milestone occurred. If you are removing a milestone, this field still needs to be set to some value |