const { serializeResponse } = require('./text2SqlSerializer');
const OpenAiDataFetchException = require("../exceptions/openAiDataFetchException");

describe('serializeResponse', () => {
    it('should serialize prompt response', () => {
        const promptResponse = { "SQL_Query": "SELECT * FROM users;" };
        const expected = { "query": "SELECT * FROM users;" };
        const result = serializeResponse(promptResponse);
        expect(result).toEqual(expected);
    });

    it('should throw exception for undefined prompt response', () => {
        expect(() => {
            serializeResponse(undefined);
        }).toThrow(OpenAiDataFetchException);
    });
});
