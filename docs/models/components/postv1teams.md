# PostV1Teams

Create a new team

## Example Usage

```typescript
import { PostV1Teams } from "firehydrant-typescript-sdk/models/components";

let value: PostV1Teams = {
  name: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `slug`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `slackChannelId`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | The Slack channel ID that this team is associated with                 |
| `msTeamsChannel`                                                       | [components.MsTeamsChannel](../../models/components/msteamschannel.md) | :heavy_minus_sign:                                                     | MS Teams channel identity for channel associated with this team        |
| `memberships`                                                          | [components.Memberships](../../models/components/memberships.md)[]     | :heavy_minus_sign:                                                     | N/A                                                                    |