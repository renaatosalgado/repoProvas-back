import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import * as disciplinesController from "../controllers/disciplinesController.js";

const disciplinesRouter = Router();

disciplinesRouter.get("/terms/:termId/disciplines", validateTokenMiddleware, disciplinesController.listAll);

export default disciplinesRouter;
