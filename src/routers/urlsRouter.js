import { Router } from "express";
import {
  createUrl,
  getUrlPerId,
  openShortUrl,
} from "../controllers/urlControlle.js";
import {
  getUrlValidate,
  shortUrlValidate,
  urlValidate,
} from "../middlewares/urlMiddleware.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", urlValidate, createUrl);
urlRouter.get("/urls/:id", getUrlValidate, getUrlPerId);
urlRouter.get("/urls/open/:shortUrl", shortUrlValidate, openShortUrl);

export default urlRouter;
