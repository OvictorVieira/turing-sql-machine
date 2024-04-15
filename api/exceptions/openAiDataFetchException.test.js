const OpenAiDataFetchException = require('./openAiDataFetchException');

describe('OpenAiDataFetchException', () => {
    it('should create an instance with correct message and status', () => {
        const originalError = new Error('Failed to fetch data');
        const exception = new OpenAiDataFetchException(originalError);

        expect(exception.message).toBe('Failed to fetch data from OpenAi Api: Failed to fetch data');
        expect(exception.name).toBe('OpenAiDataFetchException');
        expect(exception.status).toBe(500);
    });

    it('should inherit from Error class', () => {
        const originalError = new Error('Failed to fetch data');
        const exception = new OpenAiDataFetchException(originalError);

        expect(exception instanceof Error).toBe(true);
    });
});
