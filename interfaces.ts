export interface IEngine{
	start(): void
}

export interface Factory<T>{
	(...args: any[]): T;
}

export const TYPES = {
	name: Symbol("name"),

}
