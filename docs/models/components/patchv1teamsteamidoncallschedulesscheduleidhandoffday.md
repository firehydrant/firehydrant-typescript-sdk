# PatchV1TeamsTeamIdOnCallSchedulesScheduleIdHandoffDay

The day of the week on which on-call shifts should hand off, as its long-form name (e.g. "monday", "tuesday", etc). This value is only used if the strategy type is "weekly".

## Example Usage

```typescript
import { PatchV1TeamsTeamIdOnCallSchedulesScheduleIdHandoffDay } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1TeamsTeamIdOnCallSchedulesScheduleIdHandoffDay = "thursday";
```

## Values

```typescript
"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
```