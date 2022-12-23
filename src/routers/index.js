import { Router } from "express";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./signInRouter.js";
import urlRouter from "./urlsRouter.js";
import userRouter from "./usersRouter.js";
import rankingRouter from "./rankingRouter.js";

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(urlRouter);
router.use(userRouter);
router.use(rankingRouter);
export default router;
