import { Router } from "express";
import * as tagController from "../controllers/tagController.js";

const tagRouter = Router();

tagRouter.get("/tags/top", tagController.getTopTags);

export default tagRouter;
