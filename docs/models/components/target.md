# Target

The target that the email target will notify. This object must contain a `type`
field that specifies the type of target and an `id` field that specifies the ID of
the target. The `type` field must be one of "escalation_policy", "on_call_schedule",
"team", "user", or "slack_channel".


## Example Usage

```typescript
import { Target } from "firehydrant-typescript-sdk/models/components";

let value: Target = {
  type: "OnCallSchedule",
  id: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.PostV1SignalsEmailTargetsType](../../models/components/postv1signalsemailtargetstype.md) | :heavy_check_mark:                                                                                   | The type of target that the inbound email will notify when matched.                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the target that the inbound email will notify when matched.                                |