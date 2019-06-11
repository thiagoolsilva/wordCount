/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import Minimist from "minimist";
import { ConfigManagerFactory } from "./config/ConfigManagerFactory";

async function main() {
    try {
        let argumentParameters = Minimist((process.argv.slice(2)));
        let bibFilePath = argumentParameters.path;
        let algoritmType = argumentParameters.algorithm;

        if (bibFilePath) {
            let configManager = ConfigManagerFactory.createFactory(algoritmType);
            let keywordObjc = await configManager.startParse(bibFilePath);
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