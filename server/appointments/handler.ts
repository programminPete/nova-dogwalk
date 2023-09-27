import { Request, Response } from "express";
import { createAppointment } from "./repo";
import { getAppointmentByTime } from "./service";
import { unpackUserInfoFromToken } from "../lib/helpers";

export const postAppointment = async (req: Request, res: Response) => {
  try {
    const { dateTime, dogRefId } = req.body;
    const token = req.header("userToken");

    const userRefId = unpackUserInfoFromToken(token); // unpack userRefId from auth token
    if (!userRefId) {
      res.status(403).json({ error: "Missing required fields" });
    }
    if (!dateTime || !dogRefId) {
      res.status(400).json({ error: "Missing required fields" });
    }
    const startTime = new Date(dateTime);
    const endTime = new Date(
      new Date(dateTime).setHours(startTime.getHours() + 1)
    );
    // check to see if an appointment already exists for this time slot:
    const appointment = await getAppointmentByTime({ dateTime });
    if (appointment) {
      res.status(400).json({ error: "Appointment already exists" });
    }
    const newAppointment = await createAppointment({
      startTime,
      endTime,
      dogRefId,
      userRefId,
    });

    res.status(200).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: "Failed to post new appointment" });
  }
};
