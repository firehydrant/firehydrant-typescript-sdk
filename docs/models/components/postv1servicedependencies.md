# PostV1ServiceDependencies

Creates a service dependency relationship between two services

## Example Usage

```typescript
import { PostV1ServiceDependencies } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ServiceDependencies = {
  serviceId: "<id>",
  connectedServiceId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `serviceId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `connectedServiceId`                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `notes`                                                | *string*                                               | :heavy_minus_sign:                                     | A note to describe the service dependency relationship |