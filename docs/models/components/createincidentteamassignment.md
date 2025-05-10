# CreateIncidentTeamAssignment

Assign a team for this incident

## Example Usage

```typescript
import { CreateIncidentTeamAssignment } from "firehydrant/models/components";

let value: CreateIncidentTeamAssignment = {
  teamId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `teamId`                                 | *string*                                 | :heavy_check_mark:                       | The team ID to associate to the incident |