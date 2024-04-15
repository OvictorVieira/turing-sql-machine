const express = require('express');
const app = express();
const routes = require('./routes/routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const cors = require("cors");

app.use(cors());
app.use('/', routes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;