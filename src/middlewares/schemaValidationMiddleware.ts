import { NextFunction, Request, Response } from "express";

export function schemaValidationMiddleware(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
     console.log("oi", req.body)
    const validation = schema.validate(req.body);
    if (validation.error) {
      throw { type: "unprocessable_entity", message: "Invalid schema"};
    }

    next();
  };
}