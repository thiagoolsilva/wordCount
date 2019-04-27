/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import PropertiesReader from "properties-reader";
import {CONFIG_FILE_PATH} from "../utils/constants";

/**
 * This class will manage all values of property file
 */
export class ConfigUtil {

    /**
     * Return the value of provided value
     * @returns the value of property
     */
    getStringPropertyValue(fieldName:string):string {
        const propertyManager =  PropertiesReader(CONFIG_FILE_PATH);
        return  propertyManager.get(fieldName) as string;
    }

}