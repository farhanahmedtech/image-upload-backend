import { uploadImage } from "../utils/uploadfiles.js"
import { User } from "../models/schema.js"
import fs from "fs"

export const imageUpload = async (req,res) => {
    try {
        const file = req.file
    
        if(!file) {
            return res.status(400).json({
                message: "File Not Found Please Provide The New File"
            })
        } 

        const path = file.path

        const uploadFile = await uploadImage("file", path)

        if(uploadFile.secure_url) {
            fs.unlinkSync(path, (err) => {
                if(err) {
                    return err
                }
            })
        }

        const newUser = new User({
            name:req.body.name,
            image:uploadFile.secure_url
        })

        await newUser.save()

        res.json({
            message:"User Saved in MongoDB"
        })

    } catch (error) {
        return res.status(500).json({
           message : error.message
        })
    }
}