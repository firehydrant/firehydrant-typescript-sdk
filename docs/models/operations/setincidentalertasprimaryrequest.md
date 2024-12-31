# SetIncidentAlertAsPrimaryRequest

## Example Usage

```typescript
import { SetIncidentAlertAsPrimaryRequest } from "firehydrant-typescript-sdk/models/operations";

let value: SetIncidentAlertAsPrimaryRequest = {
  incidentAlertId: "<id>",
  incidentId: "<id>",
  patchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary: {
    primary: false,
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `incidentAlertId`                                                                                                                                      | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `incidentId`                                                                                                                                           | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `patchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary`                                                                                               | [components.PatchV1IncidentsIncidentIdAlertsIncidentAlertIdPrimary](../../models/components/patchv1incidentsincidentidalertsincidentalertidprimary.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |