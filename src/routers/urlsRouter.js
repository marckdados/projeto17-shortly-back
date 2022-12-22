import { Router } from "express";
import { createUrl } from "../controllers/urlControlle.js";
import { urlValidate } from "../middlewares/urlMiddleware.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", urlValidate, createUrl);

export default urlRouter;
