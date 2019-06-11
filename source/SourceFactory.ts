
/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ISourceReader } from "./ISourceReader";
import { PlainTextSource } from "./impl/PlainTextSource";
import { WORD_COUNT_ALGORITH, WORD_NUMBER_COUNT_ALGORITH } from "../utils/constants";

export class SourceFactory {

    static createFactory(algorithmType: string) {
        if (algorithmType == WORD_COUNT_ALGORITH) {

        } else if (algorithmType == WORD_NUMBER_COUNT_ALGORITH) {

        } else {
            throw new Error("Algorithm not found.");
        }
    }
}