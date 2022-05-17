import { prisma } from "../database.js";
import { UserData } from "../services/userService.js";

export async function findUserById(userId: number){
   return await prisma.users.findFirst({
      where: {
         id: userId
      }
   })
}

export async function create(createUser: UserData) {
   await prisma.users.create({
       data: createUser
   })
}