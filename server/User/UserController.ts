import express from 'express';
import { PrismaClient } from '@prisma/client'
import { StatusCodes } from 'http-status-codes';

const router = express.Router();
const prisma = new PrismaClient();


router.post("/", async (req, res) => {
  const { body } = req;
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: body,
    });
    res.status(StatusCodes.ACCEPTED).send({user})
  } catch (err) {
    console.log(err)
    res.status(StatusCodes.BAD_REQUEST).send({ message: err });
  }
});


module.exports = router;