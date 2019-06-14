/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ConfigManagerBuilder } from "./ConfigManagerBuilder";
import { KeywordExtractBibRegex } from "../bibtext/KeywordExtractBibRegex";
import { WORD_COUNT_ALGORITH, YEAR_COUNT_ALGORITHM } from "../utils/constants";
import { YearExtractBibgRegex } from "../bibtext/YearExtractBibgRegex";
import { ConfigManager } from "./ConfigManager";

export class ConfigManagerFactory {

    /**
     * create a new instance of ConfigManager by provided parameters
     * @param algorithmType algorithm type
     * @returns an instance of configManager
     */
    static createFactory(algorithmType: string): ConfigManager {
        if (algorithmType == WORD_COUNT_ALGORITH) {
            return new ConfigManagerBuilder()
                .setAlgoritmType(algorithmType)
                .setBibTextAlgoritm(new KeywordExtractBibRegex())
                .build();
        } else if (algorithmType == YEAR_COUNT_ALGORITHM) {
            return new ConfigManagerBuilder()
                .setAlgoritmType(algorithmType)
                .setBibTextAlgoritm(new YearExtractBibgRegex())
                .build();
        } else {
            throw new Error("Algoritm not found.")
        }
    }

}