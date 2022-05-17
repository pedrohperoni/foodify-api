import { Users } from "@prisma/client";
import { prisma } from "../database.js";
import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt"

export type UserData = Omit<Users, "id">

export async function createUser(userData: UserData) {
   const { email, password, name } = userData;
 
   await findUserByEmail(email);
   const hashPassword = bcrypt.hashSync(password, 10);
   await userRepository.create({ email, password: hashPassword, name });
 }

 async function findUserByEmail(email: string) {
   const findUserByEmail = await prisma.users.findFirst({
     where: { email: email },
   });
   if (findUserByEmail)
     throw { type: "conflict", message: "Email already in use" };
   return;
 }