import { Request, Response } from "express";
import * as clarifaiService from "../services/clarifaiService.js"

export async function getFoodDescriptionAndTags(req: Request, res: Response) {
 const url = "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80";
 const foodObject = await clarifaiService.getFoodDescriptionAndTags(url)
 
  res.send(foodObject).status(200)
}