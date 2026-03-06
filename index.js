import express from "express"
import { connectDb } from "./config/db.js"
import fileRouter from "./routes/file.route.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

connectDb()

app.use(express.json())
app.use("/", fileRouter)

app.listen(2007, () => {
    console.log("Server is Running on Port 2007");
})