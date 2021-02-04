import {Engine} from "./Engine";
import {inject, injectable, named, unmanaged} from "inversify";
import {TYPES} from "./interfaces";

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

@injectable()
export class TestCar extends Car{
	constructor( engine: Engine, @inject('carName') @named('test')name:string) {
		super(name, engine);
	}
}

@injectable()
export class ProdCar extends Car{
	constructor(@inject('carName')name:string, engine: Engine) {
		super(name, engine);
	}
}
