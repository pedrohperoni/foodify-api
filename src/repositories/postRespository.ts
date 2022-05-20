import { prisma } from "../database.js";
import { Posts } from "@prisma/client";

type Post = Omit<Posts, "id">

export async function createPost(post: Post){
   return await prisma.posts.create({
      data: post
   })
}

export async function getPosts(){
   return await prisma.posts.findMany({
      orderBy:[{
         id: 'desc',
      }],
      select:{
         name: true,
         imageUrl: true,
         users:{
            select:{
               name: true
            }
         },
         postsTags:{
            select:{
               tags:true
            }
         }
      }
   })
}