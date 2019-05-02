/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ISourceReader } from "../source/ISourceReader";
import { IExtractBibRegex } from "../bibtext/IExtractBibRegex";
import { LENGTH_INT_0, COMMA_STRING } from "../utils/constants";
import { TextFactory } from "../parser/TextFactory";

export class ConfigManager {

    private bibTextManager: IExtractBibRegex;
    private sourceReader: ISourceReader;

    constructor(bibTextManager: IExtractBibRegex, sourceReader: ISourceReader) {
        this.bibTextManager = bibTextManager;
        this.sourceReader = sourceReader;
    }

    async startParse(algorithType: string, bibFilePath: string): Promise<any> {
        // configure all keywords properties found by provided bibtext file
        await this.configureKeywordsFile(bibFilePath);

        // Execute the parse algorithm
        let rawData = await this.sourceReader.rawStream();
        let algorith = TextFactory.createFactory(algorithType, rawData);
        let algorithmResult = algorith.parse();

        // delete the cache file
        this.sourceReader.deleteFile();

        // return the algoritm result to client
        return algorithmResult ? algorithmResult : "No word found by provided file";
    }

    private async configureKeywordsFile(bibFilePath: string) {
        let rawData = await this.sourceReader.rawStream(bibFilePath);
        let keywords = this.bibTextManager.extractKeywordWords(rawData);

        //save extracted keywords to temp file
        if (keywords && keywords.length > LENGTH_INT_0) {
            for (let count = LENGTH_INT_0; count < keywords.length; count++) {
                await this.sourceReader.writteToFile(keywords[count]);
                await this.sourceReader.writteToFile(COMMA_STRING);
            }
        }
    }

}
