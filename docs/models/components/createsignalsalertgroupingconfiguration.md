# CreateSignalsAlertGroupingConfiguration

Create a Signals alert grouping rule for the organization.

## Example Usage

```typescript
import { CreateSignalsAlertGroupingConfiguration } from "firehydrant-typescript-sdk/models/components";

let value: CreateSignalsAlertGroupingConfiguration = {
  strategy: {},
  referenceAlertTimePeriod: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `strategy`                                                                                                                               | [components.CreateSignalsAlertGroupingConfigurationStrategy](../../models/components/createsignalsalertgroupingconfigurationstrategy.md) | :heavy_check_mark:                                                                                                                       | The strategy to use for grouping alerts                                                                                                  |
| `action`                                                                                                                                 | [components.CreateSignalsAlertGroupingConfigurationAction](../../models/components/createsignalsalertgroupingconfigurationaction.md)     | :heavy_minus_sign:                                                                                                                       | The action to take when grouping alerts                                                                                                  |
| `referenceAlertTimePeriod`                                                                                                               | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | How long to group alerts for                                                                                                             |