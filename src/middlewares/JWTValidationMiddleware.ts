import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository.js";

export async function validateJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  const secretKey = process.env.JWT_SECRET;
  if (!token) throw { type: "not_found", message: "Token not found" };

  try {
    const data = jwt.verify(token, secretKey) as { userId: number };
    const user = await userRepository.findUserById(data.userId);
    if (!user) throw { type: "unauthorized", message: "User not found" };
    res.locals.user = user;
    next();
  } catch {
    throw { type: "unauthorized", message: "Invalid token" };
  }
}
