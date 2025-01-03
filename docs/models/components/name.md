# Name

The components of the user's name

## Example Usage

```typescript
import { Name } from "firehydrant-typescript-sdk/models/components";

let value: Name = {
  familyName: "<value>",
  givenName: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `familyName`                                                        | *string*                                                            | :heavy_check_mark:                                                  | The family name of the User, or last name in most Western languages |
| `givenName`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The given name of the User, or first name in most Western languages |