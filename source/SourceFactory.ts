
/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ISourceReader } from "./ISourceReader";
import { PlainTextSource } from "./impl/PlainTextSource";
import { PLAIN_TEXT_SOURCE_TYPE } from "../utils/constants";

export class SourceFactory {

    static createFactory(sourceType: string): ISourceReader | undefined {
        if (sourceType === PLAIN_TEXT_SOURCE_TYPE) {
            return new PlainTextSource();
        } else {
            return undefined;
        }
    }
}