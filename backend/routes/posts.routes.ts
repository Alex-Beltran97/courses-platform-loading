import { Router } from 'express';
import { createPost, deletePosts, getPost, getPosts, patchPosts, putPosts } from '../controllers/posts.controller';

const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", putPosts);
router.patch("/:id", patchPosts);
router.delete("/:id", deletePosts);

export default router;