# PatchV1TeamsTeamId

Update a single team from its ID

## Example Usage

```typescript
import { PatchV1TeamsTeamId } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1TeamsTeamId = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `slackChannelId`                                                                                           | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The Slack channel ID that this team is associated with                                                     |
| `msTeamsChannel`                                                                                           | [components.PatchV1TeamsTeamIdMsTeamsChannel](../../models/components/patchv1teamsteamidmsteamschannel.md) | :heavy_minus_sign:                                                                                         | MS Teams channel identity for channel associated with this team                                            |
| `memberships`                                                                                              | [components.PatchV1TeamsTeamIdMemberships](../../models/components/patchv1teamsteamidmemberships.md)[]     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |