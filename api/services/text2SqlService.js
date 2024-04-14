const preparePrompt = (prompt, database_schema = "") => {
    if (database_schema === "") {
        return `Generate a SQL query that corresponds to the following question: \`${ prompt }\``
    }

    return "" +
        `Use the following database schema to help generate an SQL query that corresponds to the following question: '\`${ prompt }\`'\n\n`+
        "Schema:\n" +
        "```sql\n" +
        `${ database_schema }` +
        "```"
};

module.exports = {
    preparePrompt
};