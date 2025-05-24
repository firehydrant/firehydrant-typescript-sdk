# GetTeamRequest

## Example Usage

```typescript
import { GetTeamRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GetTeamRequest = {
  teamId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `lite`                                                                         | *boolean*                                                                      | :heavy_minus_sign:                                                             | Boolean to determine whether to return a slimified version of the teams object |