# GetSignalIngestUrlRequest

## Example Usage

```typescript
import { GetSignalIngestUrlRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GetSignalIngestUrlRequest = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Team ID to send signals to directly                                                          |
| `escalationPolicyId`                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | Escalation policy ID to send signals to directly. `team_id` is required if this is provided. |
| `onCallScheduleId`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | On-call schedule ID to send signals to directly. `team_id` is required if this is provided.  |
| `userId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | User ID to send signals to directly                                                          |