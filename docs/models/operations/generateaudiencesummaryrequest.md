# GenerateAudienceSummaryRequest

## Example Usage

```typescript
import { GenerateAudienceSummaryRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GenerateAudienceSummaryRequest = {
  audienceId: "<id>",
  incidentId: "<id>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `audienceId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Unique identifier of the audience                                                                              |
| `incidentId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Unique identifier of the incident to summarize                                                                 |
| `requestBody`                                                                                                  | [operations.GenerateAudienceSummaryRequestBody](../../models/operations/generateaudiencesummaryrequestbody.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |