/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { IExtractBibRegex } from "./IExtractBibRegex";

export class YearExtractBibgRegex implements IExtractBibRegex {

    extractRawData(rawData?: string | undefined): string[] | null {
        throw new Error("Method not implemented.");
    }

}