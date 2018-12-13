/**
 * Copyright (c) 2018  Thiago Lopes da Silva
 * All Rights Reserved.
 */

const fs = require("fs"),
    ENCODING = "utf8"

/**
 * This class will manage the events of opened file
 */
class FileManager {

    /**
     * Create a FileManager's class 
     * @param {string} path path
     */
    constructor(path) {
        this.path = path;
    }

    /**
     * Read sync file from provided path
     * @returns a promisse of read stream
     */
    readAsyncContentFromFile() {
        return new Promise((resolve, reject) => {
            if (this.getFileSizeInMB() > 3) {
                reject("The file size must be less than 3 MB");
            }
            // read async file
            fs.readFile(this.path, ENCODING, (err, content) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(content);
                }
            })
        });
    }

    /**
     * Get the file size
     * @returns the file size
     */
    getFileSizeInMB() {
        let fileInformation = fs.statSync(this.path);
        return fileInformation.size / 1000000;
    }
}

// export the module
module.exports = FileManager;
