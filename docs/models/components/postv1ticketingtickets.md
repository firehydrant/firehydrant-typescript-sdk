# PostV1TicketingTickets

Creates a ticket for a project

## Example Usage

```typescript
import { PostV1TicketingTickets } from "firehydrant-typescript-sdk/models/components";

let value: PostV1TicketingTickets = {
  summary: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `summary`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `relatedTo`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | Which incident this ticket is related to, in the format of 'incident/UUID'                |
| `projectId`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `state`                                                                                   | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `type`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `priorityId`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `tagList`                                                                                 | *string*[]                                                                                | :heavy_minus_sign:                                                                        | List of tags for the ticket                                                               |
| `remoteUrl`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | The remote URL for an existing ticket in a supported and configured ticketing integration |