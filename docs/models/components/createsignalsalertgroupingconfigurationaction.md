# CreateSignalsAlertGroupingConfigurationAction

The action to take when grouping alerts

## Example Usage

```typescript
import { CreateSignalsAlertGroupingConfigurationAction } from "firehydrant-typescript-sdk/models/components";

let value: CreateSignalsAlertGroupingConfigurationAction = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `link`                                                                                                                         | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Link the alerts and do not notify anyone                                                                                       |
| `fyi`                                                                                                                          | [components.CreateSignalsAlertGroupingConfigurationFyi](../../models/components/createsignalsalertgroupingconfigurationfyi.md) | :heavy_minus_sign:                                                                                                             | Send FYI notification                                                                                                          |