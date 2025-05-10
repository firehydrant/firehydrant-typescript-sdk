# CreateLifecycleMilestoneAutoAssignTimestampOnCreate

The setting for auto-assigning the milestone's timestamp during incident declaration

## Example Usage

```typescript
import { CreateLifecycleMilestoneAutoAssignTimestampOnCreate } from "firehydrant/models/operations";

let value: CreateLifecycleMilestoneAutoAssignTimestampOnCreate =
  "never_set_on_create";
```

## Values

```typescript
"always_set_on_create" | "only_set_on_manual_create" | "never_set_on_create"
```