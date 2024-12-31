# ListTeamOnCallSchedulesRequest

## Example Usage

```typescript
import { ListTeamOnCallSchedulesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListTeamOnCallSchedulesRequest = {
  teamId: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `query`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | A query string for searching through the list of on-call schedules. |
| `page`                                                              | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `perPage`                                                           | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |