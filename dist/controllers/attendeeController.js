"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttendees = exports.registerAttendee = void 0;
const Attendee = require("../models/attendeeModel");
// Register a new attendee
const registerAttendee = async (req, res) => {
    try {
        const attendee = await Attendee.create(req.body);
        res.status(201).json({ success: true, data: attendee });
    }
    catch (error) {
        console.error("Error registering attendee:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
exports.registerAttendee = registerAttendee;
// Get all attendees
const getAttendees = async (req, res) => {
    try {
        const attendees = await Attendee.find();
        res.status(200).json({ success: true, count: attendees.length, data: attendees });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};
exports.getAttendees = getAttendees;
//# sourceMappingURL=attendeeController.js.map