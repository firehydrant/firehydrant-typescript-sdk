# PostV1SignalsDebugger

## Example Usage

```typescript
import { PostV1SignalsDebugger } from "firehydrant-typescript-sdk/models/components";

let value: PostV1SignalsDebugger = {
  expression: "<value>",
  signals: [
    {},
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `expression`                                               | *string*                                                   | :heavy_check_mark:                                         | CEL expression                                             |
| `signals`                                                  | [components.Signals](../../models/components/signals.md)[] | :heavy_check_mark:                                         | List of signals to evaluate rule expression against        |