import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'
import { ReasonPhrases, StatusCodes } from "http-status-codes";

dotenv.config();

const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + Typescript Server '  + ReasonPhrases.OK);
});

export default app;