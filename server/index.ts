import express from "express";
import { fetchAppointments } from "./appointments/controller";

const app = express();
const PORT = 8000;

// Assuming I have an auth middleware
app.get("/appointments", authMiddleware, fetchAppointments);
app.post("/appointments", authMiddleware, postAppointment);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
