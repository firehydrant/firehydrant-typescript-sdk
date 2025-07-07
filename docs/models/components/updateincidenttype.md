# UpdateIncidentType

Update a single incident type from its ID

## Example Usage

```typescript
import { UpdateIncidentType } from "firehydrant-typescript-sdk/models/components";

let value: UpdateIncidentType = {
  name: "<value>",
  template: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | A description of the incident type                                                             |
| `template`                                                                                     | [components.UpdateIncidentTypeTemplate](../../models/components/updateincidenttypetemplate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |