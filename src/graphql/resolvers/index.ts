// src/graphql/resolvers/index.ts
import { PrismaGraphQL } from "../../types/prismaTypes";
import { stationConfig } from "../config/stationConfig";
import { createLatestStationReadingsResolver, createStationReadingsResolver } from "./stationReadingsResolver";

export const resolvers = {
    Query: {
        ...Object.fromEntries((Object.keys(stationConfig) as PrismaGraphQL[]).map((queryName) => [queryName, createStationReadingsResolver(queryName)])),
        ...Object.fromEntries((Object.keys(stationConfig) as PrismaGraphQL[]).map((queryName) => ["latest" + queryName, createLatestStationReadingsResolver(queryName)]))
    },
};
