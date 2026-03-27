"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStationService = void 0;
const createStationService = (db) => ({
    fetchAllStations: async () => {
        return await db.$queryRaw `SELECT tablename as station FROM pg_tables WHERE schemaname='public';`;
    },
    fetchStation: async (tablename) => {
        return (await db.$queryRaw `SELECT tablename as station FROM pg_tables WHERE schemaname='public' AND tablename = ${tablename.toUpperCase()};`)[0];
    }
});
exports.createStationService = createStationService;
