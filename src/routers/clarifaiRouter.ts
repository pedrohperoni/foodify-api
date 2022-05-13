import { Router } from "express";
import * as clarifaiController from "../controllers/clarifaiController.js";

const clarifaiRouter = Router();

clarifaiRouter.get("/clarifai/title", clarifaiController.getTitleFromAPI);
clarifaiRouter.get("/clarifai/food", clarifaiController.getFoodDataFromAPI);

export default clarifaiRouter;