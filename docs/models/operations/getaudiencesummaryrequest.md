# GetAudienceSummaryRequest

## Example Usage

```typescript
import { GetAudienceSummaryRequest } from "firehydrant/models/operations";

let value: GetAudienceSummaryRequest = {
  audienceId: "<id>",
  incidentId: "<id>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `audienceId`                                   | *string*                                       | :heavy_check_mark:                             | Unique identifier of the audience              |
| `incidentId`                                   | *string*                                       | :heavy_check_mark:                             | Unique identifier of the incident to summarize |