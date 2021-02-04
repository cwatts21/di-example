import {Container} from 'inversify'
import {Engine} from "./Engine";
import {Car, ProdCar, TestCar} from "./Car";
import {Factory, TYPES} from './interfaces';


const container = new Container();

container.bind<Engine>(Engine).toSelf();
container.bind<Car>(Car).to(TestCar).whenTargetNamed('test');
container.bind<Car>(Car).to(ProdCar).whenTargetNamed('prod');
container.bind<string>('carName').toConstantValue(process.env.TEST).whenTargetNamed('test')
container.bind<string>('carName').toConstantValue('prod').whenTargetNamed('prod')
export default container
