import { prisma } from "../database.js";
import { UserData, UserDataUpdate } from "../services/userService.js";

export async function findUserById(userId: number) {
  return await prisma.users.findFirst({
    where: {
      id: userId,
    },
  });
}

export async function create(createUser: UserData) {
  await prisma.users.create({
    data: createUser,
  });
}

export async function update(id: number, userData: UserDataUpdate) {
  await prisma.users.update({
    where: {
      id: id,
    },
    data: userData,
  });
}

