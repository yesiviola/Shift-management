import { Router } from "express";
import {
  cancelAppointment,
  getAppointmentByID,
  getAppointments,
  scheduleAppointment,
} from "../controllers/appointmentController";

const router = Router();

router.get("/", getAppointments);
router.get("/:id", getAppointmentByID);
router.post("/schedule", scheduleAppointment);
router.put("/cancel", cancelAppointment);

export default router;
