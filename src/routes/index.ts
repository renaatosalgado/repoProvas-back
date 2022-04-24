import { Router } from "express";
import authRouter from "./authRouter.js";
import disciplinesRouter from "./disciplinesRouter.js";
import termsRouter from "./termsRouter.js";

const router = Router();

router.use(authRouter);
router.use(termsRouter);
router.use(disciplinesRouter)

export default router;
