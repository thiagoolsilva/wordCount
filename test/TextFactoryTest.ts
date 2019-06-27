/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { expect } from 'chai';
import { WORD_COUNT_ALGORITH, YEAR_COUNT_ALGORITHM } from "../src/utils/constants";
import { TextFactory } from '../src/parser/TextFactory';
import { WordTextCountDecorator } from '../src/parser/decorator/WordTextCountDecorator';
import { NoAlgorithmFound } from '../src/error/NoAlgorithFound';

const FAKE_RAW_TEXT = "fake_raw_text";

describe("Testing TextFactory file", () => {

    it("with word_count_algorithm parameter", () => {
        const textFactory = TextFactory.createFactory(WORD_COUNT_ALGORITH, FAKE_RAW_TEXT);
        expect(textFactory).to.be.a("object");
        expect(textFactory).to.be.not.null;
        expect(textFactory).to.be.instanceOf(WordTextCountDecorator);;
    });

    it("with year_count_algorithm parameter", () => {
        const textFactory = TextFactory.createFactory(YEAR_COUNT_ALGORITHM, FAKE_RAW_TEXT);
        expect(textFactory).to.be.a("object");
        expect(textFactory).to.be.not.null;
        expect(textFactory).to.be.instanceOf(WordTextCountDecorator);;
    });

    it("with invalid parameter", () => {
        const INVALID_ALGORITHM = "invalid_algorithm"
        expect(() => { TextFactory.createFactory(INVALID_ALGORITHM, FAKE_RAW_TEXT) }).to.throw(NoAlgorithmFound);
    });

});