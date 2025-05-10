# CreateSignalsEmailTargetType

The type of target that the inbound email will notify when matched.

## Example Usage

```typescript
import { CreateSignalsEmailTargetType } from "firehydrant/models/components";

let value: CreateSignalsEmailTargetType = "Team";
```

## Values

```typescript
"Team" | "EntireTeam" | "EscalationPolicy" | "OnCallSchedule" | "User" | "SlackChannel" | "Webhook"
```