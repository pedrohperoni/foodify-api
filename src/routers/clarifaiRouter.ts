import { Router } from "express";
import * as clarifaiController from "../controllers/clarifaiController.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import foodURLschema from "../schemas/foodURLSchema.js";

const clarifaiRouter = Router();

clarifaiRouter.get("/clarifai/food",schemaValidationMiddleware(foodURLschema), clarifaiController.getFoodDescriptionAndTags);

export default clarifaiRouter;