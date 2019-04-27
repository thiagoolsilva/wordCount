/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { BaseTextParse } from "../BaseTextParse";
import { RawText } from "./RawText";
import { ConfigManager } from "../../config/ConfigManager";
import { SPACE_STRING, LENGTH_INT_0, EMPTY_STRING } from "../../utils/constants";

export class WordNumberCountDecoractor implements BaseTextParse {

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
            let normalizedArray = _.chain(splitContent)
                .map((value: string) => {
                    // remove special characters
                    return value.toLowerCase().trim().replace(/[^\w\s]/gi, EMPTY_STRING)
                })
                .map((value: string) => {
                    // remove characters
                    return value.replace(new RegExp("[a-zA-Z]*", "g"), EMPTY_STRING);
                })
                .filter((value: string) => value !== EMPTY_STRING)
                .reduce((value1: string, value2: string) => Number(value1) + Number(value2))
                .value();

            return "Total: " + normalizedArray;
        }
        return EMPTY_STRING;
    }

}