import { injectable } from "inversify";

@injectable()
export class Engine{
	constructor() {
	}
	start(){
		console.log("Engine Started");
	}
}
