import "reflect-metadata"
import container from './container.config'
import {Driver} from "./Driver";

const driver = container.resolve(Driver);

driver.drive();
