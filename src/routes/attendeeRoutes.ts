const express = require("express");
const { registerAttendee, getAttendees } = require("../controllers/attendeeController");


const router = express.Router();

// POST - register attendee
router.post("/", registerAttendee);

// GET - get all attendees
router.get("/", getAttendees);

module.exports = router;
