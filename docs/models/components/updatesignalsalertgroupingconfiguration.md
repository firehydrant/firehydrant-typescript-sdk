# UpdateSignalsAlertGroupingConfiguration

Update a Signals alert grouping rule for the organization.

## Example Usage

```typescript
import { UpdateSignalsAlertGroupingConfiguration } from "firehydrant-typescript-sdk/models/components";

let value: UpdateSignalsAlertGroupingConfiguration = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `strategy`                                                                                                                               | [components.UpdateSignalsAlertGroupingConfigurationStrategy](../../models/components/updatesignalsalertgroupingconfigurationstrategy.md) | :heavy_minus_sign:                                                                                                                       | The strategy to use for grouping alerts                                                                                                  |
| `action`                                                                                                                                 | [components.UpdateSignalsAlertGroupingConfigurationAction](../../models/components/updatesignalsalertgroupingconfigurationaction.md)     | :heavy_minus_sign:                                                                                                                       | The action to take when grouping alerts                                                                                                  |
| `referenceAlertTimePeriod`                                                                                                               | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | How long to group alerts for                                                                                                             |