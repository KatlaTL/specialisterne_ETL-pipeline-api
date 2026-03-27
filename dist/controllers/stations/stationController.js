"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStation = void 0;
const stations_1 = require("../../services/stations");
const getStation = async (req, res, next) => {
    try {
        const { validatedSensor } = req;
        const station = await stations_1.stationService.fetchStation(validatedSensor);
        return res.json(station);
    }
    catch (err) {
        next(err);
    }
};
exports.getStation = getStation;
