# UpdateSignalsAlertGroupingConfigurationAction

The action to take when grouping alerts

## Example Usage

```typescript
import { UpdateSignalsAlertGroupingConfigurationAction } from "firehydrant-typescript-sdk/models/components";

let value: UpdateSignalsAlertGroupingConfigurationAction = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `link`                                                                                                                         | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Link the alerts and do not notify anyone                                                                                       |
| `fyi`                                                                                                                          | [components.UpdateSignalsAlertGroupingConfigurationFyi](../../models/components/updatesignalsalertgroupingconfigurationfyi.md) | :heavy_minus_sign:                                                                                                             | Send FYI notification                                                                                                          |