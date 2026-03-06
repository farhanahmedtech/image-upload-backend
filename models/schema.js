import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    name: {
        type:String
    },
    image: {
        type:String,
        required:true
    }
})

export const User = mongoose.model("user", imageSchema)