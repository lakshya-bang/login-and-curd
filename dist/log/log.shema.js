"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSchema = void 0;
const mongoose = require("mongoose");
exports.LogSchema = new mongoose.Schema({
    activity_type: { type: String, unique: false, required: true },
    activity_data: { type: String, unique: false, required: true },
    activity_date: { type: Date, unique: false, required: true, default: Date.now }
});
//# sourceMappingURL=log.shema.js.map