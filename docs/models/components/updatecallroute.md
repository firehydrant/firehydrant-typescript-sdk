# UpdateCallRoute

Update a call route by ID

## Example Usage

```typescript
import { UpdateCallRoute } from "firehydrant-typescript-sdk/models/components";

let value: UpdateCallRoute = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | Name of the call route                                                                         |
| `routingMode`                                                                                  | [components.UpdateCallRouteRoutingMode](../../models/components/updatecallrouteroutingmode.md) | :heavy_minus_sign:                                                                             | Routing mode for the call route                                                                |
| `connectMode`                                                                                  | [components.UpdateCallRouteConnectMode](../../models/components/updatecallrouteconnectmode.md) | :heavy_minus_sign:                                                                             | Connect mode for the call route                                                                |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Description of the call route                                                                  |
| `greetingMessage`                                                                              | *string*                                                                                       | :heavy_minus_sign:                                                                             | Greeting message for the call route                                                            |
| `steps`                                                                                        | [components.UpdateCallRouteStep](../../models/components/updatecallroutestep.md)[]             | :heavy_minus_sign:                                                                             | Steps for the call route                                                                       |
| `target`                                                                                       | [components.UpdateCallRouteTarget](../../models/components/updatecallroutetarget.md)           | :heavy_minus_sign:                                                                             | Target for the call route (required unless connect_mode is direct_dial)                        |