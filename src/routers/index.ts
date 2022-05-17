import { Router } from "express";
import authRouter from "./authRouter.js";
import clarifaiRouter from "./clarifaiRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(clarifaiRouter);
router.use(userRouter)
router.use(authRouter)



export default router;