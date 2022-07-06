# Spot API documentation demo

A demo of how to use Spot API description tool to generate API documentations.

This project uses [Spot](https://github.com/airtasker/spot) to describe APIs. It can then be used to generate OpenAPI specifications, which can be imported to API documentation tools for presentation. You can find a Keynote presentation in this repository illustrating the process.

## Prerequisites
You need to have the following installed on your machine:
- npm (or yarn)
- node

You can then install your node depencies using this command:
```bash
npm install
```

## How to use

### Running the application

The main purpose of this repository is to present a method for documenting your APIs, but this is a functional API demo that can be started using the following command:
```bash
npm start
```

### Generating OpenAPI specifications
Use the following command for generate both JSON and YAML formats of OpenAPI specifications in the `specs` folder:
```bash
npm run generate-docs
```

### Presenting OpenAPI specifications (Documentation)

For the presentation of the OpenAPI specifications, multiple methods are utilized in this project:

1 - Distributable swagger UI package

You will find at `docs/swagger` a distributable folder that can be configured to present ant OpenAPI specifications. This can be configured through `docs/swagger/swagger-initializer.js`. Currently, it points toward the specification foler `specs`.
The problem is that swagger UI can only view hosted JSON files, and can't see local specs file when you open the index.html file. This should work in a hosting environment like S3, and can be worked around locally by opening the index.html file using [live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

2 - Swagger UI integrated into express to serve the documentation through an endpoint

The documentation is server through express. This works automatically if you run the project and vising the path `/api-docs`

3 - Redocly

This library is very simple, and can generate a singe zero-dependency HTML file that contains the documentation of you specs. You can generate this file using the below command:
```bash
npm run generate-ui-redoc
```
You will then find the HTML file in `docs/specs/redoc`

4 - Readme

Readme is managed service that hosts your API and allows you to sync a specification file with your account using their CLI tools.

You first need to create an account on [readme](https://readme.com), create a project, and create an API key for that project.

After that, rename you `.env.example` file to `.env`, and assign the `API_KEY` environment variable to the API key you just create, then use the below command to create a new documentation:
```bash
npm run generate-ui-readme
```
A new documentation will be created with your API key, and an API definition key will be returned from this command. Add this key to your `.env` file by assigning it to `API_DEFINITION_ID`

After that, you can update your documentation using the below command:
```bash
npm run update-ui-readme
```