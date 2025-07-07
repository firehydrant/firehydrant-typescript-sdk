# CreateIncidentType

Create a new incident type

## Example Usage

```typescript
import { CreateIncidentType } from "firehydrant-typescript-sdk/models/components";

let value: CreateIncidentType = {
  name: "<value>",
  template: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | A description of the incident type                                                             |
| `template`                                                                                     | [components.CreateIncidentTypeTemplate](../../models/components/createincidenttypetemplate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |