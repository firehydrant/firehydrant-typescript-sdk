# ServiceDependencyEntity

ServiceDependencyEntity model

## Example Usage

```typescript
import { ServiceDependencyEntity } from "firehydrant-typescript-sdk/models/components";

let value: ServiceDependencyEntity = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `service`                                                                                     | [components.ServiceEntity](../../models/components/serviceentity.md)                          | :heavy_minus_sign:                                                                            | ServiceEntity model                                                                           |
| `connectedService`                                                                            | [components.ServiceEntity](../../models/components/serviceentity.md)                          | :heavy_minus_sign:                                                                            | ServiceEntity model                                                                           |