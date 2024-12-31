# GetIncidentTranscriptRequest

## Example Usage

```typescript
import { GetIncidentTranscriptRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GetIncidentTranscriptRequest = {
  incidentId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `after`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the transcript entry to start after.                         |
| `before`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the transcript entry to start before.                        |
| `sort`                                                                 | [operations.QueryParamSort](../../models/operations/queryparamsort.md) | :heavy_minus_sign:                                                     | The order to sort the transcript entries.                              |
| `incidentId`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |