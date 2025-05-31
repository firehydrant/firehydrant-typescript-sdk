# ListTranscriptEntriesRequest

## Example Usage

```typescript
import { ListTranscriptEntriesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListTranscriptEntriesRequest = {
  incidentId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `after`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | The ID of the transcript entry to start after.                                               |
| `before`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The ID of the transcript entry to start before.                                              |
| `sort`                                                                                       | [operations.ListTranscriptEntriesSort](../../models/operations/listtranscriptentriessort.md) | :heavy_minus_sign:                                                                           | The order to sort the transcript entries.                                                    |
| `incidentId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |