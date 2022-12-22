import { Router } from "express";
import { createUrl, getUrlPerId } from "../controllers/urlControlle.js";
import { getUrlValidate, urlValidate } from "../middlewares/urlMiddleware.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", urlValidate, createUrl);
urlRouter.get("/urls/:id", getUrlValidate, getUrlPerId);

export default urlRouter;
