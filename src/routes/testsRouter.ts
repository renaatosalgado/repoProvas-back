import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import * as testsController from "../controllers/testsController.js";

const testsRouter = Router();

testsRouter.get("/bosta", validateTokenMiddleware);

export default testsRouter;
