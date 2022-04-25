import { Router } from "express";
import authRouter from "./authRouter.js";
import disciplinesRouter from "./disciplinesRouter.js";
import teachersRouter from "./teachersRouter.js";
import termsRouter from "./termsRouter.js";
import testsRouter from "./testsRouter.js";

const router = Router();

router.use(authRouter);
router.use(termsRouter);
router.use(disciplinesRouter);
router.use(testsRouter);
router.use(teachersRouter);

export default router;
