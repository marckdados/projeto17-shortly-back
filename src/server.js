import express, { json } from "express";
import dotenv from "dotenv";
import router from "./routers/index.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
