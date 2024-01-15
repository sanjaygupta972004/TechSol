import { asyncHandler } from "../utils/asyncHandler.js";
 const validateUserAuthRegister =  (schema) => async (req, res, next) => {
   try {
      const parseBody = await schema.parseAsync(req.body);
 
      req.body = parseBody;
      next();
      
   } catch (err) {

      const status = 402
      const message = "fill the input properly"
      const extraDetails =err.issues.map((curElem) => curElem.message);

      const error = {
         status,
         message,
         extraDetails
      }

     // console.log(error)

      return res.status(402).json(error)

      }
   };


 const validateUserAuthLogin =  (schema) => asyncHandler(async (req, res, next) => {
      try {
         const parseBody = await schema.parseAsync(req.body)

        req.body = parseBody;
        next()
        
      } catch (error) {

         const err = {
            status :402,
            message: "fill the input properly",
            extraDetails:error.issues.map((curVal)=>curVal.message)
         }
         res.status(401).send(err);
      }
   })

export {
   validateUserAuthRegister,
   validateUserAuthLogin
}

