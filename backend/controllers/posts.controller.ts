import { Request, Response } from "express";
import Post from "../models/Post";
import User from "../models/User";

const attributes = ["id", "name", "birth_date", "status"];

export const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.findAll({
    include: { model: User, as: "author", attributes },
    order:[ ["updatedAt", "DESC"] ],
    where: { status: 1 }
  });

  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;

  const post = await Post.findByPk(id, {
    include: { model: User, as: "author", attributes },
  });

  res.json(post ?? {});
};

export const createPost = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const post = await Post.build(body);

    post.save();

    res.json(post);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "There was a problem while creating an post",
    });
  }
};

export const putPosts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const post = await Post.findByPk(id);

    await post?.update({ ...body, updatedAt: new Date().toISOString() });

    res.json(post);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Something was wrong while editing the post" });
  }
};

export const patchPosts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const post = await Post.findByPk(id);

    await post?.update({ ...body, updatedAt: new Date().toISOString() });

    res.json(post);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Something was wrong while editing the post",
    });
  }
};

export const deletePosts = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id);

    if(!post){
      return res.status(400).json({
        msg: "Post was not found"
      })
    };

    await post?.update({ status: 0, updatedAt: new Date().toISOString() });

    res.json(post);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "There is a problem trying to delete this user",
    });
  }
};
