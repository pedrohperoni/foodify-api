import { Request, Response } from "express";
import * as postService from "../services/postService.js";

export async function createPost(req: Request, res: Response) {
  const { userId, imageUrl, tags } = req.body;
  const name = req.body.description;
  const post = {
    userId,
    imageUrl,
    name,
  };
  await postService.createPost(post, tags);
  res.sendStatus(201);
}

export async function getPosts(req: Request, res: Response){
   const posts = await postService.getPosts()
   res.send(posts).status(200)
}