/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ISourceReader } from "../source/ISourceReader";
import { IExtractBibRegex } from "../bibtext/IExtractBibRegex";
import { LENGTH_INT_0, COMMA_STRING } from "../utils/constants";
import { TextFactory } from "../parser/TextFactory";
import { ConfigManagerBuilder } from "./ConfigManagerBuilder";

export class ConfigManager {

    private readonly bibTextManager: IExtractBibRegex;
    private readonly sourceReader: ISourceReader;
    private readonly algorithmType: string;

    constructor(builder: ConfigManagerBuilder) {
        this.bibTextManager = builder.bibTextAlgoritm();
        this.sourceReader = builder.sourceType();
        this.algorithmType = builder.algoritmType();
    }

    /**
     * Start to parse the provided bibtext file
     * @param bibFilePath bibFilePath
     */
    async startParse(bibFilePath: string): Promise<any> {
        // configure all keywords properties found on provided bibtext file
        await this.configureKeywordsFile(bibFilePath);

        // Execute the parse algorithm
        let rawData = await this.sourceReader.rawStream();
        let algorith = TextFactory.createFactory(this.algorithmType, rawData);
        let algorithmResult = algorith.parse();

        // delete the cache file
        this.sourceReader.deleteFile();

        // return the algoritm result to client
        return algorithmResult ? algorithmResult : "No word found on provided file";
    }

    /**
     * Get all keywords from provided bibTextFile
     * @param bibFilePath bibFilePath
     */
    private async configureKeywordsFile(bibFilePath: string) {
        let rawData = await this.sourceReader.rawStream(bibFilePath);
        let keywords = this.bibTextManager.extractRawData(rawData);

        //save extracted keywords to temp file
        if (keywords && keywords.length > LENGTH_INT_0) {
            for (let count = LENGTH_INT_0; count < keywords.length; count++) {
                await this.sourceReader.writteToFile(keywords[count]);
                await this.sourceReader.writteToFile(COMMA_STRING);
            }
        }
    }

}
