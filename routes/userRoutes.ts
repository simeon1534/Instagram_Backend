import {Router} from "express";
import {createUser, deleteUser, getUser, getUsers,updateUser} from "../controllers/UserController";


export const userRouter = Router();
userRouter.get("/user/:id", getUser)
userRouter.get("/users", getUsers)
userRouter.post("/new_user", createUser)
userRouter.delete("/user/delete/:id",deleteUser)
userRouter.put("/user/update/:id", updateUser)