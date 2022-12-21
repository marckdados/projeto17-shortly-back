import { Router } from "express";

const signInRouter = Router();

signInRouter.post("/sign-in", signInValidate);
