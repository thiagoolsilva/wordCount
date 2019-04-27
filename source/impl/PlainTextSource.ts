/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ISourceReader } from "../ISourceReader";
import {FileManager} from "../util/fileManager";

export class PlainTextSource implements ISourceReader {

    rawStream(parameters:string) : Promise<string> {
        const rawData = new FileManager(parameters).readAsyncContentFromFile();

        return rawData;
    }
    
}