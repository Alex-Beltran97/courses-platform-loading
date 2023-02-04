import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  patchUser,
  putUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", putUser);
router.patch("/:id", patchUser);
router.delete("/:id", deleteUser);

export default router;
