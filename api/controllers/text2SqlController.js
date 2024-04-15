const OpenAiDataFetchException = require("../exceptions/openAiDataFetchException");
const { streamOpenAiText2Sql } = require("../integrations/openAiIntegration");
const { preparePrompt } = require("../services/text2SqlService");
const { serializeResponse } = require("../serializers/text2SqlSerializer");
const promptIsRequiredException = require("../exceptions/promptIsRequiredException");

const convertText2Sql = async (req, res) => {
    const reqBody = req.body;

    try {
        if(reqBody["prompt"] === "" || reqBody["prompt"] === undefined) {
            throw new promptIsRequiredException()
        }

        const preparedPrompt = preparePrompt(reqBody["prompt"], reqBody["database_schema"])
        const promptResponse = await streamOpenAiText2Sql(preparedPrompt);
        res.json(serializeResponse(promptResponse));
    } catch (error) {
        if (error instanceof OpenAiDataFetchException || error instanceof promptIsRequiredException) {
            return res.status(error.status).json({ error: error.message });
        }

        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

module.exports = {
    convertText2Sql: convertText2Sql
};
