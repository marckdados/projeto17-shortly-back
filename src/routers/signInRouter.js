import { Router } from "express";
import { loginUser } from "../controllers/signInController.js";
import { signInValidate } from "../middlewares/signInMiddleware.js";

const signInRouter = Router();

signInRouter.post("/sign-in", signInValidate, loginUser);

export default signInRouter;
