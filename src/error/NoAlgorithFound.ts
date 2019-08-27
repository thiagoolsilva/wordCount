/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

export class NoAlgorithmFound extends Error {

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, NoAlgorithmFound.prototype);
    }

}