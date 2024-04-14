import api from '../config/axiosConfig';

const transformText2Sql = async (prompt, databaseSchema) => {
    try {
        const response = await api.post(`/api/v1/text2sql`, {
            "database_schema": databaseSchema,
            "prompt": prompt
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export default transformText2Sql;
