# OrderDirection

Allows assigning a direction to how the specified `order_by` parameter is sorted. This parameter must be paired with `order_by` and does nothing on its own.

## Example Usage

```typescript
import { OrderDirection } from "firehydrant/models/operations";

let value: OrderDirection = "asc";
```

## Values

```typescript
"asc" | "desc"
```