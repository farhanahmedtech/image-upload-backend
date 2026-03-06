import express from "express"
import { upload } from "../config/multer.js";
import { imageUpload } from "../controllers/image.controllers.js";

const fileRouter = express.Router();

fileRouter.post("/upload", upload.single("file"),  imageUpload)

export default fileRouter;