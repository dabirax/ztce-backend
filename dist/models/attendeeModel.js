"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
/**
 * Type hinting for Mongoose documents (optional, not required)
 * You can still use JSDoc for editor support.
 */
const attendeeSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    institutionName: { type: String, required: true },
    faculty: { type: String, required: true },
    department: { type: String, required: true },
    level: { type: String, required: true },
    heardFrom: { type: String, required: true },
    expectations: { type: String },
}, { timestamps: true });
const Attendee = mongoose.model("Attendee", attendeeSchema);
module.exports = Attendee;
//# sourceMappingURL=attendeeModel.js.map