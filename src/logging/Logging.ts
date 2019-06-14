/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { config } from "dotenv"

export class Logging {

    private static readonly DEFAULT_TAG = ">>> wordCount-log-tag";

    /**
     * Print out a log with provided tag and message
     * @param tag tag
     * @param message message
     */
    static log(tag: string, message: string): void {
        config();
        const isDebugMode = process.env.DEBUG || "false";

        if (isDebugMode === "true") {
            console.log(`\n${tag} - ${message}\n`);
        }
    }

    /**
     * Print out a log with provided message
     * @param message message
     */
    static simpleLog(message: string): void {
        this.log(this.DEFAULT_TAG, message);
    }

}