/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import Minimist from "minimist";
import { ConfigManagerFactory } from "./config/ConfigManagerFactory";
import { Logging } from "./logging/Logging";
import { NoAlgorithmFound } from "./error/NoAlgorithFound";

async function main() {
    try {
        let argumentParameters = Minimist((process.argv.slice(2)));
        let bibFilePath = argumentParameters.path;
        let algoritmType = argumentParameters.algorithm;

        if (bibFilePath) {
            let configManager = ConfigManagerFactory.createFactory(algoritmType);
            let keywordObjc = await configManager.startParse(bibFilePath);
            console.log(`Algoritm = ${algoritmType}`)
            console.log(`Result = ${JSON.stringify(keywordObjc)}`);
        } else {
            throw Error("Bibtext file not provided");
        }
    } catch (e) {
        Logging.simpleLog(`${e.stack}`);
        if (e instanceof NoAlgorithmFound) {
            console.log(e.message);
        } else {
            console.log("An unexpected error happened.");
        }
    }
}

// start program
main();