import cloudinary from "cloudinary"
import dotenv from "dotenv"
dotenv.config()

const cloudConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}

cloudinary.config(cloudConfig)
export default cloudinary