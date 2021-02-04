import {Engine} from "./Engine";
import {injectable} from "inversify";

@injectable()
export class Car{
	private readonly name: string;
	constructor( name:string, private engine: Engine ) {
		this.name=name;
	}
	start(){
		console.log(`Starting car: ${this.name}`)
		if(this.engine) {
			this.engine.start();
		}
	}
}


