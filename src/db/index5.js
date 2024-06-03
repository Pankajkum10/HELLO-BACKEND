import mongoose, { connections } from "mongoose";

import { DB_NAME } from "../constants.js";

console.log("hello")


 const connectDB = async() =>{
    try {
        
        console.log(`${process.env.MANGODB_URI}/${DB_NAME}`)
        await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`)

        console.log("db connected")
        // console.log(`\n mongodb conected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection FAILED ",error);
        process.exit(1)
        
    }



    
}

export default connectDB