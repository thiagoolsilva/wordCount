/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { BaseTextParse } from "../BaseTextParse";

export class RawText implements BaseTextParse {

    text: string;

    constructor(text: string) {
        this.text = text;
    }

    parse(): string {
        return this.text;
    }

}