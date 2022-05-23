import { prisma } from "../database.js";

export async function createTag(tag: string) {
  return await prisma.tags.create({
    data: {
      name: tag,
    },
  });
}

export async function findTag(tag: string) {
   return await prisma.tags.findUnique({
      where: {
         name: tag
      }
   })
}

export async function getTopTags(lastX: number){
   return await prisma.postsTags.groupBy({
      by: ['tagId'],
      _count: {
         tagId: true,
      },
      take: lastX,
      orderBy:{
         _count:{
            tagId: 'desc'
         }
      }
   })
}

export async function getTagNameById(tagId: number){
   return await prisma.tags.findUnique({
      where: {
         id: tagId
      }
   })
}