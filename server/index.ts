import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import mongoose, { mongo } from "mongoose";
import {userController} from './User/UserController';
import { productController } from "./Product/ProductController";
import { eClassController } from "./Eclass/EclassController";
import { orderController } from "./Order/OrderController";


dotenv.config();

const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

try{
const mconn = mongoose.connect(process.env.LOCAL_MONGO_URL as string);
mongoose.connection.on("open", () => {
    console.log("connect to mongodb");
})
}
catch (err){
    console.log(err);
}

app.use("/user", userController);
app.use("/product", productController);
app.use("/class", eClassController)
app.use("/order", orderController)

app.get("/", (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + Typescript Server '  + ReasonPhrases.OK);
});

export default app;