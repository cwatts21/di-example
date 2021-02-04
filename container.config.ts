import {Container} from 'inversify'
import {Engine} from "./Engine";
import {Car} from "./Car";


const container = new Container();

container.bind<Engine>(Engine).toSelf();
//Doing it this way takes the creation of Car out of the hands of inversify
//which means if the signature changes it has to be updated here as well
container.bind<Car>(Car).toDynamicValue(context => {
	const named = context.currentRequest.target.getNamedTag().value
	let tableName;
	switch (named) {
		case 'table1':
			tableName = process.env.TEST;
			break;
		case 'table2':
			tableName = process.env.TESTER;
			break;
		default:
			throw new Error("Unknown table name for Car");
	}
	const engine = context.container.get(Engine)
	return new Car(tableName, engine)
});

export default container
