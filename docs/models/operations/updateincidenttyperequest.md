# UpdateIncidentTypeRequest

## Example Usage

```typescript
import { UpdateIncidentTypeRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateIncidentTypeRequest = {
  id: "<id>",
  patchV1IncidentTypesId: {
    name: "<value>",
    template: {},
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `patchV1IncidentTypesId`                                                               | [components.PatchV1IncidentTypesId](../../models/components/patchv1incidenttypesid.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |