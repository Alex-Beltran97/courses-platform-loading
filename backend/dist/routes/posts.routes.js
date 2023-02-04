"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = require("../controllers/posts.controller");
const router = (0, express_1.Router)();
router.get("/", posts_controller_1.getPosts);
router.get("/:id", posts_controller_1.getPost);
router.post("/", posts_controller_1.createPost);
router.put("/:id", posts_controller_1.putPosts);
router.patch("/:id", posts_controller_1.patchPosts);
router.delete("/:id", posts_controller_1.deletePosts);
exports.default = router;
//# sourceMappingURL=posts.routes.js.map