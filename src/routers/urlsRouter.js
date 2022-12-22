import { Router } from "express";
import {
  createUrl,
  deleteUrl,
  getUrlPerId,
  openShortUrl,
} from "../controllers/urlControlle.js";
import {
  deleteUrlValidate,
  getUrlValidate,
  shortUrlValidate,
  urlValidate,
} from "../middlewares/urlMiddleware.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", urlValidate, createUrl);
urlRouter.get("/urls/:id", getUrlValidate, getUrlPerId);
urlRouter.get("/urls/open/:shortUrl", shortUrlValidate, openShortUrl);
urlRouter.delete("/urls/:id", deleteUrlValidate, deleteUrl);

export default urlRouter;
