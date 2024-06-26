const OpenAiDataFetchException = require("../exceptions/openAiDataFetchException");

const serializeResponse = (promptResponse) => {
    if(promptResponse === undefined) {
        throw new OpenAiDataFetchException(new Error("Failed to fetch data, try again"));
    }

    return {
        "query": promptResponse["SQL_Query"]
    };
};

module.exports = {
    serializeResponse: serializeResponse
};