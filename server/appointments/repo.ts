// handle database connections
// Assuming DB connection elsewhere
const db = require("../../db");

interface NewAppointmentParams {
  startTime: Date;
  endTime: Date;
  dogRefId: string;
  userRefId: string;
}

export const createAppointment = async (params: NewAppointmentParams) => {
  const { startTime, endTime, dogRefId, userRefId } = params;
  const values = [startTime, endTime, dogRefId, userRefId];
  const query = `
    INSERT INTO appointments (start_time, end_time, dog_ref_id, user_ref_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  try {
    const result = await db.one(query, values);
    return result;
  } catch (error) {
    throw Error(`Error inserting appointment: ${error}`);
  }
};
