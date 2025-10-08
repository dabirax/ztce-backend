import { Request, Response } from "express";
const Attendee = require("../models/attendeeModel");

// Register a new attendee
export const registerAttendee = async (req: Request, res: Response) => {
  try {
    const attendee = await Attendee.create(req.body);
    res.status(201).json({ success: true, data: attendee });
  } catch (error: any) {
    console.error("Error registering attendee:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all attendees

export const getAttendees = async (req: Request, res: Response) => {
  try {
    const attendees = await Attendee.find();
    res.status(200).json({ success: true, count: attendees.length, data: attendees });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
