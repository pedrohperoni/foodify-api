import { prisma } from "../database.js";
import { Posts } from "@prisma/client";

type Post = Omit<Posts, "id">

export async function createPost(post: Post){
   return await prisma.posts.create({
      data: post
   })
}