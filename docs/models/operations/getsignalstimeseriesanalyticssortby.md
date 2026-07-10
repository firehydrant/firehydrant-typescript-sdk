# GetSignalsTimeseriesAnalyticsSortBy

String that determines how records are sorted

## Example Usage

```typescript
import { GetSignalsTimeseriesAnalyticsSortBy } from "firehydrant-typescript-sdk/models/operations";

let value: GetSignalsTimeseriesAnalyticsSortBy = "total_resolved_alerts";
```

## Values

```typescript
"total_opened_alerts" | "total_acked_alerts" | "total_incidents" | "total_billable_alerts" | "total_resolved_alerts" | "acked_percentage" | "incidents_percentage"
```