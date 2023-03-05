export interface ApiRequestBody {
	ID: number;
	Action: string;
	parameters: Record<string, any>;
}

export interface ApiErrorMessage {
	ID: number;
	Type: "error";
	Error: Record<string, any>;
}

export interface ApiDataMessage<T = Record<string, any>> {
	ID: number;
	Type: "response";
	Data: T;
}

export interface ApiEventMessage<T = Record<string, any>> {
	Type: "event";
	Name: string;
	Data: T;
}

export interface ApiMethodData {
	name: string;
	parameters: Record<string, any>;
	response: Record<string, any>;
}
