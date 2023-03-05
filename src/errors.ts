export class KWPApiError extends Error {
	constructor(public data: Record<string, any>) {
		super("KWP API Error");
	}
}
