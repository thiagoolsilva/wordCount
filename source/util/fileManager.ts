/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import fs from "fs";
import { LENGTH_INT_3, LENGTH_INT_1000000, ENCODING_UTF8, EMPTY_STRING } from "../../utils/constants";

/**
 * This class will manage the events of opened file
 */
export class FileManager {

    private path: string;

    /**
     * Create a FileManager's class 
     * @param {string} path path
     */
    constructor(path: string) {
        this.path = path;
    }

    /**
     * Read sync file from provided path
     * @returns a promisse of read stream
     */
    readAsyncContentFromFile(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (fs.existsSync(this.path)) {
                if (this.getFileSizeInMB() > LENGTH_INT_3) {
                    reject("The file size must be less than 3 MB");
                }
                // read async file
                fs.readFile(this.path, ENCODING_UTF8, (err, content) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(content);
                    }
                })
            } else {
                resolve(EMPTY_STRING);
            }
        });
    }

    /**
     * Get the file size
     * @returns the file size
     */
    getFileSizeInMB(): number {
        let fileInformation = fs.statSync(this.path);
        return fileInformation.size / LENGTH_INT_1000000;
    }
}
