export const errorMiddleware = (err, req, res) => {
   const status = err.status || 500;
   const message = err.message || "Backend Error";
   const extraDetails = err.extraDetails || "error from the backend";

   console.error(`[${req.method}] ${req.path} >> StatusCode:: [${status}] Message:: [${message}] ExtraDetails:: [${extraDetails}]`)

   console.log("error from middleware",err);

   return res
   .json({
      status,
      message,
      extraDetails
   })
}