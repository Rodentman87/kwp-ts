# KWP Client

This is a simple TypeScript client implementation for KerbalWebProgram, and provides a simple abstraction over the API's structure.

## Usage

A simple client using the HTTP transport:

```ts
import { KerbalWebProgramClient, HTTPTransport } from "kwp-ts";

const transport = new HTTPTransport("http://localhost:8080");
const client = new KerbalWebProgramClient(transport);

const kerbinData = await client.makeRequest("getCelestialBodyData", {
	name: "Kerbin",
});
```

Adding extra method types:

```ts
import {
	KerbalWebProgramClient,
	HTTPTransport,
	BaseApiMethods,
	ApiMethodData,
} from "kwp-ts";

interface MyCustomMethod extends ApiMethodData {
	name: "myCustomMethod";
	parameters: {
		param1: string;
		param2: number;
	};
	response: {
		data1: string;
		data2: number;
	};
}

const transport = new HTTPTransport("http://localhost:8080");
const client = new KerbalWebProgramClient<BaseApiMethods | MyCustomMethod>(
	transport
);
```

## TODO

- [ ] Add tests
- [ ] Add WebSocket transport
  - [ ] Types for WebSocket events
