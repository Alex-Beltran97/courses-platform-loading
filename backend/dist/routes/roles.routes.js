"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_controller_1 = require("../controllers/roles.controller");
const router = (0, express_1.Router)();
router.get("/", roles_controller_1.getRoles);
router.post("/", roles_controller_1.createRoles);
router.put("/:id", roles_controller_1.putRole);
router.delete("/:id", roles_controller_1.deleteRole);
exports.default = router;
//# sourceMappingURL=roles.routes.js.map