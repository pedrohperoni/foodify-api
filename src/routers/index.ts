import { Router } from "express";
import authRouter from "./authRouter.js";
import clarifaiRouter from "./clarifaiRouter.js";
import postRouter from "./postRouter.js";
import userRouter from "./userRouter.js";
import tagRouter from "./tagRouter.js";

const router = Router();

router.use(clarifaiRouter);
router.use(userRouter);
router.use(authRouter);
router.use(postRouter);
router.use(tagRouter);

export default router;
