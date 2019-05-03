/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { BaseTextParse } from "../BaseTextParse";
import { RawText } from "./RawText";

export abstract class TextDecorator implements BaseTextParse {

    protected rawText: RawText;

    constructor(rawText: RawText) {
        this.rawText = rawText;
    }
    
    parse(): string {
        return this.rawText.text;
    }

}