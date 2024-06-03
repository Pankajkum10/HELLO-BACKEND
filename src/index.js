// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"

 import connectDB from "./db/index5.js";


dotenv.config({
    path:'./env'
})








connectDB()
;