import express from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from './ProductModel';

export const productController =  express.Router();

productController.get("/display", async (req, res)=> {
    try {
       const search = await Product.find({isDisplayed: true});
      if(search.length === 0){
          return res.status(StatusCodes.ACCEPTED).send({message: "No active Product found"});
      }
      if(search !== null){
          res.status(StatusCodes.OK).send({message: "Active Product or products found", product: search});
      } else res.status(StatusCodes.ACCEPTED).send({message: "No Product found"});
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: err });
    }
})

productController.post("/search",async (req, res) => {
    const {body} = req;
    try {
        let ret;
        if (body.id){
            ret = await Product.findById(body.id)
        } else {
            ret = await Product.find(body);
        }
        res.status(StatusCodes.OK).send({message: "Product Found", product: ret});
    } catch (err){
        res.status(StatusCodes.BAD_REQUEST).send({message: "Product not found or encountered error" + err});
    }
})

productController.post("/",async (req, res) => {
    const {body} = req;
    try {
        const creation = await Product.create(body);
        res.status(StatusCodes.CREATED).send({message: "New Product Created", product: creation});
    } catch (err){
        res.status(StatusCodes.BAD_REQUEST).send({message: "No Product created. Please see " + err});
    }
})

productController.put("/",async (req, res) => {
    const {body} = req;
    if (!body.id && !body.name){
        res.status(StatusCodes.BAD_REQUEST).send({message: "Request needs to contain either Product ID or Product Name."});
        return;
    }
    try{
        let update;
        if(body.id != undefined) {
            update = await Product.findByIdAndUpdate(body.id,body, {new: true});

        } else if (body.name){
            update = await Product.findOneAndUpdate({name: body.name}, body, {new: true});
        }
    
        if(update === null){
            res.status(StatusCodes.NOT_FOUND).send({message: "Product not found, nothing updated."});
        }else res.status(StatusCodes.OK).send({message: "Updated Product", product: update});

    } catch (err){
        res.status(StatusCodes.BAD_REQUEST).send({message: "Encountered error. Please see " + err});
    }
})

//Only updates product to isDisplayed if exists.
productController.delete("/:id",async (req, res) => {
    const {id} = req.params;
    try {
        const oldDoc = await Product.findByIdAndUpdate(id, {
            isDisplayed: false
        });
        res.status(StatusCodes.OK).send({data: oldDoc})
    } catch (err){
        res.send(err).status(StatusCodes.BAD_REQUEST);
    }
})

