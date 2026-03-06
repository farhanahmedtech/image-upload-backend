import mongoose from "mongoose"
import dotenv from "dotenv"
import dns from "node:dns"
dotenv.config()

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDb = () => {
    try {
        mongoose.connect("mongodb+srv://farhan:data1122@cluster0.r32q0hk.mongodb.net/datahd")
        console.log("DataBase Connected Sucessfully");
    } catch (error) {
        console.log(error);
    }
}