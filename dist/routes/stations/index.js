"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/stations/index.ts
const express_1 = require("express");
const stationsController_1 = require("../../controllers/stations/stationsController");
// Import all routes here
const router = (0, express_1.Router)();
router.get('/', stationsController_1.getStations);
exports.default = router;
