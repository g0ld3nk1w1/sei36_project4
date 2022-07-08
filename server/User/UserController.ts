import express from 'express';
import { PrismaClient } from '@prisma/client'
import { StatusCodes } from 'http-status-codes';
//create validator


const router = express.Router();
const prisma = new PrismaClient();


router.get("/", async (req, res) => {
  const { body } = req;

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: body,
    });
    res.status(StatusCodes.ACCEPTED).send({user})
  } catch (err) {
    console.log("User GET error ", err)
    res.status(StatusCodes.BAD_REQUEST).send({ message: err });
  }
});

router.post("/", async (req, res) => {
    const {body} =  req;
    try {
        const create = await prisma.user.create({
            data: body});
        res.status(StatusCodes.ACCEPTED).send(create);
    } catch (err){
        console.log("User PUT error ", err);
        res.status(StatusCodes.BAD_REQUEST).send({ message: err });
    }
})


module.exports = router;