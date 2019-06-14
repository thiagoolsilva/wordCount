/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

export interface IExtractBibRegex {

    /**
     * Extract the text from provided bibtext file
     * @param rawData rawData
     * @returns the text extracted
     */
    extractRawData(rawData?: string): string[];

}