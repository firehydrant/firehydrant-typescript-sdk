# UpdateRunbookExecutionStepVotesRequest

## Example Usage

```typescript
import { UpdateRunbookExecutionStepVotesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateRunbookExecutionStepVotesRequest = {
  executionId: "<id>",
  stepId: "<id>",
  patchV1RunbooksExecutionsExecutionIdStepsStepIdVotes: {
    direction: "down",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `executionId`                                                                                                                                      | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `stepId`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `patchV1RunbooksExecutionsExecutionIdStepsStepIdVotes`                                                                                             | [components.PatchV1RunbooksExecutionsExecutionIdStepsStepIdVotes](../../models/components/patchv1runbooksexecutionsexecutionidstepsstepidvotes.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |