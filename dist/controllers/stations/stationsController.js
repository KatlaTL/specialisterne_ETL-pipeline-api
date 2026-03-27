"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStations = void 0;
const stations_1 = require("../../services/stations");
const getStations = async (req, res, next) => {
    try {
        const stations = await stations_1.stationService.fetchAllStations();
        return res.json(stations);
    }
    catch (err) {
        next(err);
    }
};
exports.getStations = getStations;
