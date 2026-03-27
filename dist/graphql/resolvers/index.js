"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const stationConfig_1 = require("../config/stationConfig");
const stationReadingsResolver_1 = require("./stationReadingsResolver");
exports.resolvers = {
    Query: {
        ...Object.fromEntries(Object.keys(stationConfig_1.stationConfig).map((queryName) => [queryName, (0, stationReadingsResolver_1.createStationReadingsResolver)(queryName)])),
        ...Object.fromEntries(Object.keys(stationConfig_1.stationConfig).map((queryName) => ["latest" + queryName, (0, stationReadingsResolver_1.createLatestStationReadingsResolver)(queryName)]))
    },
};
