/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { IExtractBibRegex } from "./IExtractBibRegex";
import { EMPTY_STRING, LENGTH_INT_0 } from "../utils/constants";

export class ExtractBibRegex implements IExtractBibRegex {

    private readonly ARTICLE_MARKDOWN = "@article";

    extractKeywordWords(rawData?: string): string[] | null {
        var result: RegExpMatchArray | null = [];
        if (rawData) {
            let _ = require("underscore");
            let articles = rawData.split(this.ARTICLE_MARKDOWN);
            let keywords = _.chain(articles)
                .filter((value: string) => value !== EMPTY_STRING)
                .map((value: string) => {
                    let regex = /(?<=keywords = \{)(.*?)(?=})/gim;
                    let normalizedStr = value.replace(/(\r\n|\n|\r)/gim, EMPTY_STRING)
                    let resultStr = regex.exec(normalizedStr);
                    return resultStr && resultStr.length > LENGTH_INT_0 ? resultStr[LENGTH_INT_0] : EMPTY_STRING;
                })
                .filter((value: string) => value !== EMPTY_STRING)
                .value();

            if(keywords && keywords.length > LENGTH_INT_0) {
                result.push(keywords);
            }
        }
        return result as string[];
    }

}