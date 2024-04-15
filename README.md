# Turing Sql Machine

The Turing SQL Machine is an intelligent application designed to generate SQL queries from natural text. Inspired by the efficiency and precision of the Turing Machine, this tool revolutionizes the way developers interact with databases.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Documentations](#documentations)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
- [Expanding and Enhancing the Application](#expanding-and-enhancing-the-application)

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

To test the API endpoints, you can use the provided Postman collection. [Download the collection here](https://github.com/OvictorVieira/turing-sql-machine/files/14984014/postman_collection.json.zip) and import it into your Postman application.

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

## Expanding and Enhancing the Application

The current application utilizes the `gpt-4-turbo` model from OpenAI to generate SQL queries from texts. 
This model is robust and capable of meeting the current needs of the test, providing accurate and useful results. 
However, in scenarios where an even more refined level of precision or a more specific approach is required, it is possible to expand and enhance the application.

#### Possibilities for Expansion:

1. **[Fine-Tuning of the Model](https://platform.openai.com/docs/guides/fine-tuning):**
   - The Fine-Tuning technique offered by OpenAI can be explored, allowing the creation of a customized model that is more tailored to the specific requirements of the problem.
   - With Fine-Tuning, it is possible to train the model with domain-specific or application-specific data, thereby increasing its ability to provide more accurate and relevant results.

2. **[Utilization of Data for Training](https://platform.openai.com/docs/guides/fine-tuning/preparing-your-dataset):**
   - When creating a custom model, relevant datasets can be utilized to train the model according to the specific needs of the application.
   - Training with data allows the model to learn from specific examples, better adjusting to the characteristics of the problem and improving its ability to produce more suitable results.
   - **Example of Data for Training Specific Model**
      - ![Example of Data for Training](https://github.com/OvictorVieira/turing-sql-machine/assets/37859445/7ec4bb15-3b3d-457a-97f7-84e464ffdf73)

#### Considerations Regarding Costs:

While it is possible to enhance the application with techniques such as Fine-Tuning and training with data, it is important to consider the costs involved in this process:

- **Cost of Using the OpenAI API:**
   - Utilizing the OpenAI API incurs costs related to token consumption.
   - During the development and validation of the application, the total cost was approximately $0.31, taking into account the consumed tokens.

- **Cost per Request:**
   - In addition to the costs associated with token consumption, there is an additional cost for each request sent to the OpenAI API.
   - The average cost per request is approximately $0.1, which should be considered when planning the ongoing use of the application.
