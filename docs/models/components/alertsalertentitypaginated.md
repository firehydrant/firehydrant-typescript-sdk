# AlertsAlertEntityPaginated

Alerts_AlertEntityPaginated model

## Example Usage

```typescript
import { AlertsAlertEntityPaginated } from "firehydrant-typescript-sdk/models/components";

let value: AlertsAlertEntityPaginated = {
  data: [
    {
      signalRule: {
        deduplicationExpiry: "PT1H",
      },
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
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [components.AlertsAlertEntity](../../models/components/alertsalertentity.md)[]             | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [components.NullablePaginationEntity](../../models/components/nullablepaginationentity.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |