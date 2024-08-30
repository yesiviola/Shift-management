import { Router } from "express";
import usersRoutes from "./usersRouter";

const router = Router();

router.use("/users", usersRoutes);

export default router;
