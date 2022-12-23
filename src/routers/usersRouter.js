import { Router } from "express";
import { getInfoUser } from "../controllers/userController.js";
import { infoUserValidate } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.get("/users/me", infoUserValidate, getInfoUser);

export default userRouter;
