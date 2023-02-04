import { Router } from "express";
import { createRoles, deleteRole, getRoles, putRole } from "../controllers/roles.controller";

const router = Router();

router.get("/", getRoles);
router.post("/", createRoles);
router.put("/:id", putRole);
router.delete("/:id", deleteRole);

export default router;
