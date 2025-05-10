<!-- Start SDK Example Usage [usage] -->
```typescript
import { Firehydrant } from "firehydrant";

const firehydrant = new Firehydrant({
  apiKey: process.env["FIREHYDRANT_API_KEY"] ?? "",
});

async function run() {
  const result = await firehydrant.accountSettings.ping();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->