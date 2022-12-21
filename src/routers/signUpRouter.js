import { Router } from "express";
import { createUser } from "../controllers/signUpController.js";
import { signUpValidate } from "../middlewares/signUpMiddleware.js";

const signUpRouter = Router();

signUpRouter.post("/sign-up", signUpValidate, createUser);

export default signUpRouter;
