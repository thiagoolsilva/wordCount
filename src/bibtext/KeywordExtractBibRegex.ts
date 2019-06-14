/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { IExtractBibRegex } from "./IExtractBibRegex";
import { Logging } from "../logging/Logging";

export class KeywordExtractBibRegex implements IExtractBibRegex {

    extractRawData(rawData?: string): string[] {
        var result: string[] = [];
        if (rawData) {
            var bibtexParse = require('bibtex2json');
            var keywordsResultSet = bibtexParse.toJSON(rawData)
                .filter((value: any) => value.entryTags.keywords)
                .map((value: any) => { return value.entryTags.keywords });
            if (keywordsResultSet.length) {
                result.push(keywordsResultSet);
            }
            Logging.simpleLog(`keywordsResultSet=>${keywordsResultSet}`);
        }
        return result as string[];
    }

}