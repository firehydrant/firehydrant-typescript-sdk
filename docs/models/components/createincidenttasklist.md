# CreateIncidentTaskList

Add all tasks from list to incident

## Example Usage

```typescript
import { CreateIncidentTaskList } from "firehydrant-typescript-sdk/models/components";

let value: CreateIncidentTaskList = {
  taskListId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `taskListId`                                           | *string*                                               | :heavy_check_mark:                                     | The id of the task list.                               |
| `assigneeId`                                           | *string*                                               | :heavy_minus_sign:                                     | The ID of the user assigned to the tasks in this list. |