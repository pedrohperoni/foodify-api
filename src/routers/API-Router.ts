import { Router } from "express";
import * as clarifaiController from "../controllers/clarifaiController.js";
import * as unsplashController from "../controllers/unsplashController.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import foodURLschema from "../schemas/foodURLSchema.js";
import { validateJWT } from "../middlewares/JWTValidationMiddleware.js";


const API_Router = Router();

API_Router.post(
  "/clarifai/food",
  validateJWT,
  schemaValidationMiddleware(foodURLschema),
  clarifaiController.getFoodDescriptionAndTags
);

API_Router.post(
  "/unsplash/:image",
  validateJWT,
  unsplashController.getFirstImageResultByName
);
export default API_Router;
