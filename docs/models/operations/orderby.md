# OrderBy

Sort runbooks by their updated date or name. Accepts 'updated_at', 'name', and 'created_at'.

## Example Usage

```typescript
import { OrderBy } from "firehydrant/models/operations";

let value: OrderBy = "name";
```

## Values

```typescript
"updated_at" | "name" | "created_at"
```