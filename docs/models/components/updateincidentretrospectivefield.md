# UpdateIncidentRetrospectiveField

Update retrospective field value

## Example Usage

```typescript
import { UpdateIncidentRetrospectiveField } from "firehydrant-typescript-sdk/models/components";

let value: UpdateIncidentRetrospectiveField = {
  value: 72658,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `dynamicInputFieldId`                        | *string*                                     | :heavy_minus_sign:                           | The ID of the dynamic input field to update. |
| `value`                                      | *number*                                     | :heavy_check_mark:                           | The value to set for the field.              |