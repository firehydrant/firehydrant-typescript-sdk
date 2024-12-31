# UpdateRunbookExecutionStepRequest

## Example Usage

```typescript
import { UpdateRunbookExecutionStepRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateRunbookExecutionStepRequest = {
  executionId: "<id>",
  stepId: "<id>",
  putV1RunbooksExecutionsExecutionIdStepsStepId: {
    state: "Alaska",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `executionId`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `stepId`                                                                                                                             | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `putV1RunbooksExecutionsExecutionIdStepsStepId`                                                                                      | [components.PutV1RunbooksExecutionsExecutionIdStepsStepId](../../models/components/putv1runbooksexecutionsexecutionidstepsstepid.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |