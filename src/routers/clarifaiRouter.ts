import { Router } from "express";
import * as clarifaiController from "../controllers/clarifaiController.js";

const clarifaiRouter = Router();

clarifaiRouter.get("/clarifai/food", clarifaiController.getFoodDescriptionAndTags);

export default clarifaiRouter;