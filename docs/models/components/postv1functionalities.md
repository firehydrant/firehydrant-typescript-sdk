# PostV1Functionalities

Creates a functionality for the organization

## Example Usage

```typescript
import { PostV1Functionalities } from "firehydrant-typescript-sdk/models/components";

let value: PostV1Functionalities = {
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `services`                                                                     | [components.Services](../../models/components/services.md)[]                   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `labels`                                                                       | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | A hash of label keys and values                                                |
| `alertOnAdd`                                                                   | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `autoAddRespondingTeam`                                                        | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `externalResources`                                                            | [components.ExternalResources](../../models/components/externalresources.md)[] | :heavy_minus_sign:                                                             | An array of external resources to attach to this service.                      |
| `links`                                                                        | [components.Links](../../models/components/links.md)[]                         | :heavy_minus_sign:                                                             | An array of links to associate with this service                               |
| `owner`                                                                        | [components.Owner](../../models/components/owner.md)                           | :heavy_minus_sign:                                                             | An object representing a Team that owns the service                            |
| `teams`                                                                        | [components.Teams](../../models/components/teams.md)[]                         | :heavy_minus_sign:                                                             | An array of teams to attach to this service.                                   |