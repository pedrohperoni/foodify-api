import { prisma } from "../database.js";
import { PostsTags } from "@prisma/client";

type PostTag = Omit<PostsTags, "id">

export async function create(postTag: PostTag){
   return await prisma.postsTags.create({
      data: postTag
   })
}