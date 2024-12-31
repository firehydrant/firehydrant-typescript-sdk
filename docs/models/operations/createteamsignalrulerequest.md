# CreateTeamSignalRuleRequest

## Example Usage

```typescript
import { CreateTeamSignalRuleRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateTeamSignalRuleRequest = {
  teamId: "<id>",
  postV1TeamsTeamIdSignalRules: {
    name: "<value>",
    expression: "<value>",
    targetType: "User",
    targetId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `postV1TeamsTeamIdSignalRules`                                                                     | [components.PostV1TeamsTeamIdSignalRules](../../models/components/postv1teamsteamidsignalrules.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |