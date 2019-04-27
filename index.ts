/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { ConfigManager } from "./config/ConfigManager";

async function main() {
    try {
        // configure the program
        let configInstance = ConfigManager.getInstance();
        await configInstance.setup();

        if (configInstance.baseParse) {
            let parseObjc = configInstance.baseParse.parse();
            console.log(parseObjc);
        } else {
            console.error("Algorith not found in configuration file");
        }
    } catch (e) {
        console.error(e);
    }
}

// start program
main();