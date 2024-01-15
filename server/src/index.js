import dotenv from "dotenv"

dotenv.config({
   path:"./.env"
})

import {app} from "./app.js";

import connectionDb from "./db/index.js";
connectionDb()
.then(()=>{
   try {
      app.listen(process.env.PORT || 5050,()=>{
         console.log(`Server running on port ${process.env.PORT}`)
      })

   } catch (error) {
      console.log(` mongoDb is not succsesfully connected : ${error}`)
      throw error
   }
})



  