# ListTeamEscalationPoliciesRequest

## Example Usage

```typescript
import { ListTeamEscalationPoliciesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListTeamEscalationPoliciesRequest = {
  teamId: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `teamId`                                                              | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `query`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | A query string for searching through the list of escalation policies. |
| `page`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `perPage`                                                             | *number*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |