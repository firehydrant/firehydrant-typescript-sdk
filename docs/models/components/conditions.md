# Conditions

## Example Usage

```typescript
import { Conditions } from "firehydrant-typescript-sdk/models/components";

let value: Conditions = {
  conditionId: "<id>",
  statuspageioCondition: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `conditionId`                | *string*                     | :heavy_check_mark:           | FireHydrant condition id     |
| `statuspageioCondition`      | *string*                     | :heavy_check_mark:           | Statuspage.io condition name |