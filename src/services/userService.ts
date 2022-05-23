import { Users } from "@prisma/client";
import { prisma } from "../database.js";
import * as userRepository from "../repositories/userRepository.js";
import * as unsplashService from "../services/unsplashService.js"
import bcrypt from "bcrypt"

export type UserData = Omit<Users, "id">;
export type UserDataNoBG = Omit<Users, "id" | "backgroundUrl">;

export async function createUser(userData: UserDataNoBG) {
   const { email, password, name} = userData;
   let {profileUrl} = userData
 
   await findUserByEmail(email);
   const hashPassword = bcrypt.hashSync(password, 10);
   if(profileUrl === undefined) {
      profileUrl = await userDefaultFace()
   }
   const backgroundUrl = await userDefaultBackground()
   await userRepository.create({ email, password: hashPassword, name, profileUrl, backgroundUrl });
 }

 async function userDefaultFace(){
   return await unsplashService.getRandomFace()
 }

 async function userDefaultBackground(){
   return await unsplashService.getRandomBackground()
 }

 async function findUserByEmail(email: string) {
   const findUserByEmail = await prisma.users.findFirst({
     where: { email: email },
   });
   if (findUserByEmail)
     throw { type: "conflict", message: "Email already in use" };
   return;
 }