# CreateSignalsEventSourceExamplePayload

Example payload as input to transpose function

## Example Usage

```typescript
import { CreateSignalsEventSourceExamplePayload } from "firehydrant-typescript-sdk/models/components";

let value: CreateSignalsEventSourceExamplePayload = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | [components.Headers](../../models/components/headers.md)                                           | :heavy_minus_sign:                                                                                 | Hash of HTTP headers with values as Array, e.g. { 'Content-Type' => ['application/json'] }         |
| `data`                                                                                             | [components.CreateSignalsEventSourceData](../../models/components/createsignalseventsourcedata.md) | :heavy_minus_sign:                                                                                 | JSON body of request.                                                                              |