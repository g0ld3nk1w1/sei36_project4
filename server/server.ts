//Splitting the listening so that tests can end gracefully

import app from ".";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const server = app.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
})

export default server;