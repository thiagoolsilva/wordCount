/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { IExtractBibRegex } from "./IExtractBibRegex";
import { Logging } from "../logging/Logging";

export class KeywordExtractBibRegex implements IExtractBibRegex {

    extractRawData(rawData?: string): string[] | null {
        var result: string[] = [];
        if (rawData) {
            var bibtexParse = require('bibtex2json');
            var keywordsResultSet = bibtexParse.toJSON(rawData).map((value: any) => { return value.entryTags.keywords });

            Logging.simpleLog(`keywordsResultSet=>${keywordsResultSet}`);

            result.push(keywordsResultSet);
        }
        return result as string[];
    }

}