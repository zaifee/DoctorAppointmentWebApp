import {v2 as cloudniary} from 'cloudinary'
import fs from 'fs'

const connectCloudinary = () => {

    cloudniary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_APIKEY,
        // api_secretkey: process.env.CLOUDINARY_SECRETKEY
        api_secret: process.env.CLOUDINARY_SECRETKEY

    })
}

export default connectCloudinary