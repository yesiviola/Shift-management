import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("get the list of all users");
});

export default router;
