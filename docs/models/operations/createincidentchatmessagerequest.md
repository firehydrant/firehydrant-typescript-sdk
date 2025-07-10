# CreateIncidentChatMessageRequest

## Example Usage

```typescript
import { CreateIncidentChatMessageRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentChatMessageRequest = {
  incidentId: "<id>",
  createIncidentChatMessage: {
    body: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createIncidentChatMessage`                                                                  | [components.CreateIncidentChatMessage](../../models/components/createincidentchatmessage.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |