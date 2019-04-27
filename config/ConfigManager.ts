/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ConfigUtil } from "./ConfigUtil";
import { ISourceReader } from "../source/ISourceReader";
import { BaseTextParse } from "../parser/BaseTextParse";
import { SourceFactory } from "../source/SourceFactory";
import { TextFactory } from "../parser/TextFactory";
import { PATTERN_PARAMETER, FILEPATH_PARAMETER, TYPE_PARAMETER, ALGORITH_PARAMETER } from "../utils/constants";

export class ConfigManager {
    static instance: ConfigManager;

    pattern?: string;
    filePath?: string;
    baseParse?: BaseTextParse;
    private source?: ISourceReader;

    static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    async setup() {
        let propertyManager = new ConfigUtil();

        this.pattern = this.getPatternConfig(propertyManager);
        this.filePath = this.getFilePathConfig(propertyManager);
        this.source = this.getSourceType(propertyManager);
        this.baseParse = await this.getTextAlgorith(propertyManager);
    }

    getPatternConfig(propertyManager: ConfigUtil): string {
        return propertyManager.getStringPropertyValue(PATTERN_PARAMETER);
    }

    getFilePathConfig(propertyManager: ConfigUtil): string {
        return propertyManager.getStringPropertyValue(FILEPATH_PARAMETER);
    }

    getSourceType(propertyManager: ConfigUtil): ISourceReader | undefined {
        const typeParameter = propertyManager.getStringPropertyValue(TYPE_PARAMETER);
        return SourceFactory.createFactory(typeParameter);
    }

    async getTextAlgorith(propertyManager: ConfigUtil): Promise<BaseTextParse | undefined> {
        if (this.source && this.filePath) {
            const rawText = await this.source.rawStream(this.filePath);
            const typeParameter = propertyManager.getStringPropertyValue(ALGORITH_PARAMETER);
            return TextFactory.createFactory(typeParameter, rawText);
        }
    }

}
