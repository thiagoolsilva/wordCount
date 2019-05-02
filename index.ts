/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import Minimist from "minimist";
import { PlainTextSource } from "./source/impl/PlainTextSource";
import { ConfigManager } from "./config/ConfigManager";
import { ExtractBibRegex } from "./bibtext/ExtractBibRegex";

async function main() {
    try {
        let argumentParameters = Minimist((process.argv.slice(2)));
        let bibFilePath = argumentParameters.path;
        let algoritmType = argumentParameters.algorithm;

        if (bibFilePath) {
            let configManager2 = new ConfigManager(new ExtractBibRegex(), new PlainTextSource());
            let keywordObjc = await configManager2.startParse(algoritmType, bibFilePath);
            console.log(JSON.stringify(keywordObjc));
        } else {
            throw Error("bibtext file not provided");
        }
    } catch (e) {
        console.error(e);
    }
}

// start program
main();