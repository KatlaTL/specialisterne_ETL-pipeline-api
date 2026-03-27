"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRequestedFields = void 0;
const reduceRequestedFields = (requestedFields) => {
    return requestedFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
    }, {});
};
exports.reduceRequestedFields = reduceRequestedFields;
