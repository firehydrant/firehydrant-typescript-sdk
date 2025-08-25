# OrderBy

Sort runbooks by their updated date or name. Accepts 'updated_at', 'name', 'owner', 'last_executed_at', and 'created_at'.

## Example Usage

```typescript
import { OrderBy } from "firehydrant-typescript-sdk/models/operations";

let value: OrderBy = "created_at";
```

## Values

```typescript
"updated_at" | "name" | "created_at" | "last_executed_at" | "owner"
```