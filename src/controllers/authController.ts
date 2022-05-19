import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function login(req: Request, res: Response) {
  const loginRequestData = req.body;

  const loginSessionData = await authService.login(loginRequestData);
  res.send(loginSessionData).status(200);
}

export async function token(req: Request, res: Response) {
  res.sendStatus(200);
}
