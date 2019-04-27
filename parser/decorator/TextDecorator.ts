/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { BaseTextParse } from "../BaseTextParse";
import { EMPTY_STRING } from "../../utils/constants";

export class TextDecorator implements BaseTextParse {

    parse(): string {
        return EMPTY_STRING;
    }

}