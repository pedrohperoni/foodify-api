import { NextFunction, Request, Response } from "express";

export function errorHandlerMiddleware(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("ERROR (errorHandlerMiddleware)", error);

  if (error.type === "bad_request") return res.sendStatus(400);
  if (error.type === "unauthorized") return res.sendStatus(401);
  if (error.type === "not_found") return res.sendStatus(404);
  if (error.type === "conflict") return res.sendStatus(409);
  if (error.type === "unprocessable_entity") return res.sendStatus(422);
  if (error.type === "service_unavailable") return res.sendStatus(503);
  res.sendStatus(500);
}
