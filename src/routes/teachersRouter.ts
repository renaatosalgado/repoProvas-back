import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import * as teachersController from "../controllers/teachersController.js";

const teachersRouter = Router();

teachersRouter.get(
  "/teachers",
  validateTokenMiddleware,
  teachersController.listAll
);

teachersRouter.get(
  "/teachers/:teacherId/tests",
  validateTokenMiddleware,
  teachersController.listTeacherTests
);

teachersRouter.get(
  "/teachers/:teacherId/tests/categories",
  validateTokenMiddleware,
  teachersController.listTeacherTestsCategories
);

export default teachersRouter;
