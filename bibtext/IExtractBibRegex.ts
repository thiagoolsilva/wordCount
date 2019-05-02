/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

export interface IExtractBibRegex {
    
    extractKeywordWords(rawData?: string): string[] | null;

}