"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiStationSchema = exports.ApiQuerySchema = exports.ApiQueryOrderSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const prismaTypes_1 = require("../types/prismaTypes");
exports.ApiQueryOrderSchema = zod_1.default.enum(["asc", "desc"]);
// Helper: convert "" → undefined
const emptyToUndefined = (val) => val === "" ? undefined : val;
exports.ApiQuerySchema = zod_1.default.object({
    limit: zod_1.default.preprocess(emptyToUndefined, zod_1.default.coerce.number().int().positive().optional()),
    from: zod_1.default.preprocess(emptyToUndefined, zod_1.default.coerce.date().optional()),
    to: zod_1.default.preprocess(emptyToUndefined, zod_1.default.coerce.date().optional()),
    order: exports.ApiQueryOrderSchema.default("asc"),
}).refine((data) => {
    if (data.from && data.to) {
        return data.from <= data.to;
    }
    return true;
}, {
    message: "`from` must be before or equal to `to`",
    path: ["from"], // attach error to "from"
});
exports.ApiStationSchema = zod_1.default.enum(prismaTypes_1.PrismaModelKeysArray);
