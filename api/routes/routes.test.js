const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const text2SqlController = require('../controllers/text2SqlController');

jest.mock('../controllers/text2SqlController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

describe('POST /api/v1/text2sql', () => {
    it('responds with JSON containing the converted SQL query', async () => {
        const requestBody = {
            prompt: 'Find all users who live in California',
            database_schema: 'User (id, name, location)'
        };

        const expectedResponseBody = {
            query: 'SELECT * FROM users WHERE location = \'California\''
        };

        text2SqlController.convertText2Sql.mockImplementation((req, res) => {
            res.status(200).json(expectedResponseBody);
        });

        const response = await request(app)
            .post('/api/v1/text2sql')
            .send(requestBody)
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual(expectedResponseBody);
    });
});
