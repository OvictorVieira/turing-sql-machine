# Turing Sql Machine

The Turing SQL Machine is an intelligent application designed to generate SQL queries from natural text. Inspired by the efficiency and precision of the Turing Machine, this tool revolutionizes the way developers interact with databases.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Documentations](#documentations)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)

## Prerequisites

To run local:

1. First of all, this application uses [OpenAi API](https://platform.openai.com/docs/overview) to generate the Text 2 SQL query. 
   1. Access the [API Keys section on openai plataform](https://platform.openai.com/api-keys) and create your **API KEY**
      1. Pay attention to the [Balance Required](https://platform.openai.com/account/limits) to use the OpenAi API
   2. After create your API KEY, follow the next step

2. Create an `.env` file on `root` project folder:
   ```bash
   cp .env.example .env
   ```
3. Put your **API KEY** on the `.env` generated file

## Documentations

### Postman Documentation

To access the documentation click [here](https://documenter.getpostman.com/view/10569183/2sA3Bj9tyu)

### Postman Collection

To test the API endpoints, you can use the provided Postman collection. [Download the collection here]() and import it into your Postman application.

To the **local** environment use [localhost:3000](http://localhost:3000) as the `url` variable value.

To the **production** environment use [https://turing-sql-machine-cb96e3d9bead.herokuapp.com/](https://turing-sql-machine-cb96e3d9bead.herokuapp.com/) as the `url` variable value.

## Project Structure

```
turing-sql-machine/
│
├── api/                     # Main API logic
│   ├── controllers/         # API controllers
│   │   └── <controllerName>Controller.js
│   │   └── <controllerTestName>Controller.test.js
│   │
│   ├── exceptions/         # Custom Exceptions
│   │   └── <exceptionName>Exception.js
│   │   └── <exceptionTestName>Exception.test.js
│   │
│   ├── integrations/       # External Integrations
│   │   └── <integrationName>Integration.js
│   │   └── <integrationTestName>Integration.test.js
│   │
│   ├── middlewares/        # Middlewares
│   │   └── <middlewareName>Middleware.js
│   │   └── <middlewareTestName>Middleware.test.js
│   │
│   ├── routes/              # API route definitions
│   │   └── <routeName>Route.js
│   │   └── <routeTestName>Route.test.js
│   │
│   ├── serializers/         # Serializers
│   │   └── <serializerName>Serializer.js
│   │   └── <serializerTestName>Serializer.test.js
│   │
│   ├── services/         # API Bussiness Logic
│   │   └── <serviceName>service.js
│   │   └── <serviceTestName>service.test.js
│   │
│   └── index.js
│
├── config/                  # Server and other configurations
│   └── config.js
│
├── node_modules/            # Installed npm packages
│
├── package.json             # Lists project dependencies and scripts
│
└── server.js                # Main server file to start the Express server
```

## Backend Setup:

Navigate to the project root directory.
- Install the required dependencies using npm install.
- Start the backend server using `npm start`.
