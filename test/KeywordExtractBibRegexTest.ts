/**
 * Copyright (c) 2019  Thiago Lopes da Silva
 * All Rights Reserved.
 */

import { expect } from 'chai';
import { KeywordExtractBibRegex } from '../src/bibtext/KeywordExtractBibRegex';

describe("Testing keywordExtractBibRegex file", () => {

    it("with undefined bibtext reference", () => {
        const classUnderTest = new KeywordExtractBibRegex();
        let resultSet = classUnderTest.extractRawData(undefined);
        expect(resultSet).to.be.empty;
    });

    it("with invalid bibtext string", () => {
        const classUnderTest = new KeywordExtractBibRegex();
        let resultSet = classUnderTest.extractRawData("invalid value");

        expect(resultSet).to.be.empty;
    });

    it("with empty keywords string on bibtext", () => {
        const emptyKeywords = "@ARTICLE {asda,  author = \"asda\"}";
        const classUnderTest = new KeywordExtractBibRegex();
        let resultSet = classUnderTest.extractRawData(emptyKeywords);

        expect(resultSet).to.be.empty;
    });

    it("with valid year strings that contains the @ARTICLE tag", () => {
        const emptyKeywords = "@ARTICLE {asda,  author = \"asda\", keywords = \"Blockchain,Internet of Things,Smart contract,Trust\",}";
        const classUnderTest = new KeywordExtractBibRegex();
        let resultSet = classUnderTest.extractRawData(emptyKeywords);

        expect(resultSet).to.be.not.empty;
        expect(resultSet[0][0].split(",").length).to.be.equal(4);
    });

    it("with valid year strings that contains the @INPROCEEDINGS tag", () => {
        const emptyKeywords = "@INPROCEEDINGS {Olnes:2018:BTI:3209281.3209293, author = \"asda\", keywords = \"Blockchain,Internet of Things,Smart contract,Trust\",}";
        const classUnderTest = new KeywordExtractBibRegex();
        let resultSet = classUnderTest.extractRawData(emptyKeywords);

        expect(resultSet).to.be.not.empty;
        expect(resultSet[0][0].split(",").length).to.be.equal(4);
    });

});