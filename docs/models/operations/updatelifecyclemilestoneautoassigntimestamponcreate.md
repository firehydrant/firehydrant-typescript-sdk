# UpdateLifecycleMilestoneAutoAssignTimestampOnCreate

The setting for auto-assigning the milestone's timestamp during incident declaration

## Example Usage

```typescript
import { UpdateLifecycleMilestoneAutoAssignTimestampOnCreate } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateLifecycleMilestoneAutoAssignTimestampOnCreate =
  "only_set_on_manual_create";
```

## Values

```typescript
"always_set_on_create" | "only_set_on_manual_create" | "never_set_on_create"
```