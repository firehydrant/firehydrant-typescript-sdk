# PatchV1SeverityMatrixData

## Example Usage

```typescript
import { PatchV1SeverityMatrixData } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1SeverityMatrixData = {
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