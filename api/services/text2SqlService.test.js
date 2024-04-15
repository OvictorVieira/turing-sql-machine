const { preparePrompt } = require('./text2SqlService');

describe('preparePrompt', () => {
    it('should generate prompt without database schema', () => {
        const prompt = 'Find all users who live in California';
        const expected = 'Generate a SQL query that corresponds to the following question: `Find all users who live in California`';
        const result = preparePrompt(prompt);
        expect(result).toEqual(expected);
    });

    it('should generate prompt with database schema', () => {
        const prompt = 'Find all users who live in California';
        const databaseSchema = 'User (id, name, location)';
        const expected = "Use the following database schema to help generate an SQL query that corresponds to the following question: '`Find all users who live in California`'\n\nSchema:\n```sql\nUser (id, name, location)```";
        const result = preparePrompt(prompt, databaseSchema);
        expect(result).toEqual(expected);
    });

    it('should handle empty prompt', () => {
        const prompt = '';
        const expected = 'Generate a SQL query that corresponds to the following question: ``';
        const result = preparePrompt(prompt);
        expect(result).toEqual(expected);
    });

    it('should handle empty database schema', () => {
        const prompt = 'Find all users who live in California';
        const databaseSchema = '';
        const expected = 'Generate a SQL query that corresponds to the following question: `Find all users who live in California`';
        const result = preparePrompt(prompt, databaseSchema);
        expect(result).toEqual(expected);
    });
});
