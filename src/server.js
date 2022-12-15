import express, { json } from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(json);
app.use(cors);
app.use(router);

const port = process.env.PORT;

app.listen(port, () => console.log(`Conectado na porta ${port}`));
