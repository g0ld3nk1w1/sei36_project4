import express from 'express';
import { StatusCodes } from 'http-status-codes';
import Order from './OrderModel';

export const orderController = express.Router();

orderController.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const order = await Order.findById(id);
        res.status(StatusCodes.OK).send({message: "Order Found", order: order});
    } catch (err){
        res.status(StatusCodes.BAD_REQUEST).send({message: "Failed to get Order" + err});
    }
});

orderController.post("/", async (req, res) => {
    const {body} = req;
    try {
        const order = await Order.create(body);
        res.status(StatusCodes.OK).send({message: "Order created!", order: order});
    }catch (err){
        res.status(StatusCodes.BAD_REQUEST).send({message: "Failed to create Order. See error: " + err});
    }

});

//Generally should only expect status updates...
orderController.put("/", async (req, res) => {
    const {body} = req;
    try{
        if(!body.id) return res.status(StatusCodes.BAD_REQUEST).send({message: "Order ID is required for updates"});

        const order = await Order.findByIdAndUpdate(body.id,body,{new:true});
        res.status(StatusCodes.OK).send({message: "Order updated", order: order});
    } catch (err){
        res.status(StatusCodes.BAD_REQUEST).send({message: "Failed to upddate Order. See Error: " + err});
    }

});