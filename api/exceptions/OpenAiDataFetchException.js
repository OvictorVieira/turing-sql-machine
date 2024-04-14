class OpenAiDataFetchException extends Error {
    constructor(originalError) {
        super(`Failed to fetch data from OpenAi Api: ${originalError.message}`);
        this.name = this.constructor.name;
        this.status = 500;
    }
}

module.exports = OpenAiDataFetchException;
