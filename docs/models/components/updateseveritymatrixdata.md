# UpdateSeverityMatrixData

## Example Usage

```typescript
import { UpdateSeverityMatrixData } from "firehydrant/models/components";

let value: UpdateSeverityMatrixData = {
  severity: "<value>",
  impactId: "<id>",
  conditionId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `severity`         | *string*           | :heavy_check_mark: | Slug of a severity |
| `impactId`         | *string*           | :heavy_check_mark: | Impact id          |
| `conditionId`      | *string*           | :heavy_check_mark: | Condition id       |