import {injectable, named} from "inversify";
import {Car} from "./Car";


@injectable()
export class Driver{

	constructor(
		@named('table1') private car: Car
	) {

	}
	drive(){
		console.log('--------Driver-------')
		this.car.start();
		console.log('---------------------')
	}
}

@injectable()
export class Driver2{

	constructor(
		@named('table2') private car: Car
	) {

	}
	drive(){
		console.log('--------Driver2-------')
		this.car.start();
		console.log('---------------------')
	}
}
