# CreateTeamCallRoute

Create a call route for a team

## Example Usage

```typescript
import { CreateTeamCallRoute } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamCallRoute = {
  name: "<value>",
  phoneNumber: "359.273.3223",
  routingMode: "ROUTING_MODE_TAKE_MESSAGE",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Name of the call route                                                                                 |
| `phoneNumber`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | Phone number to route calls to                                                                         |
| `routingMode`                                                                                          | [components.CreateTeamCallRouteRoutingMode](../../models/components/createteamcallrouteroutingmode.md) | :heavy_check_mark:                                                                                     | Routing mode for the call route                                                                        |
| `connectMode`                                                                                          | [components.CreateTeamCallRouteConnectMode](../../models/components/createteamcallrouteconnectmode.md) | :heavy_minus_sign:                                                                                     | Connect mode for the call route                                                                        |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Description of the call route                                                                          |
| `greetingMessage`                                                                                      | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Greeting message for the call route                                                                    |
| `steps`                                                                                                | [components.CreateTeamCallRouteStep](../../models/components/createteamcallroutestep.md)[]             | :heavy_minus_sign:                                                                                     | Steps for the call route                                                                               |
| `target`                                                                                               | [components.CreateTeamCallRouteTarget](../../models/components/createteamcallroutetarget.md)           | :heavy_minus_sign:                                                                                     | Target for the call route (required unless connect_mode is direct_dial)                                |