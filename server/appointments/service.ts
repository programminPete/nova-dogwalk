// handle database connections
// Assuming DB connection elsewhere
const db = require("../../db");

interface GetAppointmentParams {
  dateTime: string;
}

export const getAppointmentByTime = async (params: GetAppointmentParams) => {
  // code that gets current appointments by time slot , calls repo to getAppointment by time
  // returns appointment or null if not exists
};
