import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
//import { errorMiddleware } from "./middleware/error.middleware.js"

const app = express();

app.use(express.json())
app.use(cors())

// ))
// app.use(cors(
//    {
//       origin: process.env.ORIGIN,
//       credentials:true,
//       methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
//       allowedHeaders: ["Content-Type", "Authorization"],
//    }
// ))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cookieParser())

//app.use(errorMiddleware)


// app.get('/test-error', (req, res, next) => {
//    const err = new Error('Test error');
//    const status = 402
//    const message = "fill the input properly"
//    const extaDetails = err.message
//    const error = {
//       status,
//       message,
//       extaDetails
//    }

//   np



import userRouter from "./routers/user.router.js"
import contactRouter from "./routers/contact.router.js"

app.use("/api/v/users",userRouter)
app.use("/api/v/contacts",contactRouter)

 export {app}