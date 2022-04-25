import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import * as testsController from "../controllers/testsController.js";

const testsRouter = Router();

testsRouter.get("/get/disciplines/tests/discipline/:disciplineId", validateTokenMiddleware, testsController.listAll);

export default testsRouter;
