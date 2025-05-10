# UpdateIncidentAlertPrimaryRequest

## Example Usage

```typescript
import { UpdateIncidentAlertPrimaryRequest } from "firehydrant/models/operations";

let value: UpdateIncidentAlertPrimaryRequest = {
  incidentAlertId: "<id>",
  incidentId: "<id>",
  updateIncidentAlertPrimary: {
    primary: false,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `incidentAlertId`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `incidentId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updateIncidentAlertPrimary`                                                                   | [components.UpdateIncidentAlertPrimary](../../models/components/updateincidentalertprimary.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |