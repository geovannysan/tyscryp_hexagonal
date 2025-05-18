
import express, { Request, Response, NextFunction } from "express";

import '../infraestructura/database/inddex'

import router from "./route";


const app = express();

app.use(express.json());
app.use(router);



export default app;
