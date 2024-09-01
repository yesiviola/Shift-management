import { Router } from "express";
import {
  getUserID,
  getUsers,
  login,
  register,
} from "../controllers/usersController";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserID);

router.post("/register", register);

router.post("/login", login);

export default router;
