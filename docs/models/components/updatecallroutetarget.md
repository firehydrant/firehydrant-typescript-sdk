# UpdateCallRouteTarget

Target for the call route (required unless connect_mode is direct_dial)

## Example Usage

```typescript
import { UpdateCallRouteTarget } from "firehydrant-typescript-sdk/models/components";

let value: UpdateCallRouteTarget = {
  type: "OnCallSchedule",
  id: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [components.UpdateCallRouteType](../../models/components/updatecallroutetype.md) | :heavy_check_mark:                                                               | Type of target                                                                   |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | ID of the target                                                                 |