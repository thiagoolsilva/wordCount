/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { BaseTextParse } from "../BaseTextParse";
import { RawText } from "./RawText";
import { ConfigManager } from "../../config/ConfigManager";
import { LENGTH_INT_0, SPACE_STRING, EMPTY_STRING } from "../../utils/constants";

export class WordTextCountDecorator implements BaseTextParse {

    private rawText: RawText;

    constructor(rawText: RawText) {
        this.rawText = rawText;
    }

    parse(): string {
        // get an instance of configuration manager
        let configInstance = ConfigManager.getInstance();

        if (this.rawText.text) {
            // split out the strings by provided pattern
            const pattern = configInstance.pattern ? configInstance.pattern : SPACE_STRING;
            let splitContent = this.rawText.text.split(pattern);
            if (splitContent.length == LENGTH_INT_0) {
                throw new Error("The provided stream does not have a valid length");
            }
            // group all worlds by its content
            let _ = require("underscore");
            let parsedObject = _
                .chain(splitContent)
                // remove any special characters, white spaces and transform the stream to lower case
                .map((value: string) => value.toLowerCase().trim().replace(/[^\w\s]/gi, ''))
                .filter( (value:string) => value !== EMPTY_STRING)
                // count all found words
                .countBy()
                // transform the objects to a custom one
                .map((value: string, key: string) => { return { word: key, count: value } })
                .sortBy("count")
                // sort descending
                .reverse()
                // transform the result to a simple json
                .map((value: any) => { return { [value.word]: value.count } })
                .value();

            return parsedObject;
        } else {
            throw new Error("No content found on stream");
        }
    }
}