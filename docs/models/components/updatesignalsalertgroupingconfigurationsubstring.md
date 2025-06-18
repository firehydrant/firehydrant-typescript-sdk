# UpdateSignalsAlertGroupingConfigurationSubstring

The type of strategy to use for grouping alerts

## Example Usage

```typescript
import { UpdateSignalsAlertGroupingConfigurationSubstring } from "firehydrant-typescript-sdk/models/components";

let value: UpdateSignalsAlertGroupingConfigurationSubstring = {
  fieldName: "body",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `fieldName`                                                                                                                                | [components.UpdateSignalsAlertGroupingConfigurationFieldName](../../models/components/updatesignalsalertgroupingconfigurationfieldname.md) | :heavy_check_mark:                                                                                                                         | The field to use for grouping alerts                                                                                                       |
| `value`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The value to use for grouping alerts                                                                                                       |