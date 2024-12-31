# PutV1RunbooksExecutionsExecutionIdStepsStepId

Updates a runbook step execution, especially for changing the state of a step execution.

## Example Usage

```typescript
import { PutV1RunbooksExecutionsExecutionIdStepsStepId } from "firehydrant-typescript-sdk/models/components";

let value: PutV1RunbooksExecutionsExecutionIdStepsStepId = {
  state: "Oregon",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `state`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scheduleFor`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `data`                                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Data for execution of this step                                                               |
| `repeatsAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |