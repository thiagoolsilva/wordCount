/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { IExtractBibRegex } from "../bibtext/IExtractBibRegex";
import { ISourceReader } from "../source/ISourceReader";
import { KeywordExtractBibRegex } from "../bibtext/KeywordExtractBibRegex";
import { PlainTextSource } from "../source/impl/PlainTextSource";
import { WORD_COUNT_ALGORITH } from "../utils/constants";
import { ConfigManager } from "./ConfigManager";

export class ConfigManagerBuilder {

    private algorithmType: string;
    private bibTextManager: IExtractBibRegex;
    private sourceReader: ISourceReader;

    constructor() {
        this.algorithmType = WORD_COUNT_ALGORITH;
        this.bibTextManager = new KeywordExtractBibRegex();
        this.sourceReader = new PlainTextSource();
    }

    /**
     * Set the algoritm type
     * @param algorithmType algorith type
     */
    setAlgoritmType(algorithmType: string): ConfigManagerBuilder {
        this.algorithmType = algorithmType;
        return this;
    }

    /**
     * Retrieve the algoritm Type
     * @returns algoritmType
     */
    algoritmType(): string {
        return this.algorithmType;
    }

    /**
     * Set the source Type
     * @param sourceType source type
     * @returns the builder instance
     */
    setSourceType(sourceType: ISourceReader): ConfigManagerBuilder {
        this.sourceReader = sourceType;
        return this;
    }

    /**
     * Get the source reader 
     * @returns The source reader instance
     */
    sourceType(): ISourceReader {
        return this.sourceReader;
    }

    /**
     * Set the bibtextPattern
     * @param bibTextPattern bibtextpattern
     * @returns the builder instance
     */
    setBibTextAlgoritm(bibTextPattern: IExtractBibRegex): ConfigManagerBuilder {
        this.bibTextManager = bibTextPattern;
        return this;
    }

    /**
     * Set the bibregex algorithm
     */
    bibTextAlgoritm(): IExtractBibRegex {
        return this.bibTextManager;
    }

    /**
     * Create the configManager
     */
    build(): ConfigManager {
        return new ConfigManager(this);
    }

}