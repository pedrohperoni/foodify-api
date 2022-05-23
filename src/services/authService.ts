import { prisma } from '../database.js';
import { Users } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

type UserLoginData= Omit<Users, 'id' | 'name'>;

export async function login(UserLoginRequest: UserLoginData ){
   const {email, password} = UserLoginRequest

   const user = await findUserByEmail(email)
   await checkPassword(password, user.password)

   const secretKey = process.env.JWT_SECRET;
   const config = { expiresIn: 60*60*24*60 }
   const token = jwt.sign(user, secretKey, config);
   const loginData = {
      token, 
      userId: user.id,
      email: user.email,
      name: user.name,
      profileUrl: user.profileUrl,
      backgroundUrl: user.backgroundUrl,
   }
   
   return loginData
}

async function findUserByEmail(email: string) {
   const user = await prisma.users.findFirst({
     where: { email: email },
   });
   if (!user){
      throw { type: "not_found", message: "Email not found" };
   }

   return user
 }

 async function checkPassword(requestPassword: string, userPassword: string ){
    if(!bcrypt.compareSync(requestPassword, userPassword)) throw {
       type: 'unauthorized', message: 'Passwords do not match'
    }
 }