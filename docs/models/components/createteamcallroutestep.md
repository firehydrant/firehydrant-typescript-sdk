# CreateTeamCallRouteStep

## Example Usage

```typescript
import { CreateTeamCallRouteStep } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamCallRouteStep = {
  targetType: "User",
  targetId: "<id>",
  timeout: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `targetType`                                                                                         | [components.CreateTeamCallRouteTargetType](../../models/components/createteamcallroutetargettype.md) | :heavy_check_mark:                                                                                   | Type of target                                                                                       |
| `targetId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the target                                                                                     |
| `timeout`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | Timeout in seconds for the step                                                                      |