const { convertText2Sql } = require('./text2SqlController');
const { streamOpenAiText2Sql } = require('../integrations/openAiIntegration');
const { preparePrompt } = require('../services/text2SqlService');
const { serializeResponse } = require('../serializers/text2SqlSerializer');

jest.mock('../integrations/openAiIntegration');
jest.mock('../services/text2SqlService');
jest.mock('../serializers/text2SqlSerializer');

describe('convertText2Sql', () => {
    let req, res;

    beforeEach(() => {
        req = { body: { prompt: 'Test prompt', database_schema: 'Test schema' } };
        res = { json: jest.fn(), status: jest.fn(() => res) };
    });

    it('should call streamOpenAiText2Sql with prepared prompt and serialize response', async () => {
        const preparedPrompt = 'Prepared prompt';
        const promptResponse = { SQL_Query: 'SELECT * FROM test_table' };
        const serializedResponse = { query: 'SELECT * FROM test_table' };

        preparePrompt.mockReturnValue(preparedPrompt);
        streamOpenAiText2Sql.mockResolvedValue(promptResponse);
        serializeResponse.mockReturnValue(serializedResponse);

        await convertText2Sql(req, res);

        expect(preparePrompt).toHaveBeenCalledWith('Test prompt', 'Test schema');
        expect(streamOpenAiText2Sql).toHaveBeenCalledWith(preparedPrompt);
        expect(serializeResponse).toHaveBeenCalledWith(promptResponse);
        expect(res.json).toHaveBeenCalledWith(serializedResponse);
    });

    it('should handle unexpected errors and send generic error response', async () => {
        const error = new Error('Unexpected error');

        preparePrompt.mockReturnValue('Prepared prompt');
        streamOpenAiText2Sql.mockRejectedValue(error);

        await convertText2Sql(req, res);

        expect(preparePrompt).toHaveBeenCalledWith('Test prompt', 'Test schema');
        expect(streamOpenAiText2Sql).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'An unexpected error occurred' });
    });

    it('should handle prompt not provided error and send appropriate error response', async () => {
        const missingPromptReq = { body: { database_schema: 'Test schema' } };

        await convertText2Sql(missingPromptReq, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Prompt field is required' });
    });

});
