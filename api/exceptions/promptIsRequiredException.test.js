const promptIsRequiredException = require('./promptIsRequiredException');

describe('promptIsRequiredException', () => {
    it('should create an instance of promptIsRequiredException', () => {
        const error = new promptIsRequiredException();
        expect(error instanceof promptIsRequiredException).toBeTruthy();
    });

    it('should have the correct message', () => {
        const error = new promptIsRequiredException();
        expect(error.message).toBe('Prompt field is required');
    });

    it('should have the correct status code', () => {
        const error = new promptIsRequiredException();
        expect(error.status).toBe(409);
    });
});
