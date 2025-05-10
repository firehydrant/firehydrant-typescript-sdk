# DeleteRunbookExecutionRequest

## Example Usage

```typescript
import { DeleteRunbookExecutionRequest } from "firehydrant/models/operations";

let value: DeleteRunbookExecutionRequest = {
  executionId: "<id>",
  reason: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `executionId`                                    | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `reason`                                         | *string*                                         | :heavy_check_mark:                               | The reason for terminating the runbook execution |