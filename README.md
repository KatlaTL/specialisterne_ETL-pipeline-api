# Specialisterne_ETL-pipeline-api

A small Node.js API built with **Express** and **TypeScript**, supporting both **REST** and **GraphQL** endpoints. \
API documentation is available via **Swagger**.

Made as part of Specialisterne Academy on the data collected from this repository: https://github.com/KatlaTL/Specialisterne-Case---ETL-Pipeline 

---

## Table of Contents

- [Features](#features)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Running the API](#running-the-api)  
- [REST Endpoints](#rest-endpoints)  
- [GraphQL Endpoint](#graphql-endpoint)  
- [Swagger Documentation](#swagger-documentation)  
- [Technologies](#technologies)
- [Next Development](#next-development)

---

## Features

- REST endpoints for managing stations and readings  
- GraphQL endpoint for flexible queries  
- TypeScript for type safety  
- Swagger documentation for REST API  

---

## Installation

```bash
# Clone the repository
git clone [The repository](https://github.com/KatlaTL/specialisterne_ETL-pipeline-api)

# Navigate into the project
cd <PROJECT_DIRECTORY>

# Install dependencies
npm install
```

## Environment Variables

Create a copy of the .env.template file in the root directory and rename it to .env, then add your database URL and port:
```
DATABASE_URL="database_type://user:password@server:port/database_name?schema=public"
PORT=3000
```

## Running the API
```
# Pull and generate the tables with prisma
npm run prisma

# Start the server in development mode
npm run dev

# Start the server in production mode
npm run build
npm run start
```
[Back to Top](#specialisterne_etl-pipeline-api)

## REST endpoints
All REST endpoints are prefixed with /api.

| Method | Endpoint                                  | Description                          |
| ------ | ----------------------------------------- | ------------------------------------ |
| GET    | `/api/stations`                           | Get all stations                     |
| GET    | `/api/stations/{station}`                 | Get station by ID                    |
| GET    | `/api/stations/{station}/readings/latest` | Get the latest reading for a station |
| GET    | `/api/stations/{station}/readings`        | Get all readings for a station       |


The `/api/stations/{station}/readings` endpoint have the following query parameters available
| Parameter | Type                   | Description                                                  | Default |
| --------- | ---------------------- | ------------------------------------------------------------ | ------- |
| `limit`   | integer                | Number of readings to return                                 | -      |
| `order`   | string                 | Order readings by timestamp. Available values: `asc`, `desc` | asc     |
| `from`    | string (ISO date-time) | Start timestamp (inclusive)                                  | —       |
| `to`      | string (ISO date-time) | End timestamp (inclusive)                                    | —       |

Example request `GET /api/stations/dmi/readings?limit=5&order=desc&from=2026-03-23T10:16:27.000&to=2026-03-24T10:16:27.000`

Example response get all stations (`GET /api/stations`)

```
[
  {
    "station": "DMI"
  },
  {
    "station": "BME280"
  },
  {
    "station": "DS18B20"
  },
  {
    "station": "SCD41"
  }
]
```

Example response get latest readings stations (`GET /api/stations/dmi/readings/latest`)
```
{
  "DMI_id": 1,
  "dmi_id": "3806fec4-0394-ba7a-2835-d644ab586011",
  "parameter_id": "temp_dry",
  "value": 7.8,
  "observed_at": "2026-03-23T10:10:00.000Z",
  "pulled_at": "2026-03-23T10:16:19.000Z",
  "station_id": 6181
}
```
[Back to Top](#specialisterne_etl-pipeline-api)

## GraphQL Endpoint
POST /graphql \
You can query station readings flexibly. Example:
```
query {
    DMIReadings(limit: 5) {
        value
    }
    BME280Readings(limit: 10) {
        humidity
        location
        pressure
    }
}
```

## Swagger Documentation
Interactive API documentation is available via Swagger UI:
`http://localhost:3000/api-docs`

## Technologies

- Node.js
- Express
- TypeScript
- REST API
- GraphQL
- Swagger (OpenAPI)
- Prisma
- Zod

## Next Development

This section outlines future improvements and features for the API:

- Add authentication & authorization (JWT or OAuth2)
- Performance optimizations and caching  
- Add unit and integration tests with Jest  
- Dockerization for easier deployment  

[Back to Top](#specialisterne_etl-pipeline-api)
