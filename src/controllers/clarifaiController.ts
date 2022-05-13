import { Request, Response } from "express";
import * as clarifaiService from "../services/clarifaiService.js"

export async function getFoodDescriptionAndTags(req: Request, res: Response) {
 const url = (req.body.url)
 const foodObject = await clarifaiService.getFoodDescriptionAndTags(url)
 
  res.send(foodObject).status(200)
}