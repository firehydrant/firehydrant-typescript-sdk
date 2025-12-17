# CreateSignalsAlertGroupingConfigurationSubstring

The type of strategy to use for grouping alerts

## Example Usage

```typescript
import { CreateSignalsAlertGroupingConfigurationSubstring } from "firehydrant-typescript-sdk/models/components";

let value: CreateSignalsAlertGroupingConfigurationSubstring = {
  fieldName: "tags",
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
| `fieldName`                                                                                                                                | [components.CreateSignalsAlertGroupingConfigurationFieldName](../../models/components/createsignalsalertgroupingconfigurationfieldname.md) | :heavy_check_mark:                                                                                                                         | The field to use for grouping alerts                                                                                                       |
| `values`                                                                                                                                   | *string*[]                                                                                                                                 | :heavy_check_mark:                                                                                                                         | Multiple values to use for grouping alerts                                                                                                 |
| `matchType`                                                                                                                                | [components.CreateSignalsAlertGroupingConfigurationMatchType](../../models/components/createsignalsalertgroupingconfigurationmatchtype.md) | :heavy_minus_sign:                                                                                                                         | Match type for multiple values                                                                                                             |