"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStation = void 0;
const apiStationSchema_1 = require("../schemas/apiStationSchema");
const validateStation = (req, res, next) => {
    const { station } = req.params;
    const result = apiStationSchema_1.ApiStationSchema.safeParse(station);
    if (!result.success) {
        return res.status(404).json({
            error: "Sensor Not Found",
            message: "The sensor ID provided is invalid or does not exist.",
            status: 404,
            hint: "Please check that the sensor ID is correct and exists in the system. api/readings/:['bme280' | 'dmi' | 'ds18b20' | 'scd41']"
        });
    }
    req.validatedSensor = result.data;
    next();
};
exports.validateStation = validateStation;
