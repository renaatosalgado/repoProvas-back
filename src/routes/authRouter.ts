import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import loginSchema from "../schemas/loginSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";
import * as authController from "../controllers/authController.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";

const authRouter = Router();

authRouter.post(
  "/auth/sign-up",
  validateSchemaMiddleware(signUpSchema),
  authController.createUser
);
authRouter.post(
  "/auth/login",
  validateSchemaMiddleware(loginSchema),
  authController.login
);

export default authRouter;
