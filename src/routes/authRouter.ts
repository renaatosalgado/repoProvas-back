import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import loginSchema from "../schemas/loginSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";
import * as authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.post(
  "/auth/sign-up",
  validateSchemaMiddleware(signUpSchema),
  authController.createUser
);
authRouter.post("/auth/login", validateSchemaMiddleware(loginSchema));

export default authRouter;
