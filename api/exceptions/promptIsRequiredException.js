class promptIsRequiredException extends Error {
    constructor() {
        super(`Prompt field is required`);
        this.name = this.constructor.name;
        this.status = 409;
    }
}

module.exports = promptIsRequiredException;
