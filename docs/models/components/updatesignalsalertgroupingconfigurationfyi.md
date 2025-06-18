# UpdateSignalsAlertGroupingConfigurationFyi

Send FYI notification

## Example Usage

```typescript
import { UpdateSignalsAlertGroupingConfigurationFyi } from "firehydrant-typescript-sdk/models/components";

let value: UpdateSignalsAlertGroupingConfigurationFyi = {
  slackChannelIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `slackChannelIds`                                 | *string*[]                                        | :heavy_check_mark:                                | The slack channel ids to send the notification to |