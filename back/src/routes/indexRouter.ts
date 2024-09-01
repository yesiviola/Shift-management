import { Router } from "express";
import usersRoutes from "./usersRouter";
import appointmentsRoutes from "./appointmentsRoutes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/appointments", appointmentsRoutes);

export default router;
