import express from "express";
import { StatusCodes } from "http-status-codes";
import Eclass from "./EclassModel";

export const eClassController = express.Router();

// might need to populate some fields
eClassController.get("/display", async (req, res)=> {
    try {
       const search = await Eclass.find({isDisplayed: true});
      if(search.length === 0){
          return res.status(StatusCodes.ACCEPTED).send({message: "No active class found"});
      }
      if(search !== null){
          res.status(StatusCodes.OK).send({message: "Active Class or classes found", class: search});
      } else res.status(StatusCodes.ACCEPTED).send({message: "No class found"});
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: err });
    }
})

eClassController.post("/search", async (req, res) => {
  const { body } = req;
  let search;
  try {
    if (body.id) {
      search = await Eclass.findById(body.id);
    } else {
      search = await Eclass.find(body);
    if(search.length === 0){
        return res.status(StatusCodes.ACCEPTED).send({message: "No active class found"});
    }
    }
    if(search !== null){
        res.status(StatusCodes.OK).send({message: "Active Class or classes found", class: search});
    } else res.status(StatusCodes.ACCEPTED).send({message: "No class found"});
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err });
  }
});

eClassController.post("/", async (req, res) => {
    //Blind creation, should have some validation first..
    const {body} = req;
    try {
        const created = await Eclass.create(body);
        res.status(StatusCodes.CREATED).send({message: "Class created", class: created});
    }catch (err){
        res.status(StatusCodes.BAD_REQUEST).send({ message: "Encountered Error, no class created " + err });
    }
});

eClassController.put("/", async (req, res) => {
    const {body} = req;
    if (!body.id && !body.name){
        res.status(StatusCodes.BAD_REQUEST).send({message: "Request needs to contain either Class ID or Class."});
        return;
    }
    try {
        let update;
        if(body.id != undefined){
            update = await Eclass.findByIdAndUpdate(body.id, body, {new:true});
        } else {
            update = await Eclass.updateMany(body.name, body, {new:true});
        }
        
        if(update !== null){
        res.status(StatusCodes.OK).send({message: "Class or Classes updated", class: update});}
        else res.status(StatusCodes.ACCEPTED).send({message: "No class or classes updated"});

    }catch (err){
        res.status(StatusCodes.BAD_REQUEST).send({ message: "Encountered Error, no class updated " + err });
    }
});

eClassController.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const del = await Eclass.findByIdAndUpdate(id, {
            isDisplayed: false
        })
        res.status(StatusCodes.OK).send({message: "Class will no longer be displayed", class: del});
    }catch(err){
        res.status(StatusCodes.BAD_REQUEST).send({ message: "Encountered Error, no class deleted " + err });
    }
});
