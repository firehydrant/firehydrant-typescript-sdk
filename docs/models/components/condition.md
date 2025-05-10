# Condition

## Example Usage

```typescript
import { Condition } from "firehydrant/models/components";

let value: Condition = {
  conditionId: "<id>",
  statuspageioCondition: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `conditionId`                | *string*                     | :heavy_check_mark:           | FireHydrant condition id     |
| `statuspageioCondition`      | *string*                     | :heavy_check_mark:           | Statuspage.io condition name |