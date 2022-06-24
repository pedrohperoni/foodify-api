import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import userRegisterSchema from "../schemas/userRegisterSchema.js";
import userEditSchema from "../schemas/userEditSchema.js";
import { validateJWT } from "../middlewares/JWTValidationMiddleware.js";

const userRouter = Router();

userRouter.post(
  "/users/create",
  schemaValidationMiddleware(userRegisterSchema),
  userController.userCreate
);
userRouter.put(
  "/users/update/:userId",
  validateJWT,
  schemaValidationMiddleware(userEditSchema),
  userController.userUpdate
);

export default userRouter;
