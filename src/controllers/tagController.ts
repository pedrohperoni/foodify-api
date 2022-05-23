import { Request, Response } from "express";
import * as tagService from "../services/tagService.js";

export async function getTopTags(req: Request, res: Response){
   const tags = await tagService.getTop3Tags()
   res.send(tags).status(200)
}