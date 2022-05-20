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
