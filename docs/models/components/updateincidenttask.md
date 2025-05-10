# UpdateIncidentTask

Update a task's attributes

## Example Usage

```typescript
import { UpdateIncidentTask } from "firehydrant/models/components";

let value: UpdateIncidentTask = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `title`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The title of the task.                                               |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | A description of what the task is for.                               |
| `state`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The state of the task. One of: open, in_progress, cancelled, done    |
| `assigneeId`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | The ID of the user assigned to the task.                             |
| `dueAt`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The due date of the task. Relative values are supported such as '5m' |