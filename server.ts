import   {Express} from "express"
import express = require('express');

import {userRouter} from "./routes/userRoutes";

const cors = require('cors');

const server: Express = express();
server.use(express.json()); // Add this middleware before your routes
server.use(cors());
//server.set("view engine", "pug")
server.use('/user_api', userRouter);


//server.get("/users/all", getAllUsers)
//server.post("/users/add/:id/:name/:email/:age", addUser)
//server.get("/users/find/:email", findUserByEmail)

server.listen(500, () => {
    console.log("Backend Started...")
})
