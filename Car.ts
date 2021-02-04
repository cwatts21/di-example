import {Engine} from "./Engine";
import {inject, injectable} from "inversify";

@injectable()
export class Car{
	constructor( @inject('tableName')private name:string, private engine: Engine ) {
	}
	start(){
		console.log(`Starting car: ${this.name}`)
		if(this.engine) {
			this.engine.start();
		}
	}
}


