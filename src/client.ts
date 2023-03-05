import { BaseApiMethods } from "./builtInMethods";
import { ApiMethodData, ApiRequestBody } from "./types";

export class KerbalWebProgramClient<T extends ApiMethodData = BaseApiMethods> {
	constructor(public transport: Transport) {}

	makeRequest<RequestType extends T>(
		action: RequestType["name"],
		parameters: RequestType["parameters"]
	): Promise<RequestType["response"]> {
		return this.transport.sendRequest({
			Action: action,
			parameters,
		});
	}
}

export interface Transport {
	sendRequest: (requestBody: Omit<ApiRequestBody, "ID">) => Promise<any>;
}
