# UpdateTranscriptAttributionRequestBody

## Example Usage

```typescript
import { UpdateTranscriptAttributionRequestBody } from "firehydrant/models/operations";

let value: UpdateTranscriptAttributionRequestBody = {
  toUserId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `fromSpeaker`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | The speaker to attribute the transcript to.                        |
| `fromUserId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | The user to attribute the transcript to.                           |
| `toUserId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The ID of the user to attribute the transcript to.                 |
| `transcriptId`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the specific transcript entry to change attribution for. |
| `conferenceBridgeId`                                               | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the conference bridge to attribute the transcript to.    |