# PostV1RunbooksExecutions

Attaches a runbook to an incident and executes it

## Example Usage

```typescript
import { PostV1RunbooksExecutions } from "firehydrant-typescript-sdk/models/components";

let value: PostV1RunbooksExecutions = {
  executeFor: "<value>",
  runbookId: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `executeFor`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | The incident to attach the runbook to. Format must be: `incident/${incidentId}` |
| `runbookId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | ID of runbook to attach                                                         |