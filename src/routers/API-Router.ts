import { Router } from "express";
import * as clarifaiController from "../controllers/clarifaiController.js";
import * as unsplashController from "../controllers/unsplashController.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import foodURLschema from "../schemas/foodURLSchema.js";


const API_Router = Router();

API_Router.post(
  "/clarifai/food",
  schemaValidationMiddleware(foodURLschema),
  clarifaiController.getFoodDescriptionAndTags
);

API_Router.post(
  "/unsplash/:image",
  unsplashController.getFirstImageResultByName
);
export default API_Router;
