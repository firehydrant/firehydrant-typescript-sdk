# CreateTaskList

Creates a new task list

## Example Usage

```typescript
import { CreateTaskList } from "firehydrant-typescript-sdk/models/components";

let value: CreateTaskList = {
  name: "<value>",
  taskListItems: [
    {
      summary: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `taskListItems`                                                                                  | [components.CreateTaskListTaskListItem](../../models/components/createtasklisttasklistitem.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |