# CreateIncidentTask

Create a task

## Example Usage

```typescript
import { CreateIncidentTask } from "firehydrant-typescript-sdk/models/components";

let value: CreateIncidentTask = {
  title: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `title`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The title of the task.                                               |
| `state`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The state of the task. One of: open, in_progress, cancelled, done    |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | A description of what the task is for.                               |
| `assigneeId`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | The ID of the user assigned to the task.                             |
| `dueAt`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The due date of the task. Relative values are supported such as '5m' |