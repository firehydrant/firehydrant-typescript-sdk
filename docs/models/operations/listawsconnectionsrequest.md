# ListAwsConnectionsRequest

## Example Usage

```typescript
import { ListAwsConnectionsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListAwsConnectionsRequest = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `page`                                           | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `perPage`                                        | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `awsAccountId`                                   | *string*                                         | :heavy_minus_sign:                               | AWS account ID containing the role to be assumed |
| `targetArn`                                      | *string*                                         | :heavy_minus_sign:                               | ARN of the role to be assumed                    |
| `externalId`                                     | *string*                                         | :heavy_minus_sign:                               | The external ID supplied when assuming the role  |