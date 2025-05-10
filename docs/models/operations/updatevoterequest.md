# UpdateVoteRequest

## Example Usage

```typescript
import { UpdateVoteRequest } from "firehydrant/models/operations";

let value: UpdateVoteRequest = {
  incidentId: "<id>",
  eventId: "<id>",
  updateVote: {
    direction: "dig",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `incidentId`                                                   | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `eventId`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `updateVote`                                                   | [components.UpdateVote](../../models/components/updatevote.md) | :heavy_check_mark:                                             | N/A                                                            |