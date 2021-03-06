import { Request, Response } from "express";
import * as unsplashService from "../services/unsplashService.js"


export async function getFirstImageResultByName(req: Request, res: Response) {
  const {image} = req.params
  console.log(req.params)
  const imageUrl = await unsplashService.getImageByName(image)
  console.log(imageUrl)
  res.send(imageUrl).status(200);
}
