# EnvironmentEntryEntity

EnvironmentEntryEntity model

## Example Usage

```typescript
import { EnvironmentEntryEntity } from "firehydrant-typescript-sdk/models/components";

let value: EnvironmentEntryEntity = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | UUID of the Environment                                                                       |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the Environment                                                                       |
| `slug`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Slug of the Environment                                                                       |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the Environment                                                                |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the environment was updated                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the environment was created                                                          |
| `activeIncidents`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | List of active incident guids                                                                 |
| `externalResources`                                                                           | [components.ExternalResourceEntity](../../models/components/externalresourceentity.md)[]      | :heavy_minus_sign:                                                                            | Information about known linkages to representations of services outside of FireHydrant.       |