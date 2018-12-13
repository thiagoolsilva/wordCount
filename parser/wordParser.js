/**
 * Copyright (c) 2018  Thiago Lopes da Silva
 * All Rights Reserved.
 */

const moduleFileManager = require("../utils/fileManager"),
    propertyManager = new (require("../utils/propertyManager"))(),
    constants = require("../utils/constants");

/**
 * This class is used to parse the provided stream
 */
class WordParser {

    /**
     * Initialize the parse
     * @returns the parsed object
     */
    async initParse() {
        // get all properties from properties's file
        let pattern = propertyManager.getPropertyValue(constants.PATTERN_PROPERTY);
        let filepath = propertyManager.getPropertyValue(constants.FILEPATH_PROPERTY);

        // initialize the fileManager
        let fileManager = new moduleFileManager(filepath);
        let data = await fileManager.readAsyncContentFromFile();

        let parseObject = executeParse(data, pattern);
        return parseObject;
    }
}

/**
 * Execute the parse logic
 * @param {string} content content
 */
function executeParse(content, pattern) {
    if (content) {
        // split out the strings by provided pattern
        let splitContent = content.split(pattern);
        if (splitContent.count == 0) {
            throw new Error("[invalid content pattern]:Check if your file has the expected pattern as configured in configuration.properties");
        }
        // group all worlds by its content
        let _ = require("underscore");
        let parsedObject = _.chain(splitContent)
            // remove any special characters, white spaces and transform the stream to lower case
            .map((value) => value.toLowerCase().trim().replace(/[^\w\s]/gi, ''))
            // count all found words
            .countBy()
            // transform the objects to a custom one
            .map((value, key) => { return { word: key, count: value } })
            .sortBy("count")
            // sort descending
            .reverse()
            // transform the result to a simple json
            .map((value) => { return { [value.word]: value.count } })
            .value();

        return parsedObject;
    } else {
        throw new Error("No content found on stream");
    }
}

// export the module
module.exports = WordParser;
