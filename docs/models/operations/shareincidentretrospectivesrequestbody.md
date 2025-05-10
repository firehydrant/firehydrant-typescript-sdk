# ShareIncidentRetrospectivesRequestBody

## Example Usage

```typescript
import { ShareIncidentRetrospectivesRequestBody } from "firehydrant/models/operations";

let value: ShareIncidentRetrospectivesRequestBody = {
  retrospectiveIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `userIds`                                          | *string*[]                                         | :heavy_minus_sign:                                 | An array of user IDs with whom to share the report |
| `teamIds`                                          | *string*[]                                         | :heavy_minus_sign:                                 | An array of team IDs with whom to share the report |
| `retrospectiveIds`                                 | *string*[]                                         | :heavy_check_mark:                                 | An array of retrospective IDs to share             |