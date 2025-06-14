# CreateNuncConnectionRequest

## Example Usage

```typescript
import { CreateNuncConnectionRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateNuncConnectionRequest = {
  domain: "gloomy-igloo.info",
  conditionsNuncCondition: [
    "<value 1>",
    "<value 2>",
  ],
  conditionsConditionId: [
    "<value 1>",
  ],
  componentsInfrastructureType: [
    "<value 1>",
    "<value 2>",
  ],
  componentsInfrastructureId: [],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `domain`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `companyName`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `companyWebsite`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `companyTosUrl`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `greetingTitle`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `greetingBody`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `operationalMessage`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `title`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `conditionsNuncCondition`                                      | *string*[]                                                     | :heavy_check_mark:                                             | Status page condition to map your severity matrix condition to |
| `conditionsConditionId`                                        | *string*[]                                                     | :heavy_check_mark:                                             | Severity matrix condition id                                   |
| `componentsInfrastructureType`                                 | *string*[]                                                     | :heavy_check_mark:                                             | N/A                                                            |
| `componentsInfrastructureId`                                   | *string*[]                                                     | :heavy_check_mark:                                             | N/A                                                            |
| `primaryColor`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `secondaryColor`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `exposedFields`                                                | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `enableHistogram`                                              | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `uiVersion`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |