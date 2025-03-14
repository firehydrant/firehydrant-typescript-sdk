# PostV1IncidentsIncidentIdGenericChatMessages

Create a new generic chat message on an incident timeline. These are independent of any specific chat provider.

## Example Usage

```typescript
import { PostV1IncidentsIncidentIdGenericChatMessages } from "firehydrant-typescript-sdk/models/components";

let value: PostV1IncidentsIncidentIdGenericChatMessages = {
  body: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `body`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `occurredAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | ISO8601 timestamp for when the chat message occurred                                          |
| `voteDirection`                                                                               | [components.VoteDirection](../../models/components/votedirection.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |