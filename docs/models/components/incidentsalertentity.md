# IncidentsAlertEntity

Incidents_AlertEntity model

## Example Usage

```typescript
import { IncidentsAlertEntity } from "firehydrant-typescript-sdk/models/components";

let value: IncidentsAlertEntity = {
  alert: {
    signalRule: null,
    parentAlerts: [
      {
        signalRule: {
          deduplicationExpiry: "PT1H",
        },
      },
    ],
    childAlerts: [
      {
        signalRule: null,
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `alert`                                                                                      | [components.NullableAlertsAlertEntity](../../models/components/nullablealertsalertentity.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `primary`                                                                                    | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | whether or not this is the primary alert for this incident                                   |