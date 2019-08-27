/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { RawText } from "./RawText";
import { LENGTH_INT_0, EMPTY_STRING, COMMA_STRING } from "../../utils/constants";
import { TextDecorator } from "./TextDecorator";

export class WordTextCountDecorator extends TextDecorator {

    constructor(rawText:RawText){
        super(rawText);
    }

    parse(): string {
        if (this.rawText.text) {
            // split out the strings by provided pattern
            const pattern = COMMA_STRING;
            let splitContent = this.rawText.text.split(pattern);

            // group all worlds by its content
            let _ = require("underscore");
            let parsedObject = _
                .chain(splitContent)
                // remove any special characters, white spaces and transform the stream to lower case
                .map((value: string) => value.toLowerCase().trim().replace(/[^\w\s]/gi, ''))
                .filter( (value:string) => value && value !== EMPTY_STRING )
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
            return EMPTY_STRING;
        }
    }
}