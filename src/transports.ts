import { Transport } from "./client";
import { KWPApiError } from "./errors";
import { ApiDataMessage, ApiErrorMessage, ApiRequestBody } from "./types";

export class HTTPTransport implements Transport {
	constructor(public apiUrl: string) {}

	async sendRequest(requestBody: Omit<ApiRequestBody, "ID">) {
		const response = await fetch(this.apiUrl, {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const body = (await response.json()) as ApiDataMessage | ApiErrorMessage;

		if (body.Type === "error") throw new KWPApiError(body.Error);

		return body.Data;
	}
}

// TODO Add a websocket transport
