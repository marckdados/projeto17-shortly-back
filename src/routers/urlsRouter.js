import { Router } from "express";

const urlRouter = Router();

urlRouter.post("/urls/shorten", urlValidate);
