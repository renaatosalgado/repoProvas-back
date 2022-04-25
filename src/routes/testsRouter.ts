import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import * as testsController from "../controllers/testsController.js";

const testsRouter = Router();

testsRouter.get("/terms/disciplines/:disciplineId/tests", validateTokenMiddleware, testsController.listAll);
//"/terms/:termId/disciplines/:disciplineId/tests"

export default testsRouter;
