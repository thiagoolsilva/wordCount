/**
 * Copyright (c) 2018  Thiago Lopes da Silva
 * All Rights Reserved.
 */

const propertiesReader = require('properties-reader')("./configuration.properties")

/**
 * This class will manage all values of property file
 */
class PropertyManager {

    /**
     * Return the value of provided value
     * @returns the value of property
     */
    getPropertyValue(fieldName) {
        return propertiesReader.get(fieldName);
    }
}

// export the module
module.exports = PropertyManager;