import {injectable, named} from "inversify";
import {Car} from "./Car";


@injectable()
export class Driver{

	constructor(
		@named('test')private car: Car
	) {

	}
	drive(){
		this.car.start();
	}
}
