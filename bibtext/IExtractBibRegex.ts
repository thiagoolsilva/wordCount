/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { EMPTY_STRING, LENGTH_INT_0 } from "../utils/constants";
import { Logging } from "../logging/Logging";

export interface IExtractBibRegex {

    /**
     * Extract the text from provided bibtext file
     * @param rawData rawData
     * @returns the text extracted
     */
    extractRawData(rawData?: string): string[] | null;



}