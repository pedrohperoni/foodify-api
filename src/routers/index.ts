import { Router } from "express";
import authRouter from "./authRouter.js";
import postRouter from "./postRouter.js";
import userRouter from "./userRouter.js";
import tagRouter from "./tagRouter.js";
import API_Router from "./API-Router.js";

const router = Router();

router.use(API_Router)
router.use(userRouter);
router.use(authRouter);
router.use(postRouter);
router.use(tagRouter);

export default router;
