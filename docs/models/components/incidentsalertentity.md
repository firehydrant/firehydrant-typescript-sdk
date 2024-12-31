# IncidentsAlertEntity

Incidents_AlertEntity model

## Example Usage

```typescript
import { IncidentsAlertEntity } from "firehydrant-typescript-sdk/models/components";

let value: IncidentsAlertEntity = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `alert`                                                                      | [components.AlertsAlertEntity](../../models/components/alertsalertentity.md) | :heavy_minus_sign:                                                           | Alerts_AlertEntity model                                                     |
| `primary`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | whether or not this is the primary alert for this incident                   |