import { Request, Response } from "express";
import * as userService from "../services/userService.js";

export async function userCreate(req: Request, res: Response) {
  const userData = req.body;
  await userService.createUser(userData);
  res.sendStatus(201);
}

export async function userUpdate(req: Request, res: Response) {
  const userData = req.body;
  const userId = parseInt(req.params.userId);
  await userService.updateUser(userData, userId);

  res.sendStatus(200);
}

export async function getUser(req: Request, res: Response) {
  const userId = parseInt(req.params.userId);
  const user = await userService.getUser(userId);
  console.log(user);
  res.send(user).status(200);
}
