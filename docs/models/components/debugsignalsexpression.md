# DebugSignalsExpression

Debug Signals expressions

## Example Usage

```typescript
import { DebugSignalsExpression } from "firehydrant-typescript-sdk/models/components";

let value: DebugSignalsExpression = {
  expression: "<value>",
  signals: [],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `expression`                                             | *string*                                                 | :heavy_check_mark:                                       | CEL expression                                           |
| `signals`                                                | [components.Signal](../../models/components/signal.md)[] | :heavy_check_mark:                                       | List of signals to evaluate rule expression against      |