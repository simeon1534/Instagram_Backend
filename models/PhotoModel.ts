//
//
//
// const fs = require('fs');
// // Read the image file
// const image = fs.readFileSync('C:\\Users\\Simo\\Pictures\\upr5.PNG');
//
// // Convert the binary data to Base64
// const encodedImage = Buffer.from(image).toString('base64');
//
// // console.log("Start:");
// // console.log(encodedImage);
// const decodedImage = Buffer.from(encodedImage, 'base64');
// fs.writeFileSync('decodedImage.jpg', decodedImage);

import {DB} from "../core/DB";
import {PhotoUploadData} from "../types/PhotoUploadData";

export class PhotoModel {
    private conn;
    constructor() {
        this.conn = new DB().conn;
    }

    async uploadPhoto(photoUploadData: PhotoUploadData) {
        const insertDataObject = [
            photoUploadData.user_id,
            photoUploadData.photo_description,
            photoUploadData.photo_base64
        ]

        await this.conn.execute("INSERT INTO photos (user_id, photo_description, photo_base64) VALUES (?, ?, ?)", insertDataObject)

    }

    async getPhotos(user_id: number){
        const [rows] =  await this.conn.query("SELECT photo_description, photo_base64 FROM photos WHERE user_id = ?", [user_id])
        return rows;
    }

}

