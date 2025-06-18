# CreateSignalsAlertGroupingConfigurationFyi

Send FYI notification

## Example Usage

```typescript
import { CreateSignalsAlertGroupingConfigurationFyi } from "firehydrant-typescript-sdk/models/components";

let value: CreateSignalsAlertGroupingConfigurationFyi = {
  slackChannelIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `slackChannelIds`                                 | *string*[]                                        | :heavy_check_mark:                                | The slack channel ids to send the notification to |