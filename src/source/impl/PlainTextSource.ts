/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ISourceReader } from "../ISourceReader";
import { FileManager } from "../util/fileManager";
import fs from 'fs';
import { ENCODING_UTF8 } from "../../utils/constants";

export class PlainTextSource implements ISourceReader {

    private readonly TEMP_FILE_PATH = "cache_result.txt";

    /**
     * Delete the provided file
     * @param filePath filePath
     */
    deleteFile(filePath?: string): void {
        let rawFilePath = filePath ? filePath : this.TEMP_FILE_PATH;
        if(fs.existsSync(rawFilePath)) {
            fs.unlinkSync(rawFilePath);
        }
    }

    /**
     * Read async the content of provided file
     * @param filePath filePath
     */
    rawStream(filePath?: string): Promise<string> {
        let rawFilePath = filePath ? filePath : this.TEMP_FILE_PATH;
        const rawData = new FileManager(rawFilePath).readAsyncContentFromFile();

        return rawData;
    }

    /**
     * Write down the content on file
     */
    writteToFile(data: string, filepath?: string): void {
        let rawFilePath = filepath ? filepath : this.TEMP_FILE_PATH;
        if (!fs.existsSync(rawFilePath)) {
            fs.writeFileSync(rawFilePath, data, ENCODING_UTF8);
        } else {
            fs.appendFileSync(rawFilePath, data, ENCODING_UTF8);
        }
    }

}