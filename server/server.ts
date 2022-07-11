//Splitting the listening so that tests can end gracefully
import {Express} from 'express';
import app from ".";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const server : Express = app;
server.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
})

export default server;