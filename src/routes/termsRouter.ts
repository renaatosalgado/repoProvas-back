import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import * as termsController from "../controllers/termsController.js";

const termsRouter = Router();

termsRouter.get("/terms", validateTokenMiddleware, termsController.listAll);

export default termsRouter;
