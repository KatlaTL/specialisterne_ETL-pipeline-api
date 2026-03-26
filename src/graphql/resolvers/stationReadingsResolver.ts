import prisma from "../../lib/prisma";
import { createStationReadingsService } from "../../services/stations/factory/createStationReadingsService";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { stationConfig } from "../config/stationConfig";
import { PrismaGraphQL } from "../../types/prismaTypes";
import { ApiQuerySchema } from "../../schemas/apiStationSchema";

export const createStationReadingsResolver = (queryName: PrismaGraphQL) => {
    const service = createStationReadingsService(prisma, stationConfig[queryName]);

    return async (_parent: any, args: any, _context: any, info: GraphQLResolveInfo) => {
        const result = ApiQuerySchema.safeParse(args);
   
        if (!result.success) {
           throw new Error(result.error.issues.map(e => e.message).toString());
        }

        const requestedFields = Object.keys(graphqlFields(info));

        return await service.fetchReadingsByQuery(args, requestedFields);
    }

};

export const createLatestStationReadingsResolver = (queryName: PrismaGraphQL) => {
    const service = createStationReadingsService(prisma, stationConfig[queryName]);

    return async (_parent: any, _args: any, _context: any, info: GraphQLResolveInfo) => {
        const requestedFields = Object.keys(graphqlFields(info));
        
        return await service.fetchlatestReadings(requestedFields);
    }

};