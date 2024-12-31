# PatchV1IncidentsIncidentIdEventsEventIdVotes

Allows for upvoting or downvoting an event

## Example Usage

```typescript
import { PatchV1IncidentsIncidentIdEventsEventIdVotes } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1IncidentsIncidentIdEventsEventIdVotes = {
  direction: "down",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_check_mark:                                           | The direction you would like to vote, or if you dig it       |