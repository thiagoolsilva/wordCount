/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { TextDecorator } from "./TextDecorator";
import { RawText } from "./RawText";

 export class WordTextCountDecorator extends TextDecorator {

    constructor(rawText:RawText){
        super(rawText);
    }

    parse():string {
        

        return "";
    }

}