import { Router } from "express";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./signInRouter.js";
import urlRouter from "./urlsRouter.js";

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(urlRouter);
export default router;
