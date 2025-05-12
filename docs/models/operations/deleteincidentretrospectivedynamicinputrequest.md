# DeleteIncidentRetrospectiveDynamicInputRequest

## Example Usage

```typescript
import { DeleteIncidentRetrospectiveDynamicInputRequest } from "firehydrant/models/operations";

let value: DeleteIncidentRetrospectiveDynamicInputRequest = {
  retrospectiveId: "<id>",
  fieldId: "<id>",
  dynamicInputFieldId: "<id>",
  incidentId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `retrospectiveId`                            | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `fieldId`                                    | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `dynamicInputFieldId`                        | *string*                                     | :heavy_check_mark:                           | The ID of the dynamic input field to delete. |
| `incidentId`                                 | *string*                                     | :heavy_check_mark:                           | N/A                                          |