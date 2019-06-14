/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { expect } from 'chai';
import { WordTextCountDecorator } from '../src/parser/decorator/WordTextCountDecorator';
import { RawText } from '../src/parser/decorator/RawText';

describe("Testing WordTextCountDecorator file", () => {

    it("with empty string", () => {
        const classUnderTest = new WordTextCountDecorator(new RawText(""));
        let resultSet = classUnderTest.parse();
        expect(resultSet).to.be.empty;
    });

    it("with invalid string", () => {
        const classUnderTest = new WordTextCountDecorator(new RawText("#$%#"));
        let resultSet = classUnderTest.parse();
        expect(resultSet).to.be.empty;
    });

    it("with one valid string", () => {
        const classUnderTest = new WordTextCountDecorator(new RawText("test"));
        let resultSet = classUnderTest.parse();
        expect(resultSet).to.be.not.empty;
    });

    it("with two distinct string", () => {
        const classUnderTest = new WordTextCountDecorator(new RawText("test, test2"));
        let resultSet = classUnderTest.parse();

        expect(resultSet).to.be.not.empty;

        const strfResultSet = JSON.stringify(resultSet);
        const objctResultset = JSON.parse(strfResultSet);
        expect(objctResultset[0].test2).to.be.equal(1);
        expect(objctResultset[1].test).to.be.equal(1);
    });   

});