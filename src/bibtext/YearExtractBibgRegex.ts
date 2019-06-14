/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { IExtractBibRegex } from "./IExtractBibRegex";
import { Logging } from "../logging/Logging";

export class YearExtractBibgRegex implements IExtractBibRegex {

    /**
     * Extract all years value from bibtext file
     * @param rawData rawData in bibtext format
     */
    extractRawData(rawData?: string): string[] {
        var result: string[] = [];
        if (rawData) {
            var bibtexParse = require('bibtex2json');
            var yearsResultSet = bibtexParse.toJSON(rawData)
                .filter((value: any) => value.entryTags.year)
                .map((value: any) => { return value.entryTags.year });
            if (yearsResultSet.length) {
                result.push(yearsResultSet);
            }

            Logging.simpleLog(`yearsResultSet=>${yearsResultSet}`);
        }
        return result as string[];
    }

}