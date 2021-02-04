import {Container} from 'inversify'
import {Engine} from "./Engine";
import {Car} from "./Car";


const container = new Container();

container.bind<Engine>(Engine).toSelf();
container.bind<Car>(Car).toSelf()

container.bind<string>('tableName').toDynamicValue(context => {
	const named = context.currentRequest.parentRequest?.target.getNamedTag()?.value
	let tableName;
	switch (named) {
		case 'table1':
			tableName = process.env.TEST;
			break;
		case 'table2':
			tableName = process.env.TESTER;
			break;
		default:
			console.log("Unknown tableName setting to empty string");
			tableName='';
	}

	return tableName
});

export default container
