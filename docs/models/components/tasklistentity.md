# TaskListEntity

TaskListEntity model

## Example Usage

```typescript
import { TaskListEntity } from "firehydrant-typescript-sdk/models/components";

let value: TaskListEntity = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | [components.NullableAuthorEntity](../../models/components/nullableauthorentity.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `taskListItems`                                                                               | [components.TaskListItemEntity](../../models/components/tasklistitementity.md)[]              | :heavy_minus_sign:                                                                            | N/A                                                                                           |