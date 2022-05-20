import { Router } from "express";
import * as postController from "../controllers/postController.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import createPostSchema from "../schemas/createPostSchema.js";

const postRouter = Router();

postRouter.post(
  "/posts/create",
  schemaValidationMiddleware(createPostSchema),
  postController.createPost
);
postRouter.get("/posts", postController.getPosts);

export default postRouter;
