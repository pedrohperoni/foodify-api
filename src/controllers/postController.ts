import { Request, Response } from "express";


export async function createPost(req: Request, res: Response) {
   console.log(req.body)

  res.sendStatus(201);
}


