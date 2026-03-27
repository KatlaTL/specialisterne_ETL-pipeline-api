"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const stationConfig_1 = require("./config/stationConfig");
exports.typeDefs = `#graphql
    type BME280 {
        BME280_id: ID!
        reader_id: String!
        location: String!
        humidity: Float!
        pressure: Float!
        temperature: Float!
        observed_at: String!
        pulled_at: String!
    }

    type DS18B20 {
        DS18B20_id: ID!
        reader_id: String!
        location: String!
        temperature: Float!
        observed_at: String!
        pulled_at: String!
    }

    type SCD41 {
        SCD41_id: ID!
        reader_id: String!
        co2: Int!
        humidity: Float!
        temperature: Float!
        observed_at: String!
        pulled_at: String!
    }

    type DMI {
        DMI_id: ID!
        dmi_id: String!
        parameter_id: String!
        value: Float!
        observed_at: String!
        pulled_at: String!
        station_id: Int!
    }

  type Query {
  ${Object.keys(stationConfig_1.stationConfig).map(q => `${q}(limit: Int, from: String, to: String, order: String): [${q.replace("Readings", "")}]`).join("\n")}
  ${Object.keys(stationConfig_1.stationConfig).map(q => `latest${q}: ${q.replace("Readings", "")}`).join("\n")}
  }
`;
