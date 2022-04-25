import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import * as teachersController from "../controllers/teachersController.js";

const teachersRouter = Router();

teachersRouter.get(
  "/teachers",
  validateTokenMiddleware,
  teachersController.listAll
);

export default teachersRouter;
