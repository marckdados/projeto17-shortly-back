import { Router } from "express";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./signInRouter.js";

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
export default router;
