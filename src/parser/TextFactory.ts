/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { BaseTextParse } from "./BaseTextParse";
import { WORD_COUNT_ALGORITH, YEAR_COUNT_ALGORITHM } from "../utils/constants";
import { WordTextCountDecorator } from "./decorator/WordTextCountDecorator";
import { RawText } from "./decorator/RawText";
import { NoAlgorithmFound } from "../error/NoAlgorithFound";

export class TextFactory {

    /**
     * Create the base text parse that will be used to handle raw data
     * @param parseType parseType 
     * @param rawText rawtext 
     * @returns The BasetextParse instance
     */
    static createFactory(parseType: string, rawText: string): BaseTextParse {
        if (parseType == WORD_COUNT_ALGORITH || parseType == YEAR_COUNT_ALGORITHM) {
            return new WordTextCountDecorator(new RawText(rawText));
        } else {
            throw new NoAlgorithmFound("Algoritm not found. Please check the documentation for more details.")
        }
    }
}
