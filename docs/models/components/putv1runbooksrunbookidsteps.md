# PutV1RunbooksRunbookIdSteps

## Example Usage

```typescript
import { PutV1RunbooksRunbookIdSteps } from "firehydrant-typescript-sdk/models/components";

let value: PutV1RunbooksRunbookIdSteps = {
  name: "<value>",
  actionId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `stepId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | ID of step to be updated                                                                       |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | Name for step                                                                                  |
| `actionId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of action to use for this step.                                                             |
| `rule`                                                                                         | [components.PutV1RunbooksRunbookIdRule](../../models/components/putv1runbooksrunbookidrule.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |