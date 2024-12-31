# TaskListItems

## Example Usage

```typescript
import { TaskListItems } from "firehydrant-typescript-sdk/models/components";

let value: TaskListItems = {
  summary: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `summary`                                                             | *string*                                                              | :heavy_check_mark:                                                    | A summary of the task                                                 |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | A long-form description for the task if additional context is helpful |