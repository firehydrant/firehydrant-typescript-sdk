# UpdateIncidentChatMessageRequest

## Example Usage

```typescript
import { UpdateIncidentChatMessageRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateIncidentChatMessageRequest = {
  messageId: "<id>",
  incidentId: "<id>",
  patchV1IncidentsIncidentIdGenericChatMessagesMessageId: {
    body: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `messageId`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `incidentId`                                                                                                                                           | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `patchV1IncidentsIncidentIdGenericChatMessagesMessageId`                                                                                               | [components.PatchV1IncidentsIncidentIdGenericChatMessagesMessageId](../../models/components/patchv1incidentsincidentidgenericchatmessagesmessageid.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |