import { Router } from "express";
import * as authController from "../controllers/authController.js"
import { validateJWT } from "../middlewares/JWTValidationMiddleware.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import userLoginSchema from "../schemas/userLoginSchema.js"

const authRouter = Router();

authRouter.post("/login", schemaValidationMiddleware(userLoginSchema), authController.login);
authRouter.post("/token", validateJWT, authController.token)

export default authRouter;