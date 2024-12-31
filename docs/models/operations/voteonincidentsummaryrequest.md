# VoteOnIncidentSummaryRequest

## Example Usage

```typescript
import { VoteOnIncidentSummaryRequest } from "firehydrant-typescript-sdk/models/operations";

let value: VoteOnIncidentSummaryRequest = {
  incidentId: "<id>",
  generatedSummaryId: "<id>",
  requestBody: {
    direction: "down",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `generatedSummaryId`                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `requestBody`                                                                                              | [operations.VoteOnIncidentSummaryRequestBody](../../models/operations/voteonincidentsummaryrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |