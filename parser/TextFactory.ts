/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { BaseTextParse } from "./BaseTextParse";
import { WORD_COUNT_ALGORITH, WORD_NUMBER_COUNT_ALGORITH } from "../utils/constants";
import { WordTextCountDecorator } from "./decorator/WordTextCountDecorator";
import { RawText } from "./decorator/RawText";
import { WordNumberCountDecoractor } from "./decorator/WordNumberCountDecoractor";

export class TextFactory {

    static createFactory(parseType: string, rawText: string): BaseTextParse {
        if (parseType == WORD_COUNT_ALGORITH) {
            return new WordTextCountDecorator(new RawText(rawText));
        } else if (parseType == WORD_NUMBER_COUNT_ALGORITH) {
            return new WordNumberCountDecoractor(new RawText(rawText));
        } else {
            return new WordTextCountDecorator(new RawText(rawText));;
        }
    }
}
