import {Request, Response} from "express";
import {PhotoModel} from "../models/PhotoModel";
import {PhotoUploadData} from "../types/PhotoUploadData";



export const uploadPhoto = async (req: Request, res: Response) => {

    let photoUploadData: PhotoUploadData = req.body;
    console.log("MODEL")
    console.log(photoUploadData)


    if (!photoUploadData.photo_base64) {
        return res.send({
            status: 400,
            message: "photo base64 encoding has not been provided"
        })
    }
    if (!photoUploadData.photo_description) {
        return res.send({
            status: 400,
            message: "Photo Description has not been provided "
        })
    }


    const photoModel = new PhotoModel();
    await photoModel.uploadPhoto(photoUploadData)
    res.send({
        status: 201,
        message: "Photo uploaded successfully!"
    })
}

export const getPhotos = async (req: Request, res: Response) => {

    const userId = parseInt(req.params.id);
    const photoModel = new PhotoModel();

    const user = await photoModel.getPhotos(userId);
    res.send(user);

}