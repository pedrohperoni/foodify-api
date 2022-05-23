import { Request, Response } from "express";
import * as tagService from "../services/tagService.js";

export async function getTopTags(req: Request, res: Response){
   const number = parseInt(req.params.number);
   const tags = await tagService.getTop3Tags(number)
   res.send(tags).status(200)
}