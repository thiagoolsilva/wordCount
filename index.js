/**
 * Copyright (c) 2018  Thiago Lopes da Silva
 * All Rights Reserved.
 */
const property = new (require("./wordParser"))()

/**
 * Main execution
 */
async function main() {
    try {
        let wordGroupCout = await property.initParse();

        // print out the result
        console.log(JSON.stringify(wordGroupCout));
    } catch (error) {
        console.log(error);
    }
}

// initialize the program
main();