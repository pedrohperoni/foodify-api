import { Router } from "express";
import clarifaiRouter from "./clarifaiRouter.js";

const router = Router();

router.use(clarifaiRouter);


export default router;