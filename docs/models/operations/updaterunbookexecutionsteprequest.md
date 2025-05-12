# UpdateRunbookExecutionStepRequest

## Example Usage

```typescript
import { UpdateRunbookExecutionStepRequest } from "firehydrant/models/operations";

let value: UpdateRunbookExecutionStepRequest = {
  executionId: "<id>",
  stepId: "<id>",
  updateRunbookExecutionStep: {
    state: "Wisconsin",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `executionId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `stepId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updateRunbookExecutionStep`                                                                   | [components.UpdateRunbookExecutionStep](../../models/components/updaterunbookexecutionstep.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |