import "reflect-metadata"
import container from './container.config'
import {Driver, Driver2} from "./Driver";
import {Car} from "./Car";

const driver = container.resolve(Driver);
const driver2 = container.resolve(Driver2);
//This will fail though but should be ok if never needed by itself
const test = container.resolve(Car)
driver.drive();
driver2.drive();
