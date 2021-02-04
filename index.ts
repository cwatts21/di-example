import "reflect-metadata"
import container from './container.config'
import {Driver, Driver2} from "./Driver";

const driver = container.resolve(Driver);
const driver2 = container.resolve(Driver2)
driver.drive();
driver2.drive();
