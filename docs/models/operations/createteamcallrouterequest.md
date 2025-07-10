# CreateTeamCallRouteRequest

## Example Usage

```typescript
import { CreateTeamCallRouteRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateTeamCallRouteRequest = {
  teamId: "<id>",
  createTeamCallRoute: {
    name: "<value>",
    phoneNumber: "1-465-223-9749",
    routingMode: "ROUTING_MODE_TAKE_MESSAGE",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `teamId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `createTeamCallRoute`                                                            | [components.CreateTeamCallRoute](../../models/components/createteamcallroute.md) | :heavy_check_mark:                                                               | N/A                                                                              |