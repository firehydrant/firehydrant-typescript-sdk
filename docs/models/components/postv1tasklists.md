# PostV1TaskLists

Creates a new task list

## Example Usage

```typescript
import { PostV1TaskLists } from "firehydrant-typescript-sdk/models/components";

let value: PostV1TaskLists = {
  name: "<value>",
  taskListItems: [
    {
      summary: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `taskListItems`                                                        | [components.TaskListItems](../../models/components/tasklistitems.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |