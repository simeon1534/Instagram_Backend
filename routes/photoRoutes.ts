import {Router} from "express";
import {getPhotos, uploadPhoto} from "../controllers/PhotoController";


export const photoRouter = Router();
photoRouter.post("/new_photo", uploadPhoto)
photoRouter.get("/user/:id", getPhotos)