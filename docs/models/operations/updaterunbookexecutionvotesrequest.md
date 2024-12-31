# UpdateRunbookExecutionVotesRequest

## Example Usage

```typescript
import { UpdateRunbookExecutionVotesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateRunbookExecutionVotesRequest = {
  executionId: "<id>",
  patchV1RunbooksExecutionsExecutionIdVotes: {
    direction: "down",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `executionId`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `patchV1RunbooksExecutionsExecutionIdVotes`                                                                                  | [components.PatchV1RunbooksExecutionsExecutionIdVotes](../../models/components/patchv1runbooksexecutionsexecutionidvotes.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |