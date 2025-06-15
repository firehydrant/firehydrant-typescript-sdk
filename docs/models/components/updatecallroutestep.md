# UpdateCallRouteStep

## Example Usage

```typescript
import { UpdateCallRouteStep } from "firehydrant-typescript-sdk/models/components";

let value: UpdateCallRouteStep = {
  targetType: "User",
  targetId: "<id>",
  timeout: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `targetType`                                                                                 | [components.UpdateCallRouteTargetType](../../models/components/updatecallroutetargettype.md) | :heavy_check_mark:                                                                           | Type of target                                                                               |
| `targetId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the target                                                                             |
| `timeout`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | Timeout in seconds for the step                                                              |