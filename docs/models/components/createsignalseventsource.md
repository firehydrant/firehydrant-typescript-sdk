# CreateSignalsEventSource

Create a Signals event source for the authenticated user.

## Example Usage

```typescript
import { CreateSignalsEventSource } from "firehydrant-typescript-sdk/models/components";

let value: CreateSignalsEventSource = {
  name: "<value>",
  slug: "<value>",
  examplePayload: {},
  javascript: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Name of the transposer                                                                                                 |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Description of the transposer                                                                                          |
| `slug`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Slug of the transposer                                                                                                 |
| `examplePayload`                                                                                                       | [components.CreateSignalsEventSourceExamplePayload](../../models/components/createsignalseventsourceexamplepayload.md) | :heavy_check_mark:                                                                                                     | Example payload as input to transpose function                                                                         |
| `javascript`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Javascript code to convert payload into Signal object                                                                  |