# UpdateSignalsAlertGroupingConfigurationSubstring

The type of strategy to use for grouping alerts

## Example Usage

```typescript
import { UpdateSignalsAlertGroupingConfigurationSubstring } from "firehydrant-typescript-sdk/models/components";

let value: UpdateSignalsAlertGroupingConfigurationSubstring = {
  fieldName: "body",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `fieldName`                                                                                                                                | [components.UpdateSignalsAlertGroupingConfigurationFieldName](../../models/components/updatesignalsalertgroupingconfigurationfieldname.md) | :heavy_check_mark:                                                                                                                         | The field to use for grouping alerts                                                                                                       |
| `values`                                                                                                                                   | *string*[]                                                                                                                                 | :heavy_check_mark:                                                                                                                         | Multiple values to use for grouping alerts                                                                                                 |
| `matchType`                                                                                                                                | [components.UpdateSignalsAlertGroupingConfigurationMatchType](../../models/components/updatesignalsalertgroupingconfigurationmatchtype.md) | :heavy_minus_sign:                                                                                                                         | Match type for multiple values                                                                                                             |