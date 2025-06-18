# CreateSignalsAlertGroupingConfigurationSubstring

The type of strategy to use for grouping alerts

## Example Usage

```typescript
import { CreateSignalsAlertGroupingConfigurationSubstring } from "firehydrant-typescript-sdk/models/components";

let value: CreateSignalsAlertGroupingConfigurationSubstring = {
  fieldName: "tags",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `fieldName`                                                                                                                                | [components.CreateSignalsAlertGroupingConfigurationFieldName](../../models/components/createsignalsalertgroupingconfigurationfieldname.md) | :heavy_check_mark:                                                                                                                         | The field to use for grouping alerts                                                                                                       |
| `value`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The value to use for grouping alerts                                                                                                       |