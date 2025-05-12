# ServiceWithAllDependenciesEntity

ServiceWithAllDependenciesEntity model

## Example Usage

```typescript
import { ServiceWithAllDependenciesEntity } from "firehydrant/models/components";

let value: ServiceWithAllDependenciesEntity = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `childServiceDependencies`                                                                             | [components.ServiceChildDependencyEntity](../../models/components/servicechilddependencyentity.md)[]   | :heavy_minus_sign:                                                                                     | Services that depend on this service                                                                   |
| `parentServiceDependencies`                                                                            | [components.ServiceParentDependencyEntity](../../models/components/serviceparentdependencyentity.md)[] | :heavy_minus_sign:                                                                                     | Services that this service is dependent on                                                             |
| `serviceDependencies`                                                                                  | [components.ServiceDependency](../../models/components/servicedependency.md)[]                         | :heavy_minus_sign:                                                                                     | All dependencies. Can be one of: ServiceChildDependencyEntity, ServiceParentDependencyEntity           |